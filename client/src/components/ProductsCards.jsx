import { useContext } from 'react';
import { Context } from '../context/Context'

const ProductCards = () => {
    const {products} = useContext(Context);

    if (products.length > 0) {
      return (
          <>
          {products.map((product) => (
              // Link de card https://uiverse.io/Praashoo7/black-lizard-62
              <div key={product.id} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={product.url} alt={product.name} />
                    <h1>{product.name}</h1>
                  </div>
                  <div className="flip-card-back">
                    <p>Marca: {product.brand}</p>
                    <p>Descripcion: {product.description}</p>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
          )
    } else {
        return (
            <h1>
              Error while connecting to the server database
            </h1>
        )
    }
}

export default ProductCards;