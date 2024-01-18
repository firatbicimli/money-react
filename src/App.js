import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import products from './products.json'

function App() {

  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])

  useEffect(() => {

  }, [basket])

  return (
    <>
    <Header money={money} />
    {products.map(product => (
      <Product key={product.id} basket={basket} setBasket={setBasket} product={product}/>
    ))}
    </>
  );
}

export default App;
