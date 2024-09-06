import { createContext } from "react";
import { useReducer } from "react";

export const LatteContext = createContext({
  Latte: [],
  addCoffe: ({ title, imageUrl, price, description }) => {},
  setCoffe: (coffes) => {},
});
function latteReducer(state, action) {
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

function LatteContextProvider({ children }) {
  const [latteState, dispatch] = useReducer(latteReducer, []);
  function addCoffe(coffeData) {
    dispatch({ type: "ADD", payload: coffeData });
  }
   function setCoffe(coffeData) {
     dispatch({ type: "SET", payload: coffeData });
   }

  const value = {
    Latte: latteState,
    addCoffe: addCoffe,
    setCoffe: setCoffe,
  };
  return (
    <LatteContext.Provider value={value}>
      {children}
    </LatteContext.Provider>
  );
}

export default LatteContextProvider;
