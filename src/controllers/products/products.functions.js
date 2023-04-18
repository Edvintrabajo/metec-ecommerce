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
    const imageRefName = `images/${imageUpload.name + v4()}`
    const imageRef = ref(storage, imageRefName)
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
            url,
            imageRefName
        })
    } catch (error) {
        console.log(error)
    } 
    // finally {
    //     reload()
    // }
}

export const deleteProduct = async (id) => {
    try{
        const productDoc = doc(db, 'products', id)
        const productData = await getDoc(productDoc)
        const imageRef = ref(storage, productData.data().imageRefName)
        await deleteObject(imageRef)
        await deleteDoc(productDoc)
    } catch (error) {
        console.log(error)
    } 
    // finally {
    //     reload()
    // }
}

export const updateProduct = async (id, name, brand, price, stock, description, ratings, category, type, imageUpload, imageRefName) => {
    const productDoc = doc(db, 'products', id)
    
    if (imageUpload == null) {
        try{    
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
    } else{
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        await uploadBytes(imageRef, imageUpload)
        const url = await getDownloadURL(imageRef)
        
        try{    
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
            try
            {
                const imageRef = ref(storage, imageRefName)
                await deleteObject(imageRef)
            }
            catch (error) {
                console.log(error)
            }

        } catch (error) {
            console.log(error)
        } 
        // finally {
        //     reload()
        // }
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

const reload = () => {
    window.location.reload()
}


export const updateStates = async (id, setName, setBrand, setPrice, setStock, setDescription, setRatings, setCategory, setType, setImageRefName, setUrl) => {
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
    setImageRefName(productData.data().imageRefName)
    setUrl(productData.data().url)
}