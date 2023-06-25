import React from 'react';
import './ShoppingCart.css';
import { useState } from 'react';


let id=0;

function ShoppingCart(){
    const [showForm, setshowForm]=useState(false);
    const [items,setItems]=useState([]);
    const [itemName,setItemName]=useState('');
    const [itemPrice,setItemPrice]=useState(0);


  const addItem=(id)=>{
    if(itemName===''||itemPrice===0)
    {
      alert('Both Item and Price should be filled!');
    }
    else
    {
    let item1={
      id: id,
      name: itemName,
      price: itemPrice
    }

    setItems([...items,item1]);
    setshowForm(false);
    setItemName('');
    setItemPrice(0);
  }
  }

  // const handleDelete=(id)=>{
  //   console.log(id);
  //   let item1=items.map(item=>item.id!==id);
  //   setItems(item1);
  // }
  
    return (
        <div className='shop'>
            {
              items.length===0?
              (<h2>Card Empty! Add items</h2>)
              :(<h2>Your cart:</h2>) 
            }
            <ul>
            {
                items.map(item=>(
                     <li key={item.id}>{item.id}  {item.name}  ${item.price}
                     {/* <button onClick={()=>handleDelete(item.id)}>Delete</button> */}
                     </li>
                ))
            }
            </ul>
            {showForm?
              (
              <div className='shop'>
              <h1>Add item</h1>
              Item: <input type="text"  value={itemName} onChange={(e)=>setItemName(e.target.value)} required />
              Price: <input type="number" value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)} />
              <button onClick={()=>addItem(id++)}>Save</button>
              </div>

              )
            :
            (
              <button onClick={()=>setshowForm(true)}>Add Items</button>
            )
    
            }
        </div>
    );

}

export default ShoppingCart