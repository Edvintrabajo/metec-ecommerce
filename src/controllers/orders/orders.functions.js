import { db } from '../../config/firebase'
import { getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc
 } from 'firebase/firestore'

const ordersCollection = collection(db, 'orders')

export const getOrders = async (setOrders) => {
    try{
        const data = await getDocs(ordersCollection)
        const filterData = data.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setOrders(filterData)
    } catch (error) {
        console.log(error)
    }
}

export const addOrder = async (idProduct, idUser, setOrders) => {
    try {
        await addDoc(ordersCollection, {
            idProduct,
            idUser
        })
    } catch (error) {
        console.log(error)
    } 
    finally {
        getOrders(setOrders);
    }
}

export const deleteOrder = async (id, setOrders) => {
    try{
        const orderDoc = doc(db, 'orders', id)
        await deleteDoc(orderDoc)
    } catch (error) {
        console.log(error)
    } 
    finally {
        getOrders(setOrders);
    }
}