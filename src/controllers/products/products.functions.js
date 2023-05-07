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
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import {v4} from 'uuid'

const productsCollection = collection(db, 'products')

export const getProducts = async (setProducts) => {
    try{
        const data = await getDocs(productsCollection)
        const filterData = data.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setProducts(filterData)
        document.getElementById('showAllProducts').style.display = 'none'
    } catch (error) {
        console.log(error)
    }
}

export const getTenProducts = async (setProducts) => {
    try{
        const data = await getDocs(productsCollection)
        const filterData = data.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        // obtener los 10 primeros
        filterData.splice(10)
        setProducts(filterData)
        document.getElementById('showAllProducts').style.display = 'flex'
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (data, setData, setProducts) => {
    const imageRefName = `images/${data.imageUpload.name + v4()}`
    const imageRef = ref(storage, imageRefName)
    await uploadBytes(imageRef, data.imageUpload)
    const url = await getDownloadURL(imageRef)

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
            imageRefName
        })
    } catch (error) {
        console.log(error)
    } 
    finally {
        getProducts(setProducts);
        resetData(data, setData);
    }
}

export const deleteProduct = async (id, setProducts) => {
    try{
        const productDoc = doc(db, 'products', id)
        const productData = await getDoc(productDoc)
        const imageRefName = ref(storage, productData.data().imageRefName)
        await deleteObject(imageRefName)
        await deleteDoc(productDoc)
    } catch (error) {
        console.log(error)
    } 
    finally {
        getProducts(setProducts);
    }
}

export const updateProduct = async (id, setProducts, data, setData, oldImageRefName) => {
    const productDoc = doc(db, 'products', id)
    
    if (data.imageUpload == null) {
        try{    
            await updateDoc(productDoc, {
                name: data.name,
                brand: data.brand,
                price: data.price,
                stock: data.stock,
                description: data.description,
                ratings: data.ratings,
                category: data.category,
                type: data.type,
            })
        } catch (error) {
            console.log(error)
        } 
        finally {
            getProducts(setProducts);
            resetData(data, setData);
        }
    } 
    else{
        const imageRefName = `images/${data.imageUpload.name + v4()}`
        const imageRefUpload = ref(storage, imageRefName)

        await uploadBytes(imageRefUpload, data.imageUpload)
        const url = await getDownloadURL(imageRefUpload)
        
        try{    
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
                imageRefName
            })
            try
            {
                const imageRef = ref(storage, oldImageRefName)
                await deleteObject(imageRef)
            }
            catch (error) {
                console.log(error)
            }

        } catch (error) {
            console.log(error)
        } 
        finally {
            getProducts(setProducts);
            resetData(data, setData);
        }

    }
}

export const displayForm = (id) => {
    const container = document.getElementById(id)
    if (container.style.display == 'flex') {
        container.style.display = 'none'
    } else {
        container.style.display = 'flex'
    }
}

export const addData = (data, setData) => {
    setData(data.name = document.getElementById('name').value)
    setData(data.brand = document.getElementById('brand').value)
    setData(data.price = Number(document.getElementById('price').value))
    setData(data.stock = Number(document.getElementById('stock').value))
    setData(data.description = document.getElementById('description').value)
    setData(data.ratings = Number(document.getElementById('ratings').value))
    setData(data.category = document.getElementById('category').value)
    setData(data.type = document.getElementById('type').value)
    setData(data.imageUpload = document.getElementById('image').files[0])
}

export const addDataEdit = (dataEdit, setDataEdit) => {
    setDataEdit(dataEdit.name = document.getElementById('editName').value)
    setDataEdit(dataEdit.brand = document.getElementById('editBrand').value)
    setDataEdit(dataEdit.price = Number(document.getElementById('editPrice').value))
    setDataEdit(dataEdit.stock = Number(document.getElementById('editStock').value))
    setDataEdit(dataEdit.description = document.getElementById('editDescription').value)
    setDataEdit(dataEdit.ratings = Number(document.getElementById('editRatings').value))
    setDataEdit(dataEdit.category = document.getElementById('editCategory').value)
    setDataEdit(dataEdit.type = document.getElementById('editType').value)
    setDataEdit(dataEdit.imageUpload = document.getElementById('editImage').files[0])
}

export const getStates = async (id, data, setData) => {
    const productDoc = doc(db, 'products', id)
    const productData = await getDoc(productDoc)
    // DATA: name, brand, price, stock, description, ratings, category, type, imageRefName, url
    setData(data = productData.data())
    showData(data)
}

export const resetForm = (id) => {
    document.getElementById(id).reset()
}

const resetData = (data, setData) => {
    setData(data = {})
}

const showData = (data) => {
    document.getElementById('editName').value = data.name
    document.getElementById('editBrand').value = data.brand
    document.getElementById('editPrice').value = data.price
    document.getElementById('editStock').value = data.stock
    document.getElementById('editDescription').value = data.description
    document.getElementById('editRatings').value = data.ratings
    document.getElementById('editCategory').value = data.category
    document.getElementById('editType').value = data.type
}

export const evalRatings = (ratings) => {
    let msg = []
    
    switch (ratings) {
        case 1:
        case 2:
            msg.push('★')
            msg.push('☆')
            msg.push('☆')
            msg.push('☆')
            msg.push('☆')
            break;
        case 3:
        case 4:
            msg.push('★')
            msg.push('★')
            msg.push('☆')
            msg.push('☆')
            msg.push('☆')
            break;
        case 5:
        case 6:
            msg.push('★')
            msg.push('★')
            msg.push('★')
            msg.push('☆')
            msg.push('☆')
            break;
        case 7:
        case 8:
            msg.push('★')
            msg.push('★')
            msg.push('★')
            msg.push('★')
            msg.push('☆')
            break;
        case 9:
        case 10:
            msg.push('★')
            msg.push('★')
            msg.push('★')
            msg.push('★')
            msg.push('★')
            break;
        default:
            msg.push('☆')
            msg.push('☆')
            msg.push('☆')
            msg.push('☆')
            msg.push('☆')
            break;
    }
    return msg
}