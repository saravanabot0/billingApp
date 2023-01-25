import React, { useEffect, useState } from 'react'

function ProductList(props) {
    const {products, addItems,setQValue, qValue, searchDessert} = props;
    const [searchProducts,setSearchProducts] = useState(products);

    console.log(searchDessert.length > 3 ? "moreThan3" : "lessThan3");

    const clickedDessert = (products) => {
        console.log(products,"products");
        addItems(products);
        setQValue([]);
    }

    const search = () => {
        const filterDessert = products.filter(item => {
            return item.name.toLowerCase().startsWith(searchDessert.toLowerCase());
        });
        setSearchProducts(filterDessert);
    }

    useEffect(()=> {
        search()
    },[searchDessert]);

  return (
    <div>
        <div className={`listOfItems`}>
            {searchProducts.map((item,index)=>
            <div key={index} className={`individualProduct cursorPointer`}>
                <img src={item.image[0].url} alt="products" className='' onClick={()=>clickedDessert(item)}/>
                <p className='dessertName colorWhite'> {item.name} </p>
            </div>
            )}

        </div>
    </div>
  )
}

export default ProductList