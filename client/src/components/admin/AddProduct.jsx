function AddProduct() {  
    return (
        <div className="bg-bg-img bg-center bg-cover p-4 w-full h-screen flex flex-col items-center justify-center">
          <form id="add-product-form" encType="multipart/formdata" className="bg-white border-2 rounded-2xl flex justify-center items-start flex-wrap h-3/4 text-black tablet:text-xl laptop:w-3/5 laptop:h-3/5 desktop:text-2xl shadow-low-box-shadow p-3">
              <div className="w-full flex justify-between tablet:justify-evenly mt-4 p-4">
                <label htmlFor="product-name" className="tablet:w-1/4 tablet:p-2">Product Name</label>
                <input type="text" name="product-name" id="product-name" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
              </div>
              <div className="w-full flex justify-between p-4 tablet:justify-evenly">
                <label htmlFor="product-price" className="tablet:w-1/4 tablet:p-2">Product Price</label>
                <input type="text" name="product-price" id="product-price" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
              </div>
              <div className="w-full flex justify-between p-4 tablet:justify-evenly">
                <label htmlFor="product-brand" className="tablet:w-1/4 tablet:p-2">Product Brand</label>
                <input type="text" name="product-brand" id="product-brand" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
              </div>
              <div className="w-full flex justify-between p-4 tablet:justify-evenly">
                <label htmlFor="product-description" className="tablet:w-1/4 tablet:p-2">Product Description</label>
                <input type="text" name="product-description" id="product-description" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
              </div>
              <div className="w-full flex justify-between p-4 tablet:justify-evenly">
                <label htmlFor="product-stock" className="tablet:w-1/4 tablet:p-2">Product Stock</label>
                <input type="text" name="product-stock" id="product-stock" className="border-b-2 border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
              </div>
              <div className="w-full flex justify-between p-4 tablet:justify-evenly">
                <input type="file" accept="image/png, image/jpeg" name="product-image" id="product-image" className="border-current pl-2 tablet:w-2/4 tablet:p-2 bg-transparent rounded-sm"/>
              </div>
              <div className="w-full flex justify-center p-4">
                <button type="submit" className="border-2 border-current rounded-md p-2 hover:bg-white hover:text-lime-400 hover:scale-110 transition-all	shadow-low-box-shadow hover:shadow-high-box-shadow">Add Product</button>
              </div>
          </form>
        </div>
    )
}

export default AddProduct;