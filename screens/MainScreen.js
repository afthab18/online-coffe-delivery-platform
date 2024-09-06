import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
import CoffeList from "../components/CoffeList";
import { useState } from "react";
import ButtonOption from "../components/ButtonOption";
import { CappuccinoContext } from "../store/Cappuccino-context";
import { MacchiatoContext } from "../store/Macchiato-context";
import { LatteContext } from "../store/Latte-context";
import { DecafContext } from "../store/Decaf-context";
import { useContext } from "react";
function MainScreen(){
   const cappuccinoCtx = useContext(CappuccinoContext);
   const macchiatoCtx = useContext(MacchiatoContext);
   const latteCtx = useContext(LatteContext);
   const decafCtx = useContext(DecafContext);
  const [changeColor,setChangeColor]=useState({
    Cappuccino:true,
    Macchiato:false,
    Latte:false,
    Decaf:false})
  const [type,setType]=useState("Cappuccino");
  const [items, setItem] = useState(cappuccinoCtx.Cappuccino);
  function topButtonHandler(item){
      setType(item);
      if (item === "Cappuccino") {
        setItem(cappuccinoCtx.Cappuccino)
        setChangeColor({
        Cappuccino:changeColor.Cappuccino === true? true:!changeColor.Cappuccino,
        Macchiato: false,
        Latte: false,
        Decaf: false,
      });}
      if (item === "Macchiato"){
        setItem( macchiatoCtx.Macchiato)
        setChangeColor({
          Cappuccino: false,
          Macchiato: changeColor.Macchiato === true? true:!changeColor.Macchiato,
          Latte: false,
          Decaf: false,
        });
      } 
      else if (item === "Latte"){
       setItem( latteCtx.Latte)
            setChangeColor({
              Cappuccino: false,
              Macchiato: false,
              Latte: changeColor.Latte === true? true:!changeColor.Latte,
              Decaf: false,
            });  
      } 
      else if (item === "Decaf"){
       setItem(decafCtx.Decaf)
               setChangeColor({
                 Cappuccino: false,
                 Macchiato: false,
                 Latte: false,
                 Decaf:changeColor.Decaf === true? true:!changeColor.Decaf,
               });
      } 
 }




return (
 
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Ad.png")}
        style={styles.Adstyle}
      />
      <ButtonOption onPress={topButtonHandler} changeColor={changeColor}/>
      <View style={styles.flatListContainer}>
        <CoffeList type={type} item={items}/>
      </View>
    </View>
  
);

}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  Adstyle: {
    minHeight: 60,
    borderRadius: 5,
    elevation: 4,
    marginTop: 4,
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
    backgroundColor: "#1BAE76",
  },
});


