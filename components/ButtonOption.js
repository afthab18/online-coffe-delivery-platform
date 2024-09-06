
import Button from "./ui/Button";
import { View,StyleSheet} from "react-native";


function ButtonOption({changeColor,onPress}){
  return (
    <View style={styles.topButtonBar}>
      <Button
        content={"Cappuccino"}
        style={[
          styles.button,
          changeColor.Cappuccino === true ? styles.pressed : null,
        ]}
        onPress={onPress.bind(this, "Cappuccino")}
      />
      <Button
        content={"Macchiato"}
        style={[
          styles.button,
          changeColor.Macchiato === true ? styles.pressed : null,
        ]}
        onPress={onPress.bind(this, "Macchiato")}
      />
      <Button
        content={"Latte"}
        style={[
          styles.button,
          changeColor.Latte === true ? styles.pressed : null,
        ]}
        onPress={onPress.bind(this, "Latte")}
      />
      <Button
        content={"Decaf"}
        style={[
          styles.button,
          changeColor.Decaf === true ? styles.pressed : null,
        ]}
        onPress={onPress.bind(this, "Decaf")}
      />
    </View>
  );
}

export default ButtonOption;
const styles = StyleSheet.create({
  

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
  
  pressed: {
    backgroundColor: "#11d238",
  },
});
