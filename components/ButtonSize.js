import { StyleSheet,View } from "react-native";
import Button from "./ui/Button";
function ButtonSize({changeColor,onPress}){
    return (
      <View style={styles.buttonContainer}>
        <Button
          content={"S"}
          style={[
            styles.button,
            changeColor.small === true ? styles.pressed : null,
          ]}
          onPress={onPress.bind(this, "S")}
        />
        <Button
          content={"M"}
          style={[
            styles.button,
            changeColor.medium === true ? styles.pressed : null,
          ]}
          onPress={onPress.bind(this, "M")}
        />
        <Button
          content={"L"}
          style={[
            styles.button,
            changeColor.large === true ? styles.pressed : null,
          ]}
          onPress={onPress.bind(this, "L")}
        />
      </View>
    );
}

export default ButtonSize;


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 14,
  },
  button: {
    marginHorizontal: 5,
    width: 100,
  },
  pressed: {
    backgroundColor: "#11d238",
  },
});