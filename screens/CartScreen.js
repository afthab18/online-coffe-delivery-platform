import { ScrollView, StyleSheet, Text, View,SafeAreaView } from "react-native";
import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button";
import { useState } from "react";

import { CartContext } from "../store/Cart-context";
import { useContext } from "react";
import CartList from "../components/ui/CartList";
function CartScreen() {
  const cartCtx=useContext(CartContext)

  const [changeColor, setChangeColor] = useState({
    delivery: true,
    pickup: false,
  });
 
const total=Number((cartCtx.Cart.reduce((total,item)=>total + item.price * item.quantity, 0)).toFixed(2));
 function cartHandler(item){
      
      if (item === "Delivery") {
        setChangeColor({
        delivery:changeColor.delivery === true? true:!changeColor.delivery,
        pickup: false,
        
       
      });
     
    }
      else if (item === "Pickup"){
        setChangeColor({
          delivery: false,
          pickup: changeColor.pickup === true? true:!changeColor.pickup,
          
        });
      
    
    }
  }


  if(cartCtx.Cart.length===0){
   
       return (
        <View style={{flex:1}}>
         <View style={{ backgroundColor: "#1BAE76"}}>
           <View
             style={styles.headingContainer}
           >
             <IconButton
               icon={"reorder-three-outline"}
               size={45}
               color={"white"}
             />
             <Text style={styles.headingText}>Cart</Text>
             <IconButton
               icon={"people-outline"}
               color={"white"}
               size={45}
               style={styles.icon}
             />
           </View>
           </View>
           
           <View style={styles.rootContainer1}>
             <Text style={styles.text}>You have no items in Cart </Text>
           </View>
         </View>
       );
    }else{ 
  
  return (
  <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.headingContainer}>
            <IconButton
              icon={"reorder-three-outline"}
              size={45}
              color={"white"}
            />
            <Text style={styles.headingText}>Cart</Text>
            <IconButton
              icon={"people-outline"}
              color={"white"}
              size={45}
              style={styles.icon}
            />
          </View>
          <View style={styles.topButtonContainer}>
            <Button
              content={"Delivery"}
              style={styles.Button}
              styletext={[
                styles.ButtonText,
                changeColor.delivery === true
                  ? [styles.pressed, { color: "white" }]
                  : null,
              ]}
              onPress={cartHandler.bind(this, "Delivery")}
            />
            <Button
              content={"Pick up"}
              style={styles.Button}
              styletext={[
                styles.ButtonText,
                changeColor.pickup === true
                  ? [styles.pressed, { color: "white" }]
                  : null,
              ]}
              onPress={cartHandler.bind(this, "Pickup")}
            />
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>Delivery Adress</Text>
            <Text>2nd Door Emi</Text>
            <Text>Carnation St,Sunflower Villiage,Brgy,Garden</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View>
            <CartList items={cartCtx.Cart} />
          </View>
          <View style={styles.discount}>
            <IconButton icon={"ticket-outline"} size={24} color={"green"} />
            <Text style={styles.title}> 1 Discount applied</Text>
            <IconButton icon={"chevron-forward-outline"} size={24} />
          </View>
          <Text style={styles.title}>Payment Summary</Text>
          <View style={styles.priceList}>
            <Text style={{ fontSize: 20, marginLeft: 4, width: 80 }}>
              Price
            </Text>
            <Text
              style={{
                marginLeft: 180,
                fontSize: 17,
                marginVertical: 10,
                fontWeight: "bold",
              }}
            >
              $ {total}
            </Text>
          </View>
          <View
            style={[
              styles.priceList,
              { borderColor: "#919395", borderBottomWidth: 0.5 },
            ]}
          >
            <Text style={{ fontSize: 20, marginLeft: 4, width: 80 }}>
              Delivery
            </Text>
            <Text
              style={{
                marginLeft: 180,
                fontSize: 17,
                marginBottom: 20,
                fontWeight: "bold",
              }}
            >
              ${10}
            </Text>
          </View>

          <View style={[styles.priceList]}>
            <Text style={{ fontSize: 20, marginLeft: 4, width: 80 }}>
              Total
            </Text>
            <Text
              style={{
                marginLeft: 180,
                fontSize: 17,
                marginBottom: 20,
                fontWeight: "bold",
              }}
            >
              ${total + 10}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}}
export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#1BAE76",
    height: 250,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  topButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    margin: 9,
    borderRadius: 10,
  },
 
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  rootContainer1: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
  },
  emptyText: {
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "red",
  },
  discount: {
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#7d7d7d",
    alignItems: "center",
    margin: 3,
  },
  title:{
    fontSize: 20,
    margin: 4,
    fontWeight: "bold",
  },
  Button:{
    width: 160,
    borderRadius: 10,
    margin: 5,
  },
  ButtonText:{
    color: "black",
    fontSize: 18,
  },
  headingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    marginHorizontal: 30,
  },
  headingContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  icon: {
    marginLeft: 110,
  },
  pressed: {
    backgroundColor: "#1bae76",
    borderRadius: 8,
  },
  addressContainer: {
    margin: 20,
    marginTop: 30,
    backgroundColor: "white",
    height: "50%",
    borderRadius: 10,
    padding: 20,
  },
  addressTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceContainer: {
    marginTop: 70,
    flex: 1,
    backgroundColor: "#fcfcfc",
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 4,
  },
  priceList:{
    flexDirection: "row",
  },
});