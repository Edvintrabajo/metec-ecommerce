import { v4 as uuidv4 } from "uuid";

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

export const setOrder = (newOrder) => {
    const orders = getOrders();
    const orderIndex = checkOrder(newOrder.idproduct);
    if (orderIndex === -1) {
        newOrder = { ...newOrder, id: uuidv4() };
        orders.push(newOrder);
    } else {
        orders[orderIndex].unidades += newOrder.unidades;
    }
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

export const deleteOrder = (id) => {
    const orders = getOrders();
    orders.splice(id, 1);
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

export const updateOrder = (id, newOrder) => {
    const orders = getOrders();
    orders[id] = newOrder;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

export const getOrderIndex = (id) => {
    const orders = getOrders();
    const orderIndex = orders.findIndex(order => order.id === id);
    return orderIndex;
}

export const getOrdersCount = () => {
    const orders = getOrders();
    const count = orders.reduce((acc, order) => acc + order.unidades, 0);
    return count;
}

// tener en cuenta las unidades
export const getTotalOrders = () => {
    const orders = getOrders();
    const total = orders.reduce((acc, order) => acc + order.unidades * order.price, 0);
    return total;
}

export const checkOrder = (idproducto) => {
    const orders = getOrders();
    const orderIndex = orders.findIndex(order => order.idproduct === idproducto);
    return orderIndex;
}

export const updateOrderQuantity = (index, unidades) => {
    const orders = getOrders();
    orders[index].unidades = unidades;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

export const subtractOrderQuantity = (index) => {
    const orders = getOrders();
    orders[index].unidades--;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

export const addOrderQuantity = (index) => {
    const orders = getOrders();
    orders[index].unidades++;
    const encodedOrders = encodeURIComponent(JSON.stringify(orders));
    document.cookie = `orders=${encodedOrders}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
}

export const clearOrders = () => {
    document.cookie = `orders=; max-age=0; path=/; SameSite=Lax`;
}