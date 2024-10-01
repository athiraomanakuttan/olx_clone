import React from 'react';
import './Product.css'

type ProductProps = {
  productData: {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    isFeatured: boolean;
  }[];
};

const Product: React.FC<ProductProps> = ({ productData }) => {
  return (
    <div className="product-list">
      {productData.map((product) => (
        <div key={product.id} className="product-item">
          {/* Featured Label */}
          {product.isFeatured && <span className="featured">FEATURED</span>}
          
          {/* Product Image */}
          <img src={product.image} alt={product.title} className='w-60 h-48' />

          {/* Product Info */}
          <div className="product-info">
            <h5>₹ {product.price}</h5>
            <p className="product-price">{product.title}</p>
            <p>{product.category}</p>
            {/* <p>{product.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
