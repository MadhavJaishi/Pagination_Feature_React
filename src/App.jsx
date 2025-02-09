import { use, useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
const PAGE_SIZE = 10;
const App = () => {
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const json = await data.json();
      setAllProducts(json.products);
      setProducts(json.products.slice(0, PAGE_SIZE));
    }
    getProducts();
  }, [])

  useEffect(() => {
    handlePageChange(currPage);
  }, [currPage])
  const handlePageChange = (n) => {
    const start = n * 10;
    const end = start + 10;
    setProducts(allProducts.slice(start, end));
  }

  const totalProducts = allProducts.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  return <div>
    <h1 style={{fontSize: 40, textAlign: 'center'}}>Pagination</h1>
    {!products ? <div>No product found</div> : 
    <>
      <div className='pageContainer' style={{textAlign: 'center'}}>{[...Array(noOfPages).keys()].map((n, ind) => (<span key={ind} className='pageNumber' onClick={() => setCurrPage(n)}>{n + 1}</span>))}</div>
      <div className='productList'>
          {products.map((p) => (
            <ProductCard key={p.id} title={p.title} desc={p.description} image={p.thumbnail} price={p.price}/>
          ))}
      </div></>}
      <Footer />
  </div>
}
export default App;