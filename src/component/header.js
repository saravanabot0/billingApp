import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { IoNewspaper } from "react-icons/io5";

function Header(props) {
  const {setShowBill, showBill, cart, setChangingStyles, setSearchDessert} = props;

  const [showSearchBox,setShowSearchBox] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchDessert(e.target.value);
  }

  return (
    <div className='header colorWhite'>
      {console.log(cart,"cart")}
        <p className='companyName'> <span className='tastyColor'> Tasty </span> Desserts </p>
        <div className='iconBox'>
            <span className='icon cursorPointer searchIcon' onClick={()=>setShowSearchBox(!showSearchBox)}> <ImSearch/> </span>
            <span className={`icon  cursorPointer billingIcon`} onClick={()=> setShowBill(!showBill)}> <IoNewspaper/> <span className={`ordered ${cart.length === 0 ? "hideItems" : "orderItems"}`}> {cart.length} </span> </span>
        </div>
        {/* <div> */}
          <input type="text" placeholder='Search Deserts' className={`searchBox ${showSearchBox ? "showSearchBox" : "hideSearchBox"}`} onChange={(e)=>handleChange(e)}/>
        {/* </div> */}
    </div>
  )
}

export default Header