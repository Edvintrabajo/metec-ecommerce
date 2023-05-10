import { v4 as uuidv4 } from "uuid";
import { db } from '../../config/firebase'
import { getDocs,
    getDoc,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
} from 'firebase/firestore'

import { auth } from "../../config/firebase";

/* Todas estas funciones solo alteran las cookies, en ningún momento alteran al estado */


// Obtener ordenes, si no hay ordenes, devuelve un array vacío
export const getOrders = () => {
    const cookies = document.cookie;
    const cookiesArray = cookies.split('; ');
    const ordersCookie = cookiesArray.find(cookie => cookie.startsWith('orders='));
    if (!ordersCookie) {
        return [];
    }
    const ordersString = ordersCookie.split('orders=')[1];
    const orders = JSON.parse(decodeURIComponent(ordersString));
    return orders;
}

// Añadir una orden
export const setOrder = (newOrder) => {
    const orders = getOrders();
    const orderIndex = checkOrder(newOrder.idproduct);
    if (orderIndex === -1) {
        orders.push(newOrder);
    } else {
        orders[orderIndex].unidades += newOrder.unidades;
    }
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

// Borrar una orden
export const deleteOrder = (index) => {
    const orders = getOrders();
    orders.splice(index, 1);
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

// Actualizar una orden
export const updateOrder = (index, newOrder) => {
    const orders = getOrders();
    orders[index] = newOrder;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

// Obtener el índice de una orden, pasándole una id como parámetro
export const getOrderIndex = (id) => {
    const orders = getOrders();
    const orderIndex = orders.findIndex(order => order.id === id);
    return orderIndex;
}

// Obtener el número total de ordenes
export const getOrdersCount = () => {
    const orders = getOrders();
    const count = orders.reduce((acc, order) => acc + order.unidades, 0);
    return count;
}

// Obtener el precio total de todas las ordenes
export const getTotalOrders = () => {
    const orders = getOrders();
    const total = orders.reduce((acc, order) => acc + order.unidades * order.price, 0);
    return total;
}

// Comprobar si un producto ya está en alguna orden, si está, devuelve su índice, si no está, devuelve -1
export const checkOrder = (idproducto) => {
    const orders = getOrders();
    const orderIndex = orders.findIndex(order => order.idproduct === idproducto);
    return orderIndex;
}

// Actualizar cantidad de unidades de una orden, pasándole un índice y las unidades por parámetro
export const updateOrderQuantity = (index, unidades) => {
    const orders = getOrders();
    orders[index].unidades = unidades;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

// Restar una unidad a una orden, pasándole un índice como parametro
export const subtractOrderQuantity = (index) => {
    const orders = getOrders();
    orders[index].unidades--;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

// Sumar una unidad a una orden, pasándole un índice como parametro
export const addOrderQuantity = (index) => {
    const orders = getOrders();
    orders[index].unidades++;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

// Limpiar todas las ordenes
export const clearOrders = () => {
    document.cookie = `orders=; max-age=0; path=/; SameSite=Lax`;
}

// Enviar todas las ordenes al servidor, como un pedido, junto a la fecha cuando se realiza, id del usuario, email del usuario, número de items y precio total, si no hay ordenes, no se envía el pedido
export const sendOrders = async () => {
    const orders = getOrders();

    if (orders.length === 0) {
        return;
    }

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const fullDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year} ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`;

    const ordersCollection = collection(db, 'orders');

    const productos = orders.map(order => {
        return {
            id: order.idproduct,
            name: order.name,
            unidades: order.unidades,
            price : order.price
        }
    })

    const jsonProductos = JSON.stringify(productos);

    const cart = {
        iduser: auth.currentUser.uid,
        email: auth.currentUser.email,
        items: getOrdersCount(),
        total: getTotalOrders(),
        date: fullDate,
        products: jsonProductos
    }
    
    try {
        await addDoc(ordersCollection, cart);
        clearOrders();
    } catch (error) {
        console.log(error);
    }
}