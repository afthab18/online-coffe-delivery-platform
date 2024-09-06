import { createContext } from "react";
import { useReducer } from "react";

export const DecafContext = createContext({
  Decaf: [],
  addCoffe: ({ title, imageUrl, price, description }) => {},
  setCoffe: (coffes) => {},
});
function decafReducer(state, action) {
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

function DecafContextProvider({ children }) {
  const [decafState, dispatch] = useReducer(decafReducer, []);
  function addCoffe(coffeData) {
    dispatch({ type: "ADD", payload: coffeData });
  }
   function setCoffe(coffeData) {
     dispatch({ type: "SET", payload: coffeData });
   }

  const value = {
    Decaf: decafState,
    addCoffe: addCoffe,
    setCoffe: setCoffe,
  };
  return (
    <DecafContext.Provider value={value}>
      {children}
    </DecafContext.Provider>
  );
}

export default DecafContextProvider;
