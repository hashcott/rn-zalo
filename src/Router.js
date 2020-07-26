import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Messages from "./containers/Messages";
import Contacts from "./containers/Contacts";
import Groups from "./containers/Groups";
import Timelines from "./containers/Timelines";
import More from "./containers/More";
import DrawContent from "./DrawContent";
import Conversation from "./components/Conversation";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MessagesContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Conversation" component={Conversation} />
    </Stack.Navigator>
  );
};
const TabContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Messages"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Messages") {
            iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
          } else if (route.name === "Contacts") {
            iconName = focused ? "ios-contact" : "ios-contact";
          } else if (route.name === "Groups") {
            iconName = focused ? "ios-contacts" : "ios-contacts";
          } else if (route.name === "Timelines") {
            iconName = focused ? "ios-time" : "ios-time";
          } else if (route.name === "More") {
            iconName = focused ? "ios-options" : "ios-options";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4D7CF2",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Messages" component={MessagesContainer} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Timelines" component={Timelines} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawContent {...props} />}>
        <Drawer.Screen name="Home" component={TabContainer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
