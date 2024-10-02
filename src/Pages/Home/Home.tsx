import { createContext, useEffect, useState } from 'react';
import Menubar from '../../component/Menubar/Menubar';
import Navbar from '../../component/Navbar/Navbar';
import './Home.css';
import Product from '../../component/Product/Product';
import Footer from '../../component/Footer/Footer';
type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  isFeatured: boolean;
};
export const ProductContext = createContext<ProductType[]>([]);


const allProducts = async (): Promise<ProductType[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search,setSearch]= useState<string>("")
  const [menu,setMenu]= useState<string>("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await allProducts();
        console.log("ProductData", productData)
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar setSearch={setSearch}/>
      <Menubar  setMenu={setMenu}/>
      <ProductContext.Provider value={products}>
      <Product  search={search} menu={menu}/>
      </ProductContext.Provider>
      <Footer/>
    </div>
  );
};

export default Home;
