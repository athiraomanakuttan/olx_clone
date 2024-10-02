import  { useEffect, useState } from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
type ProductType = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    isFeatured?: boolean;
  };

const SingleProduct = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const { id } = useParams<{ id: string }>(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`); 
        const data = await response.json();
        setProduct({ ...data, isFeatured: true }); 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button className='rounded border p-3 border-black m-3'><i className="fa-solid fa-arrow-left"></i></button>
      <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} className="image-detail" />
      </div>
      <div className="product-info">
        {product.isFeatured && <span className="featured-label">FEATURED</span>}
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">₹ {product.price}</p>
        <p className="product-category">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="product-description">
          <strong>Description:</strong> {product.description}
        </p>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
    </>
    
  );
}

export default SingleProduct
