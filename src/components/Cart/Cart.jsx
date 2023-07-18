 
import React ,{useContext} from 'react';
import Modal from '../UI/Modal'; 
import classes from './Cart.module.css';
import CartCntxt from '../../store/Cart-context'

const Cart = (props) => {

  const cartcntx=useContext(CartCntxt);
  let totalAmount=0;
  cartcntx.items.forEach(item=>{
    totalAmount= totalAmount+ (Number(item.price)*Number(item.quantity));
  })

  const combinedItems={};
  cartcntx.items.forEach((item)=>{
    const itemName = item.name;
    const itemQuantity = Number(item.quantity);
    const itemPrice = Number(item.price);
    if (combinedItems[itemName]) 
      combinedItems[itemName].quantity += itemQuantity;
    else combinedItems[itemName] = { ...item, quantity: itemQuantity, price: itemPrice };
  })


  const cartItems = (
    <ul className={classes['cart-items']}>
      { Object.keys(combinedItems).map((item) => (
        <li style={{wordSpacing:'10px'}}>Name: {item} Price: {combinedItems[item].price} Quantity: {combinedItems[item].quantity} </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']  } onClick={props.onClose}>
            Close
        </button>
        <button className={classes.button } >Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
