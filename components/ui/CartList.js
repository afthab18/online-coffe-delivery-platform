import {  View, Text, Image, StyleSheet, Pressable } from "react-native";
import Button from "./Button";
import IconButton from "./IconButton";
import { CartContext } from "../../store/Cart-context";
import { useContext } from "react";

function CartList({ items }) {
  
   const cartCtx=useContext(CartContext)

   const removeFromCart = (item) => {
  const isItemInCart = cartCtx.Cart.find((cartItem) => cartItem.id === item.id&&cartItem.price===item.price);
  if (isItemInCart.quantity === 1) {
    cartCtx.updateCoffe(cartCtx.Cart.filter(
      (cartItem) => cartItem.id !== item.id ||cartItem.price !== item.price
    ));
  } else {
    cartCtx.updateCoffe(
      cartCtx.Cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.price === item.price
          ? { ...cartItem, quantity: cartItem.quantity - 1 } 
          : cartItem
      )
    );
  }
};


function AddButton(item){
  
  const isItemInCart = cartCtx.Cart.find((cartItem) => cartItem.id === item.id && cartItem.price===item.price); 
  if (isItemInCart) {
    cartCtx.updateCoffe(cartCtx.Cart.map((cartItem) => 
     (cartItem.id === item.id &&cartItem.price===item.price)
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem 
        )
     )
  } else {
       cartCtx.addCart( { ...item,quantity: 1 });


 };
}


function DeleteItem(item) {
    cartCtx.updateCoffe(
      cartCtx.Cart.filter((cartItem) =>
        (cartItem.id !== item.id||cartItem.price !== item.price))
    )
}


















  return (
    items.map((item)=>{
         return (
           <View style={styles.container} key={Math.random()}>
             <View style={styles.itemContainer}>
               <Image source={{ uri: item.imageUrl }} style={styles.image} />
               <View style={styles.container}>
                 <Text style={styles.title}> {item.title}</Text>
                 <Text>${item.price}</Text>
                 <IconButton icon={"trash"} size={20}  color={"red"} onPress={DeleteItem.bind(this,item)}/>
               </View>
               <View style={styles.quantityContainer}>
                

                 <Button
                   content={"-"}
                   style={styles.buttonSub}
                   styletext={styles.functionSub}
                   onPress={removeFromCart.bind(this,item)}
                 />
                 <Text style={styles.quantity}>{item.quantity}</Text>
          
                 <Button
                   content={"+"}
                   style={styles.buttonAdd}
                   styletext={styles.functionAdd}
                   onPress={AddButton.bind(this,item)}
                 />
               </View>
             </View>
           </View>
         );
    })





  );
}
export default CartList;
const styles = StyleSheet.create({
  quantityContainer: {
    marginVertical: 30,
    flexDirection: "row",
  },
  container: {
    flexDirection: "column",
  },

  image: {
    margin: 10,
    borderRadius: 3,
    height: 60,
    padding: 8,
    width: 60,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
    width: 170,
  },
  pressed: {
    opacity: 0.9,
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 3,
    backgroundColor: "#fbf8f8ff",
    elevation: 4,
    borderRadius: 4,
    margin: 4,
  },
  quantity: {
    fontSize: 15,
    marginHorizontal: 4,
    fontWeight: "bold",
  },
  functionAdd: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonSub: {
    backgroundColor: "green",
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  functionSub: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonAdd: {
    backgroundColor: "green",
    borderRadius: 100,
    width: 30,
    height: 30,
  },
});
