 import React from 'react'
 
const CartContext=React.createContext({
  items:[],
  addItem:(item)=>{},
  removeItem:(id)=>{},
  addQuantityHandler:(item)=>{},
  removeQuantityHandler :(item)=>{},
})

export default CartContext;