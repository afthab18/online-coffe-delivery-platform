import { Image, StyleSheet } from "react-native";
import { View,Text } from "react-native";
import Button from "../components/ui/Button.js";
import { fetchCoffes } from "../database/firebase.js";
import { CappuccinoContext } from "../store/Cappuccino-context.js";
import { MacchiatoContext } from "../store/Macchiato-context.js";
import { LatteContext } from "../store/Latte-context.js";
import { DecafContext } from "../store/Decaf-context.js";
import { useEffect } from "react";
import LoadingOverlay from '../components/ui/LoadingOverlay'
 import { useContext,useState } from "react";   
function Home({navigation}){

  const cappuccinoCtx = useContext(CappuccinoContext);
  const macchiatoCtx = useContext(MacchiatoContext);
  const latteCtx = useContext(LatteContext);
  const decafCtx = useContext(DecafContext);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
    function buttonHandler(onPress){
        if(onPress){
          navigation.replace("main")
            
        }
       
     }

      useEffect(() => {
        async function getCoffes() {
          setIsFetching(true);
          try {
            const coffes1 = await fetchCoffes("Cappuccino");
            const coffes2 = await fetchCoffes("Macchiato");
            const coffes3 = await fetchCoffes("Latte");
            const coffes4 = await fetchCoffes("Decaf");
              cappuccinoCtx.setCoffe(coffes1);
              macchiatoCtx.setCoffe(coffes2);
              latteCtx.setCoffe(coffes3);
              decafCtx.setCoffe(coffes4);
            
          } catch (error) {
            setError("Cloud not fetch expenses");
          }
          setIsFetching(false);
        }
        getCoffes();
      }, []);

     
if(isFetching){
  return <LoadingOverlay/>
}else{
    return (
      <View style={styles.rootContainer}>
        <View style={styles.image}>
        <Image source={require("../assets/images/background.png")} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.texthead}>
            Elevate your coffee{"\n"}     experience at{"\n"}         Kopi Kap
          </Text>
          <Text style={styles.textSub}>Where coffee meets comfort. </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button content={"Get Started"} onPress={buttonHandler} style={styles.button}/>
        </View>
      </View>
    );
  }
}


export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#0f9565",
    opacity: 0.95,
    height: "39%",
    width: "100%",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: "30%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  texthead: {
    marginTop: 40,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 30,
  },
  textSub: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 15,
  },
  buttonContainer: {
    marginBottom: 30,
  },
});
