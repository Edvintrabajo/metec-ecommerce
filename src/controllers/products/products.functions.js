import { db } from '../../config/firebase'
import { storage } from '../../config/firebase'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import {v4} from 'uuid'
import { getDocs,
    getDoc,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    query,
    where,
    orderBy
} from 'firebase/firestore'
import { showAlert, scrollToTopSmooth } from '../general/general.functions'

const productsCollection = collection(db, 'products')

export const productsPerPage = 12

// Obtener todos los productos del servidor, guardar los productos en el estado de productos, también guardar los primeros 10 productos para la primera página
export const getProducts = async (setProducts, setCurrentTenProducts) => {
  try {
    const dataQuery = query(productsCollection, orderBy("name", "desc"));
    const data = await getDocs(dataQuery);
    const filterData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(filterData);
    setCurrentTenProducts(filterData.slice(0, productsPerPage));
  } catch (error) {
    showAlert(error.message, "error"); 
  }
};

// Obtener todos los productos del servidor con una buena puntuación
export const getTrendingTop = async (setProducts, setCurrentTenProducts) => {
  // Cambio a futuro: Cambiar a maypr el limite de 5 a 10
  try {
    const trendingTopQuery = query(
      productsCollection,
      where("ratings", ">=", 5),
      orderBy("ratings", "desc")
    );
    const data = await getDocs(trendingTopQuery);
    const filterData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(filterData);
    setCurrentTenProducts(filterData.slice(0, productsPerPage));
  } catch (error) {
    showAlert(error.message, "error"); 
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (
  setProducts,
  category,
  setCurrentTenProducts
) => {
  try {
    const categoryQuery = query(
      productsCollection,
      where("category", "==", category),
      orderBy("name", "asc")
    );
    const data = await getDocs(categoryQuery);
    const filterData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(filterData);
    setCurrentTenProducts(filterData.slice(0, productsPerPage));
  } catch (error) {
    showAlert(error.message, "error"); 
  }
};

// Devuelve un objeto de un producto
const getData = (pref = "") => {
  return  {
    name: document.getElementById(`${pref}Name`).value,
    brand: document.getElementById(`${pref}Brand`).value,
    price: Number(document.getElementById(`${pref}Price`).value),
    stock: Number(document.getElementById(`${pref}Stock`).value),
    description: document.getElementById(`${pref}Description`).value,
    ratings: Number(document.getElementById(`${pref}Ratings`).value),
    category: document.getElementById(`${pref}Category`).value,
    type: document.getElementById(`${pref}Type`).value,
    imageUpload: document.getElementById(`${pref}Image`).files[0]
  }
}

// Insertar un producto en el servidor
export const addProduct = async (setProducts, setCurrentTenProducts, currentCategory) => {
  const data = getData();
  const imageRefName = `images/${data.imageUpload.name + v4()}`;
  const imageRef = ref(storage, imageRefName);
  await uploadBytes(imageRef, data.imageUpload);
  const url = await getDownloadURL(imageRef);

  try {
    await addDoc(productsCollection, {
      name: data.name,
      brand: data.brand,
      price: data.price,
      stock: data.stock,
      description: data.description,
      ratings: data.ratings,
      category: data.category,
      type: data.type,
      url,
      imageRefName,
    });
    showAlert("Product added successfully!", "success")
  } catch (error) {
    showAlert(error.message, "error"); 
  } finally {
    if (currentCategory === "All") {
      getProducts(setProducts, setCurrentTenProducts);
    } else if (currentCategory === "Trending Top") {
      getTrendingTop(setProducts, setCurrentTenProducts);
    } else {
      getProductsByCategory(setProducts, currentCategory, setCurrentTenProducts);
    }
  }
};

// Borrar un producto en el servidor
export const deleteProduct = async (id, setProducts, setCurrentTenProducts, currentCategory) => {
  try {
    const productDoc = doc(db, "products", id);
    const productData = await getDoc(productDoc);
    const imageRefName = ref(storage, productData.data().imageRefName);
    await deleteObject(imageRefName);
    await deleteDoc(productDoc);
    showAlert("Product deleted successfully!", "info");
  } catch (error) {
    showAlert(error.message, "error"); 
  } finally {
    if (currentCategory === "All") {
      getProducts(setProducts, setCurrentTenProducts);
    } else if (currentCategory === "Trending Top") {
      getTrendingTop(setProducts, setCurrentTenProducts);
    } else {
      getProductsByCategory(setProducts, currentCategory, setCurrentTenProducts);
    }
  }
};

// Actualizar un producto en el servidor
export const updateProduct = async (product, setProducts, setCurrentTenProducts, currentCategory) => {
  const productDoc = doc(db, "products", product.id);

  const data = getData("edit");

  if (data.imageUpload == null) {
    try {
      await updateDoc(productDoc, {
        name: data.name,
        brand: data.brand,
        price: data.price,
        stock: data.stock,
        description: data.description,
        ratings: data.ratings,
        category: data.category,
        type: data.type,
      });
      showAlert("Product updated successfully!", "info");
    } catch (error) {
      showAlert(error.message, "error"); 
    } finally {
      // getProducts(setProducts, setCurrentTenProducts);
      if (currentCategory === "All") {
        getProducts(setProducts, setCurrentTenProducts);
      } else if (currentCategory === "Trending Top") {
        getTrendingTop(setProducts, setCurrentTenProducts);
      } else {
        getProductsByCategory(setProducts, currentCategory, setCurrentTenProducts);
      }
      resetForm("edit-product-container");
    }
  } else {
    const imageRefName = `images/${data.imageUpload.name + v4()}`;
    const imageRefUpload = ref(storage, imageRefName);

    await uploadBytes(imageRefUpload, data.imageUpload);
    const url = await getDownloadURL(imageRefUpload);

    try {
      await updateDoc(productDoc, {
        name: data.name,
        brand: data.brand,
        price: data.price,
        stock: data.stock,
        description: data.description,
        ratings: data.ratings,
        category: data.category,
        type: data.type,
        url,
        imageRefName,
      });
      try {
        const imageRef = ref(storage, product.imageRefName);
        await deleteObject(imageRef);
        showAlert("Product updated successfully!", "info");
      } catch (error) {
        showAlert(error.message, "error"); 
      }
    } catch (error) {
      showAlert(error.message, "error"); 
    } finally {
      getProducts(setProducts, setCurrentTenProducts);
      resetForm("edit-product-container");
      scrollToTopSmooth();
    }
  }
};

// Asignar valores al formulario de editar
export const setCurrentProductValues = (product) => {
  document.getElementById("editName").value = product.name;
  document.getElementById("editBrand").value = product.brand;
  document.getElementById("editPrice").value = product.price;
  document.getElementById("editStock").value = product.stock;
  document.getElementById("editDescription").value = product.description;
  document.getElementById("editRatings").value = product.ratings;
  document.getElementById("editCategory").value = product.category;
  document.getElementById("editType").value = product.type;
};

// Resetear un formulario
export const resetForm = (id) => {
  document.getElementById(id).reset();
};

// Obtener puntuación según el rating
export const evalRatings = (ratings) => {
  let msg = [];

  switch (ratings) {
    case 1:
    case 2:
      msg.push("★");
      msg.push("☆");
      msg.push("☆");
      msg.push("☆");
      msg.push("☆");
      break;
    case 3:
    case 4:
      msg.push("★");
      msg.push("★");
      msg.push("☆");
      msg.push("☆");
      msg.push("☆");
      break;
    case 5:
    case 6:
      msg.push("★");
      msg.push("★");
      msg.push("★");
      msg.push("☆");
      msg.push("☆");
      break;
    case 7:
    case 8:
      msg.push("★");
      msg.push("★");
      msg.push("★");
      msg.push("★");
      msg.push("☆");
      break;
    case 9:
    case 10:
      msg.push("★");
      msg.push("★");
      msg.push("★");
      msg.push("★");
      msg.push("★");
      break;
    default:
      msg.push("☆");
      msg.push("☆");
      msg.push("☆");
      msg.push("☆");
      msg.push("☆");
      break;
  }
  return msg;
};

// Obtener ultimo dato de un array
const last = (array) => {
  return array[array.length - 1];
};

// Pasar a la siguiente página (10 productos siguientes)
export const next = async (
  setProducts,
  currentTenProducts,
  setCurrentTenProducts,
  category
) => {
  try {
    let dataQuery;
    const lastElement = last(currentTenProducts);

    if (category == "Trending Top") {
      dataQuery = query(
        productsCollection,
        where("ratings", ">=", 5),
        orderBy("ratings", "desc")
      );
    } 
    else if (category == "All") {
      dataQuery = query(productsCollection, orderBy("name", "desc"));
    }
    else {
      dataQuery = query(
        productsCollection,
        where("category", "==", category),
        orderBy("name", "asc")
      );      
    }
    try {
      const data = await getDocs(dataQuery);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filterData)
      filterData.map((product, index) => {
        if (product.id == lastElement.id) {
          setProducts(filterData);
          setCurrentTenProducts(
            filterData.slice(index + 1, index + productsPerPage + 1)
          );
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      scrollToTopSmooth();
    }
  } catch (error) {
    console.log(error);
  }
};

// Pasar a la anterior página (10 productos anteriores)
export const prev = async (
  setProducts,
  currentTenProducts,
  setCurrentTenProducts,
  category
) => {
  try {
    let dataQuery;
    const firstElement = currentTenProducts[0];

    if (category == "Trending Top") {
      dataQuery = query(
        productsCollection,
        where("ratings", ">=", 5),
        orderBy("ratings", "desc")
      );
    } else if (category == "All") {
      dataQuery = query(productsCollection, orderBy("name", "desc"));
    } 
    else {
      dataQuery = query(
        productsCollection,
        where("category", "==", category),
        orderBy("name", "asc")
      );      
    }

    try {
      const data = await getDocs(dataQuery);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      filterData.map((product, index) => {
        if (product.id == firstElement.id) {
          setProducts(filterData);
          setCurrentTenProducts(
            filterData.slice(index - productsPerPage, index)
          );
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      scrollToTopSmooth();
    }
  } catch (error) {
    console.log(error);
  }
};