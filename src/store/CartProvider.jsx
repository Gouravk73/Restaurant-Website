import React,{useState} from 'react'
import CartContext from './Cart-context'

const CartProvider = props => {
   const [items, setItems] = useState([]);
    const addItemToCartHandler=item=>{
      setItems([...items, item])
    };
    const removeItemFromCartHandler=id=>{};

    const addQuantityHandler=item=>{ 
      const existingItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...items];
        
        (updatedItems[existingItemIndex].quantity) =Number(updatedItems[existingItemIndex].quantity)+ 1;
        setItems(updatedItems);
      } else {
        setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
      }};
    const removeQuantityHandler=id=>{
      const existingItemIndex = items.findIndex((cartItem) => cartItem.id === id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity -= 1;

      if (updatedItems[existingItemIndex].quantity === 0) {
        updatedItems.splice(existingItemIndex, 1);
      }
      setItems(updatedItems);
    }
    };


    const cartContext={
        items:items, 
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        addQuantityHandler:addQuantityHandler,
        removeQuantityHandler:removeQuantityHandler
    };
  return (
     <CartContext.Provider value={cartContext}>
        {props.children}
     </CartContext.Provider>
  )
}

export default CartProvider