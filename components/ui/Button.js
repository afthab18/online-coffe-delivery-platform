import { Pressable,StyleSheet,Text } from "react-native";

function Button({content,onPress,style,styletext}){
    return(
        <Pressable style={({pressed})=>[styles.button,pressed&&styles.pressed,style]} onPress={onPress}>
            <Text style={[styles.text,styletext]}>{content}</Text>
        </Pressable>
    )
}
export default Button;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    
  },
  text: {
    fontSize:15,
    padding:6,
    textAlign:"center"

    
  },
  pressed: {
    opacity: 0.75,
   

  },
 

});