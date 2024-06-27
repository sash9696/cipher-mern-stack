import React, { useReducer } from "react";
import "./App.css";

//shopping cart
// itemname , id, price, quantity
//items  => array of objects
//total:0

//actions
//addtocart, removefromcart, clearcart
//ui dispatches an action
//reducer interprets the action and updates the state

const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};
const initialCart = {
  items: [],
  total: 0,
};
function cartReducer(state, action) {
  console.log("cartReducer", { state, action });

  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      //if item is already present in the cart
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id)
      if (existingIndex !== - 1) {
        //item exists,  modify the item, update the quantity
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += action.payload.quantity;
        return{
          ...state,
          items:updatedItems,
          total: state.total + (action.payload.quantity * action.payload.price)
        }
      } else {
        //else we will add the item to the items array

        return {
          ...state,
          items: [...state.items, { ...action.payload }],
          total: state.total + action.payload.quantity * action.payload.price,
        };
      }

    default:
      return state;
  }
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  console.log("cart", { cart });
  const productA = {
    id:1,
    name: "PRODUCT A",
    price: 100,
    quantity: 1,
  };

  function addToCart(item) {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: item,
    });
  };

  function removeFromCart(itemId){
    
  }
  return (
    <div>
      <h1>Shopping Cart</h1>

      <ul>
        {cart.items.length == 0 && <p>Your shopping cart is empty</p>}
        {/* map list doen the items */}
        {
          cart.items?.map(item => (
            <li key={item.id}>

              {item.name} - Quantity: {item.quantity} - Price : ${item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)} >Remove</button>


            </li>
          ))
        }
      </ul>

        
      <p>Total:{cart.total}</p>

<br />
<br />
<br />
<br />
<br />
<button>Clear Cart</button>
<hr />
<button onClick={() => addToCart(productA)}>Add To Cart</button>
<button>Remove From Cart</button>
    </div>
  );
}

export default App;
