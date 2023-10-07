import Stopwatch from "./screens/Stopwatch";
import Timer from "./screens/Timer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Now we are using the react navigation api
    <NavigationContainer>
      {/* You can add cool navigators like this check the react-nativ docs for more */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Stopwatch"
          component={Stopwatch}
          options={{
            tabBarIcon: () => <Text>⏱️</Text>,
          }}
        />
        <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            tabBarIcon: () => <Text>⏳</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
