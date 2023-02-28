import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Cart } from './Components/cart';
import { Header } from './Components/header';
import { ProductList } from './Components/productList';

const App = () => {

  const [products, setProducts] = useState([])

  const [currentSale, setCurrentSale] = useState([])

  const[filter, setFilter] = useState('')

  const filteredProductsList = products.filter((item) => 
  filter === '' ? true : item.name.toLowerCase().includes(filter)  || item.name.toLowerCase().includes(filter))

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
    .then((resp) => resp.json())
    .then((resp) => setProducts(resp))
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
    <div><Toaster/></div>
      <Header
      setFilter={setFilter}
      filter={filter}
      />
    <section className='containerPrincipal'>
      <ProductList 
      products={filteredProductsList}
      listProducts={products}
      currentSale={currentSale}
      setCurrentSale={setCurrentSale}
       />
        <Cart 
        listProducts={products} 
        currentSale={currentSale} 
        setCurrentSale={setCurrentSale}
      />
    </section>
    <div>

    </div>
    </>
  )
}

export default App