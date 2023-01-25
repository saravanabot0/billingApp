import React, { useState } from 'react';
import './App.css';
import Header from './component/header';
import productDetails from './component/mockData';
import BillingDetails from './pages/billingDetails';
import ProductList from './pages/productList';

function App() {
  const {products} = productDetails;
  const [showBill,setShowBill] = useState(false);
  const [cart,setCart] = useState([]);
  const [changingStyles,setChangingStyles] = useState(false);
  const [qValue,setQValue] = useState([]);
  const [searchDessert,setSearchDessert] = useState("");


  const addItems = (item) => {
    console.log(cart,"cart");
    console.log(item,"item");
    const existing = cart.find((x)=> x.product_id === item.product_id);
    console.log(existing,"existing")
    if(existing) {
      console.log("yes");
      setCart(cart.map((x) =>
      x.product_id === item.product_id ? {...existing,qty:existing.qty+1} : x)
      )
    } else {
      setCart([...cart,{...item,qty:1}])
    }
  }

  return (
    <div className="App">
      {console.log(cart,"updatedCart")}
    <Header setShowBill={setShowBill} showBill={showBill} cart={cart} setChangingStyles={setChangingStyles} setSearchDessert={setSearchDessert}/>
    <ProductList products={products} addItems={addItems} setQValue={setQValue} qValue={qValue} searchDessert={searchDessert}/>
    <BillingDetails showBill={showBill} cart={cart} setShowBill={setShowBill} setChangingStyles={setChangingStyles} changingStyles={changingStyles} qValue={qValue} setQValue={setQValue}/>
    </div>
  );
}

export default App;
