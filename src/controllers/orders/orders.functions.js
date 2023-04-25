export const getOrders = () => {
    const orders = localStorage.getItem('orders');
    if (orders) {
        return JSON.parse(orders);
    }
    return [];
}

export const setOrder = (order) => {
    const orders = getOrders();
    order = {
        id: orders.length + 1,
        ...order
    }
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    window.location.reload();
}

export const deleteOrder = (id) => {
    const orders = getOrders();
    const newOrders = orders.filter(order => order.id !== id);
    localStorage.setItem('orders', JSON.stringify(newOrders));
}

export const updateOrder = (id, order) => {
    const orders = getOrders();
    const newOrders = orders.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                ...order
            }
        }
        return item;
    });
    localStorage.setItem('orders', JSON.stringify(newOrders));
}

export const getOrder = (id) => {
    const orders = getOrders();
    const order = orders.find(order => order.id === id);
    return order;
}