import { createContext,useState } from "react";

export const FavoritesContext=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{},
});

function FavoritesContextProvider({children}){
    const [FavoriteCoffeIds,setFavoriteCoffeIds]=useState([]);
      function addFavorite(id){
            setFavoriteCoffeIds((currentFavIds)=>[...currentFavIds,id]);
        }
        function removeFavorite(id){
            setFavoriteCoffeIds((currentFavIds)=>currentFavIds.filter(coffeId=>coffeId!==id));
        }
    const value={
        ids:FavoriteCoffeIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,

    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;
    

