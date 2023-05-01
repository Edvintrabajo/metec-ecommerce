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
    newOrder = { ...newOrder, id: uuidv4() };
    const encodedOrders = encodeURIComponent(JSON.stringify([...orders, newOrder]));
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
    return orders.length;
}

export const getTotalOrders = () => {
    const orders = getOrders();
    const total = orders.reduce((acc, order) => acc + order.price, 0);
    return total;
}