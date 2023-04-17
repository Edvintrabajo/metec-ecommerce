import { db } from '../../config/firebase'
import { getDocs,
    getDoc,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
 } from 'firebase/firestore'

 import { storage } from '../../config/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {v4} from 'uuid'

const productsCollection = collection(db, 'products')

// OPTIMIZAR GET PRODUCTS - Función que guarde los productos en el local storage para que no se haga una 
// petición a la base de datos cada vez que se recargue la página
// export const saveProducts = (products) => {
//     localStorage.setItem('products', JSON.stringify(products))
// }

export const getProducts = async (setProducts) => {
    try{
        const data = await getDocs(productsCollection)
        const filterData = data.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setProducts(filterData)
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (name, brand, price, stock, description, ratings, category, type, imageUpload) => {
    
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    await uploadBytes(imageRef, imageUpload)
    const url = await getDownloadURL(imageRef)

    try {
        await addDoc(productsCollection, {
            name,
            brand,
            price: Number(price),
            stock: Number(stock),
            description,
            ratings: Number(ratings),
            category,
            type,
            url
        })
    } catch (error) {
        console.log(error)
    } 
    finally {
        reload()
    }
}

export const deleteProduct = async (id) => {
    try{
        const productDoc = doc(db, 'products', id)
        await deleteDoc(productDoc)
    } catch (error) {
        console.log(error)
    } finally {
        reload()
    }
}

export const updateProduct = async (id, name, brand, price, stock, description, ratings, category, type, imageUpload) => {
    if (imageUpload == null) {
        try{
            const productDoc = doc(db, 'products', id)
    
            await updateDoc(productDoc, {
                name,
                brand,
                price: Number(price),
                stock: Number(stock),
                description,
                ratings: Number(ratings),
                category,
                type
            })
        } catch (error) {
            console.log(error)
        } 
        finally {
            reload()
        }
    }
    else{
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        await uploadBytes(imageRef, imageUpload)
        const url = await getDownloadURL(imageRef)
        
        try{
            const productDoc = doc(db, 'products', id)
    
            await updateDoc(productDoc, {
                name,
                brand,
                price: Number(price),
                stock: Number(stock),
                description,
                ratings: Number(ratings),
                category,
                type,
                url
            })
        } catch (error) {
            console.log(error)
        } 
        finally {
            reload()
        }
    }
    
}

export const displayForm = () => {
    const editForm = document.querySelector('#edit-product-form')
    
    if (editForm.style.display == 'flex') {
        editForm.style.display = 'none'
    } else {
        editForm.style.display = 'flex'
    }
}

const reload = () => {
    window.location.reload()
}


export const updateStates = async (id, setName, setBrand, setPrice, setStock, setDescription, setRatings, setCategory, setType, setImageUpload) => {
    const productDoc = doc(db, 'products', id)
    const productData = await getDoc(productDoc)
    
    setName(productData.data().name)
    setBrand(productData.data().brand)
    setPrice(productData.data().price)
    setStock(productData.data().stock)
    setDescription(productData.data().description)
    setRatings(productData.data().ratings)
    setCategory(productData.data().category)
    setType(productData.data().type)
    setImageUpload(productData.data().url)
}