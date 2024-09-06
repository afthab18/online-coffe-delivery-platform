
import { createContext } from "react";
import { useReducer } from "react";

export const CappuccinoContext = createContext({
  Cappuccino: [],
  addCoffe: ({ title, imageUrl, price, description }) => {},
  setCoffe: (coffes) => {},
});
function cappuccinoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    default:
      return state;
  }
}

function CappuccinoContextProvider({ children }) {
  const [cappuccinoState, dispatch] = useReducer(cappuccinoReducer, []);
  function addCoffe(coffeData) {
    dispatch({ type: "ADD", payload: coffeData });
  }
  function setCoffe(coffeData) {
    dispatch({ type: "SET", payload: coffeData });
  }
 
  
  const value = {
    Cappuccino: cappuccinoState,
    addCoffe: addCoffe,
    setCoffe: setCoffe,
  };
  return (
    <CappuccinoContext.Provider value={value}>
      {children}
    </CappuccinoContext.Provider>
  );
}

export default CappuccinoContextProvider;