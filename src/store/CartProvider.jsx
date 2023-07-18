import React,{useState} from 'react'
import CartContext from './Cart-context'

const CartProvider = props => {
   const [items, setItems] = useState([]);
    const addItemToCartHandler=item=>{
      setItems([...items, item])
    };
    const removeItemFromCartHandler=id=>{
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartContext={
        items:items, 
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    };
  return (
     <CartContext.Provider value={cartContext}>
        {props.children}
     </CartContext.Provider>
  )
}

export default CartProvider