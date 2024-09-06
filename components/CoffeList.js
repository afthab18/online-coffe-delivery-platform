import { FlatList,View,Text,Pressable ,StyleSheet,Platform,Image} from "react-native";
import IconButton from "./ui/IconButton";
import { useNavigation} from "@react-navigation/native";

function CoffeList({type,item}){


 
 
 

  const navigation=useNavigation(); 
  function renderCoffeItem(itemData) {
    const item = itemData.item;
      function onPressHandler() {
        navigation.navigate("Detail", { type: type, itemId: item.id });
      }


    return (
      <View style={styles.coffeItem}>
        <Pressable
          android_ripple={{ Colors: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={onPressHandler}
        >
          <View>
            <Image
              source={{uri:item.imageUrl}}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            
            <View style={styles.priceContainer}>
             <Text style={styles.price}>$ {item.price}</Text>
             <IconButton icon={"add"} color={"white"} size={20} style={styles.priceIcon}/>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
  
    return (
      <FlatList
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={renderCoffeItem}
        numColumns={2}
      />
    );


}
export default CoffeList;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75,
    borderColor: "#25bb14",
    borderWidth:0.3,
    borderRadius: 5,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 16,
  },
  coffeItem: {
    width: "45%",
    margin: 10,
    height: "90%",
    borderRadius: 8,
    overflow: Platform.OS === "andriod" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 16,
    backgroundColor: "white",
  },
  priceIcon: {
    marginVertical: 8,
    backgroundColor: "#3ab489",
    borderRadius: 3,
    padding: 3,
    marginHorizontal: 10,
  },
  image: {
    //borderColor: "red",
    borderWidth: 10,
    margin: 10,
    borderRadius: 3,
    height: 150,
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    //backgroundColor: "red",
    marginVertical: 8,
    justifyContent: "flex-end",
  },
  price: {
    marginVertical: 8,
    fontSize: 15,
    fontWeight: "bold",
    position: "relative",
    marginHorizontal: 19,
  },
});


