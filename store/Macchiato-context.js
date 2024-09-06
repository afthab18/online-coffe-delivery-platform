import { createContext } from "react";
import { useReducer } from "react";

export const MacchiatoContext = createContext({
  Macchiato: [],
  addCoffe: ({ title, imageUrl, price, description }) => {},
 
  setCoffe: (coffes) => {},
});
function macchiatoReducer(state, action) {
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

function MacchiatoContextProvider({ children }) {
  const [macchiatoState, dispatch] = useReducer(macchiatoReducer, []);
  function addCoffe(coffeData) {
    dispatch({ type: "ADD", payload: coffeData });
  }
  
  function setCoffe(coffeData) {
    dispatch({ type: "SET", payload: coffeData });
  }
  

  const value = {
    Macchiato: macchiatoState,
    addCoffe: addCoffe,
    
    setCoffe: setCoffe,
  };
  return (
    <MacchiatoContext.Provider value={value}>{children}</MacchiatoContext.Provider>
  );
}

export default MacchiatoContextProvider;
