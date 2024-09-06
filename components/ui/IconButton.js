import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ icon, color, size, onPress,style }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed,style]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button:{
    marginLeft:9,
  },
  pressed: {
    opacity: 0.7,
  },
});
