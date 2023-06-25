import React from 'react';
import './ShoppingCart.css';
import { useState } from 'react';


let id=0;

function ShoppingCart(){
    const [showForm, setshowForm]=useState(false);
    const [items,setItems]=useState([]);
    const [itemName,setItemName]=useState('');
    const [itemPrice,setItemPrice]=useState(0);
    const [editId,setEditId]=useState(null);

  const addItem=()=>{
    if(itemName===''||itemPrice===0)
    {
      alert('Both Item and Price should be filled!');
    }
    else
    {
    let item1={
      id: id++,
      name: itemName,
      price: itemPrice
    }

    setItems([...items,item1]);
    setshowForm(false);
    setItemName('');
    setItemPrice(0);
  }
  }

  const editItem=()=>{
    if(itemName===''||itemPrice===0)
    {
      alert('Both Item and Price should be filled!');
    }
    else
    {
      let updatedItems=items.map(item=>
        item.id===editId?{...item,name:itemName,price:itemPrice}:item
      );
      
      console.log(updatedItems);
      setItems(updatedItems);
      setshowForm(false);
      setEditId(null);
      setItemName('');
      setItemPrice(0);

  }

  }

  const handleDelete=(id)=>{
    let updatedItems=items.filter(item=>
      item.id!==id);
    setItems(updatedItems);
  }

  const handleEdit=(id)=>{
    let itemtobeEdited=items.find(item=>item.id===id);
    setEditId(id);
    setItemName(itemtobeEdited.name);
    setItemPrice(itemtobeEdited.price);
    setshowForm(true);
  }
  
    return (
        <div className='shop'>
            {
              items.length===0?
              (<h2>Cart Empty! Add items</h2>)
              :(<h2>Your cart:</h2>) 
            }
            <ul>
            {
                items.map(item=>(
                     <li key={item.id}>{item.id}  {item.name}  ${item.price}
                     <button onClick={()=>handleEdit(item.id)}>Edit</button>
                     <button onClick={()=>handleDelete(item.id)}>Delete</button>
                     </li>
                ))
            }
            </ul>
            {showForm?
              (
              <div className='shop'>
              <h1>{editId===null?'Add Item':'Edit Item'}</h1>
              Item: <input type="text"  value={itemName} onChange={(e)=>setItemName(e.target.value)} required />
              Price: <input type="number" value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)} />
              {
              editId===null?
              <button onClick={addItem}>Save</button>
              :<button onClick={editItem}>Save Changes</button>
              }
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