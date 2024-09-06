import { StyleSheet,View} from "react-native";
import Button from "./ui/Button";
function CartOptions({onPress,changeColor}){
    return (
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
          onPress={onPress.bind(this, "Delivery")}
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
          onPress={onPress.bind(this, "Pickup")}
        />
      </View>
    )   
}
export default CartOptions;

const styles = StyleSheet.create({
  topButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    margin: 9,
    borderRadius: 10,
  },
  Button: {
    width: 160,
    borderRadius: 10,
    margin: 5,
  },
  ButtonText: {
    color: "black",
    fontSize: 18,
  },
  pressed: {
    backgroundColor: "#1bae76",
    borderRadius: 8,
  },
});