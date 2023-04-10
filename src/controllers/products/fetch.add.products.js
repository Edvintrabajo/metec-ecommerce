const fetchAddProduct = async () => {
    document.getElementById('add-product-form').addEventListener('submit', (e) => {
        // e.preventDefault()
        const productName = document.getElementById('product-name').value
        const productPrice = document.getElementById('product-price').value
        const productBrand = document.getElementById('product-brand').value
        const productDescription = document.getElementById('product-description').value
        const productStock = document.getElementById('product-stock').value
        const productCategory = document.getElementById('product-category').value
        // Obtener la imagen del usuario
        const fileInput = document.getElementById('product-image');
        const productImage = fileInput.files[0];

        // Crear un objeto FormData para enviar la imagen y el nombre
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('price', productPrice);
        formData.append('brand', productBrand);
        formData.append('description', productDescription);
        formData.append('stock', productStock);
        formData.append('category', productCategory);
        formData.append('image', productImage);
        
        fetch ('http://localhost:3000/api/products', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          console.log("Server response: ", data)
        })    
        .catch(err => alert(err))   
        
      })
}

export default fetchAddProduct