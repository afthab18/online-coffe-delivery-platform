import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image ,View} from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import NotificationScreen from './screens/NotificationScreen';
import IconButton from './components/ui/IconButton';
import FavoritesContextProvider from './store/favorites-context';
import CappuccinoContextProvider from './store/Cappuccino-context';
import LatteContextProvider from './store/Latte-context';
import MacchiatoContextProvider from './store/Macchiato-context';
import DecafContextProvider from './store/Decaf-context';
import CartContextProvider from './store/Cart-context';
const Stack=createNativeStackNavigator();
const BottomTab=createBottomTabNavigator();

function BottomTabNavigate(){
  return (
    <BottomTab.Navigator
      screenOptions={{
       

        headerRight: () => (
          <IconButton
            icon={"people-outline"}
            color={"white"}
            size={30}
            style={styles.icon}
          />
        ),

        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
          fontSize: 25,
        },

        headerStyle: {
          backgroundColor: "#1bae76",
        },
        tabBarStyle: {
          //backgroundColor:"transparent",
          borderRadius: 80,
          marginBottom: 10,
          marginHorizontal: 20,
        },

        tabBarActiveTintColor: "#1bae76",
        headerLeft: () => (
          <IconButton icon="reorder-three-outline" size={30} color={"white"} />
        ),
      }}
    >
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: "Kopi Kap",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name=" Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton
              icon="notifications-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}



export default function App() {
  return (
    <View style={{flex:1,}}>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <CappuccinoContextProvider>
          <MacchiatoContextProvider>
            <LatteContextProvider>
              <DecafContextProvider>
                <CartContextProvider>
                  <NavigationContainer>
                    <Stack.Navigator>
                      <Stack.Screen
                        name="home"
                        component={Home}
                        options={{
                          headerShown: false,
                        }}
                      />
                      <Stack.Screen
                        name="main"
                        component={BottomTabNavigate}
                        options={{
                          headerShown: false,
                        }}
                      />
                      <Stack.Screen
                        name="Detail"
                        component={DetailScreen}
                        options={{
                          headerTitleStyle: {
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 25,
                          },
                          headerStyle: {
                            backgroundColor: "#1bae76",
                          },
                          headerRight: () => (
                            <IconButton
                              icon={"heart-outline"}
                              size={24}
                              color={"white"}
                            />
                          ),
                        }}
                      />
                    </Stack.Navigator>
                  </NavigationContainer>
                </CartContextProvider>
              </DecafContextProvider>
            </LatteContextProvider>
          </MacchiatoContextProvider>
        </CappuccinoContextProvider>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  
  icon:{
    paddingRight:20
  },
  
});
