import React from 'react';
import './ShoppingCart.css';
import { useState } from 'react';


let id=0,name=1000,price=500;

function ShoppingCart(){
    const [showForm, setshowForm]=useState(false);
    const [item,setItem]=useState([]);
    // const [itemName,setItemName]=useState('');


    const handleClick=()=>{
      console.log(showForm);
      let sf=showForm;
      if(sf)
      {
        setshowForm(false);
      }
      else{
        setshowForm(true);
      }
      let item1={
        id1:id++,
        name1: name++,
        price1:price++
      }
      setItem([...item,item1])
      
    }
  
    return (
        <div className='shop'>
            <button onClick={handleClick}>show form</button>
            <ul>
            {
                item.map(it=>(
                     <li key={it.id1}>{it.name1}</li>
                ))
            }
            </ul>
            {showForm?<h1>this is form</h1>:<h1>and this is not</h1>
    
            }
        </div>
    );

}

export default ShoppingCart