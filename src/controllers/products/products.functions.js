import { db } from '../../config/firebase'
import { getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
 } from 'firebase/firestore'

const productsCollection = collection(db, 'products')

export const getProducts = async (setProducts) => {
    try{
        const data = await getDocs(productsCollection)
        const filterData = data.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setProducts(filterData)
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (name, brand, price, stock, description, ratings, category, type, image, url) => {
    try {
        await addDoc(productsCollection, {
            name,
            brand,
            price,
            stock,
            description,
            ratings,
            category,
            type,
            image,
            url
        })
    } catch (error) {
        console.log(error)
    } finally {
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

export const updateProduct = async (id, name, brand, price, stock, description, ratings, category, type, image, url) => {
    try{
        const productDoc = doc(db, 'products', id)
        
        // NECESITA VALIDACIONES
        
        await updateDoc(productDoc, {
            name,
            brand,
            price,
            stock,
            description,
            ratings,
            category,
            type,
            image,
            url
        })
    } catch (error) {
        console.log(error)
    } finally {
        reload()
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
