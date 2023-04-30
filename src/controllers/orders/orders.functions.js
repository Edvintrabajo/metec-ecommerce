export const getOrders = () => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(cookie => cookie.startsWith('orders='));
    if (cookie === undefined) return [];
    const encodedOrders = cookie.split('=')[1];
    return JSON.parse(decodeURIComponent(encodedOrders));
}

export const setOrder = (newOrder) => {
    const existingOrders = getOrders();
    const updatedOrders = [...existingOrders, newOrder];
    const encodedOrders = encodeURIComponent(JSON.stringify(updatedOrders));
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