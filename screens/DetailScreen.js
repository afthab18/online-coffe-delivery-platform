import { Text, View ,Image,} from "react-native";
import { Cappuccino,Macchiato,Latte,Decaf } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button";
import { useContext, useState,useLayoutEffect } from "react";
import { FavoritesContext } from "../store/favorites-context";
import ButtonSize from "../components/ButtonSize";
import { MacchiatoContext } from "../store/Macchiato-context";
import { CappuccinoContext } from "../store/Cappuccino-context";
import { LatteContext } from "../store/Latte-context";
import { DecafContext } from "../store/Decaf-context";
import { CartContext } from "../store/Cart-context";
 function DetailScreen({route,navigation}){
  const cappuccinoCtx = useContext(CappuccinoContext);
  const macchiatoCtx = useContext(MacchiatoContext);
  const latteCtx = useContext(LatteContext);
  const decafCtx = useContext(DecafContext);
const favoriteCoffeCtx = useContext(FavoritesContext);
  const [changeColor, setChangeColor] = useState({
    small: true,
    medium: false,
    large: false,
  });
 
  const [type, setType] = useState("S");
 const { id, title, imageUrl, price, description } =findItem();
 const coffeIsFavorite = favoriteCoffeCtx.ids.includes(id);
 const [updatedprice, setprice] = useState(price);
const cartCtx=useContext(CartContext);

function buynowButton(){
   const coffe = {
    id: id,
    title: title,
    type:type,
    price:updatedprice,
    imageUrl: imageUrl,
  };
  
  const isItemInCart = cartCtx.Cart.find((cartItem) => cartItem.id === coffe.id && cartItem.price===coffe.price); 
  if (isItemInCart) {
    cartCtx.updateCoffe(cartCtx.Cart.map((cartItem) => 
     (cartItem.id === coffe.id &&cartItem.price===coffe.price)
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem 
        )
     )
  } else {
       cartCtx.addCart( { ...coffe,quantity: 1 });


 };
 navigation.navigate("Cart");

}



function changeFavoriteStatusHandler() {
  
  if (coffeIsFavorite ) {
    favoriteCoffeCtx.removeFavorite(id);
  
  } else {
    favoriteCoffeCtx.addFavorite(id);
    
  }
}
useLayoutEffect(() => {
  navigation.setOptions(
    {
      headerRight: () => {
        return (
          <IconButton
            icon={coffeIsFavorite ? "heart" : "heart-outline"}
            color="white"
            size={24}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    },
    [navigation, changeFavoriteStatusHandler]
  );
});






      let foundItem;
      function findItem(){
        const type=route.params.type;
        if(type==="Cappuccino"){
           foundItem= cappuccinoCtx.Cappuccino.filter((item)=>item.id===route.params.itemId)
            }
        else if(type==="Macchiato"){
           foundItem = macchiatoCtx.Macchiato.filter(
             (item) => item.id === route.params.itemId
           );
            }
          else   if(type==="Latte"){
           foundItem =latteCtx.Latte.filter((item) => item.id === route.params.itemId);
            }
            else if(type==="Decaf"){
           foundItem =decafCtx.Decaf.filter((item) => item.id === route.params.itemId);
            }
    return foundItem[0];
    }
  
    function sizeHandler(item){
      setType(item);
      if (item === "S") {
        setChangeColor({
        small:changeColor.small === true? true:!changeColor.small,
        medium: false,
        large: false,
       
      });
     setprice((Number(price)).toFixed(2))
    }
      else if (item === "M"){
        setChangeColor({
          small: false,
          medium: changeColor.medium === true? true:!changeColor.medium,
          large: false,
        });
       setprice((Number(price)+20).toFixed(2))
      } 
      else if (item === "L"){
            setChangeColor({
              small: false,
              medium: false,
              large: changeColor.large === true? true:!changeColor.large,
             
            }); 
            setprice((Number(price)+30).toFixed(2));
            
      }
    }
  
    
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rateContainer}>
          <IconButton
            icon={"star"}
            color={"#e7be18"}
            size={25}
            style={styles.icon}
          />
          <Text style={[styles.rateText, { fontWeight: "bold", fontSize: 15 }]}>
            5.0
          </Text>
          <Text style={styles.rateText}>(230)</Text>
        </View>
        <View style={styles.descriptionCotainer}>
          <Text style={styles.Heading}>Description</Text>
          <Text style={styles.descriptionText}>{description} </Text>
        </View>

        <Text style={styles.Heading}>Size</Text>
       <ButtonSize onPress={sizeHandler} changeColor={changeColor}/>
        <View style={styles.footerContainer}>
          <Text style={styles.price}>Price</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${updatedprice}</Text>
            <Button
              content={"Buy  Now"}
              style={styles.buynowButton}
              styletext={styles.buttontext}
              onPress={buynowButton}
            />
          </View>
        </View>
      </View>
    );
}
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    marginLeft:10,
  },
  image: {
    alignItems: "center",
    width: "100%",
    height: "30%",
    borderRadius: 4,
    resizeMode:" ",
    elevation: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 5,
    color: "#4f524f",
  },
  icon: {
    marginTop: 2,
  },
  rateContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  rateText: {
    padding: 2,
    marginTop: 3,
  },
  descriptionCotainer: {
    marginTop: 3,
  },
  
  Heading: {
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 5,
    color: "#373737",
  },
  descriptionText: {
    fontSize: 14,
    marginVertical: 5,
    color: "#776f6f",
  },
  
priceContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginHorizontal:10,
  marginTop:10,

},
footerContainer:{
  marginTop:55
},
buynowButton:{
  backgroundColor:"#2eca2bef",
  width:"50%"
},
price:{
   marginLeft:10,
   fontSize:16
},
priceText:{
  fontSize:35,
 fontWeight:"bold",
  textAlign:"center",
  padding:10,
  width:"50%",
  backgroundColor:"#cbcbcb",
  borderRadius:8,
  marginRight:5
  
},
buttontext:{
  color:"white",
  textAlign:"center",
  padding:23,
  fontSize:20,
  fontWeight:"bold",
  
},
  pressed: {
    backgroundColor:"#11d238",
  },
});