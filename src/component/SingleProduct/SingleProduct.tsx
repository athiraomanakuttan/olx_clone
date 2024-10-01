import  { useEffect, useState } from 'react';
import './ProductDetail.css';
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/1'); // Fetching a single product with ID = 1
        const data = await response.json();
        setProduct({ ...data, isFeatured: true }); // Assuming this product is featured
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
    <div className="product-detail-container">
      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.title} className="image-detail" />
      </div>

      {/* Product Info */}
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
  );
}

export default SingleProduct
