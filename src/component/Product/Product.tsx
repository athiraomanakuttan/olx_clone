import React, { useContext } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Pages/Home/Home';

type ProductProps = {
  search: string;
  menu:string
};

const Product: React.FC<ProductProps> = ({  search,menu }) => {
const productData = useContext(ProductContext)
  return (
    <div className="product-list">
      {productData
        .filter((data) => data.title.toLowerCase().includes( search ? search.toLowerCase() : menu.toLowerCase())) // Corrected filter function
        .map((product) => (
          <div key={product.id} className="product-item">
            {/* Featured Label */}
            {product.isFeatured && <span className="featured">FEATURED</span>}
            
            {/* Product Image */}
            <Link to={`/product-view/${product.id}`}>
              <img src={product.image} alt={product.title} className='w-60 h-48' />
            </Link>

            {/* Product Info */}
            <div className="product-info">
              <h5>₹ {product.price}</h5>
              <p className="product-price">{product.title}</p>
              <p>{product.category}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
