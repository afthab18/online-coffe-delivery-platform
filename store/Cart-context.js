import { createContext } from "react";
import { useReducer } from "react";

export const CartContext = createContext({
  Cart: [],

  addCart: ({ id, title, imageUrl,size, price, quantity = 0 }) => {},
  updateCoffe: ({}) => {},
});
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return [...action.payload];
    default:
      return state;
  }
}

function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, []);
  function addCart(coffeData) {
    dispatch({ type:"ADD", payload: coffeData });
  }
  function updateCoffe(coffeDate) {
    dispatch({ type: "UPDATE", payload: coffeDate });
  }
  

  const value = {
    Cart: cartState,
    addCart: addCart,
    updateCoffe: updateCoffe,
  };
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
