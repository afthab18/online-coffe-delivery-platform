import { useContext,useState } from "react";
import CoffeList from "../components/CoffeList";
import Button from "../components/ui/Button";

import { FavoritesContext } from "../store/favorites-context";
import { Text, View, StyleSheet } from "react-native";
import ButtonOption from "../components/ButtonOption";
import { CappuccinoContext } from "../store/Cappuccino-context";
import { MacchiatoContext } from "../store/Macchiato-context";
import { LatteContext } from "../store/Latte-context";
import { DecafContext } from "../store/Decaf-context";

function FavoritesScreen() {
   const cappuccinoCtx = useContext(CappuccinoContext);
   const macchiatoCtx = useContext(MacchiatoContext);
   const latteCtx = useContext(LatteContext);
   const decafCtx = useContext(DecafContext);
   const [changeColor, setChangeColor] = useState({
     Cappuccino: true,
     Macchiato: false,
     Latte: false,
     Decaf: false,
   });
   const [type, setType] = useState("Cappuccino");
   


    const favoriteCoffeCtx=useContext(FavoritesContext);
   const favoriteCoffe1=cappuccinoCtx.Cappuccino.filter(coffe=>favoriteCoffeCtx.ids.includes(coffe.id));

   const favoriteCoffe2 = macchiatoCtx.Macchiato.filter((coffe) =>
     favoriteCoffeCtx.ids.includes(coffe.id)
   );

   const favoriteCoffe3 = latteCtx.Latte.filter((coffe) =>
     favoriteCoffeCtx.ids.includes(coffe.id)
   );

   const favoriteCoffe4 =decafCtx.Decaf.filter((coffe) =>
     favoriteCoffeCtx.ids.includes(coffe.id)
   );
   const [items, setItems] = useState(favoriteCoffe1);
   const favoriteCoffe=[].concat(favoriteCoffe1,favoriteCoffe2,favoriteCoffe3,favoriteCoffe4)
   

   if(favoriteCoffe.length===0){
       
       return <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favourites meals yet. </Text>
       </View>
    }else{ 
      function  topButtonHandler(item) {
        setType(item);
        if (item === "Cappuccino") {
          setItems(favoriteCoffe1);
          setChangeColor({
            Cappuccino:
              changeColor.Cappuccino === true ? true : !changeColor.Cappuccino,
            Macchiato: false,
            Latte: false,
            Decaf: false,
          });
        }
        if (item === "Macchiato") {
          setItems(favoriteCoffe2);
          setChangeColor({
            Cappuccino: false,
            Macchiato:
              changeColor.Macchiato === true ? true : !changeColor.Macchiato,
            Latte: false,
            Decaf: false,
          });
        } else if (item === "Latte") {
          setItems(favoriteCoffe3);
          setChangeColor({
            Cappuccino: false,
            Macchiato: false,
            Latte: changeColor.Latte === true ? true : !changeColor.Latte,
            Decaf: false,
          });
        } else if (item === "Decaf") {
          setItems(favoriteCoffe4);
          setChangeColor({
            Cappuccino: false,
            Macchiato: false,
            Latte: false,
            Decaf: changeColor.Decaf === true ? true : !changeColor.Decaf,
          });
        }
      }

return(

 <View style={styles.container}>
 <ButtonOption onPress={topButtonHandler} changeColor={changeColor}/>
   <View style={styles.flatListContainer}>
     <CoffeList type={type} item={items} />
   </View>
 </View>
  
      );
    }
}
 



export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  topButtonBar: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 8,
  },
  flatListContainer: { flex: 1, marginVertical: 2, marginHorizontal: 4 },
  pressed: {
    backgroundColor: "#11d238",
  },
});
