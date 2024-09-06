import { View, ActivityIndicator, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      {/*<ActivityIndicator size="large" color="white" />*/}
      <LottieView
        autoPlay
        loop
        source={{uri:"https://lottie.host/c4fd622e-0b6f-48cc-99e6-d03fc047fb99/RJFKSyPiLe.json"}}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    opacity:2,
    backgroundColor:"#0f9565",
  },
});
