// Fetch products from the API
const fetchProducts = async () => {
    const data = await fetch('http://10.11.100.9:3000/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return data.json()
}

export default fetchProducts