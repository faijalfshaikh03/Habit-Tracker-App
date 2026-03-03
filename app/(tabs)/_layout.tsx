import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

export default function RootLayout() {
  return <Tabs screenOptions={{tabBarActiveTintColor:"coral"}}>
    <Tabs.Screen name="index" options={{title:"Home", 
    tabBarIcon: ({color}) => (
      <FontAwesome5 name="home" size={24} color={color} />
    )}}></Tabs.Screen>
    <Tabs.Screen name="login" options={{title:"Login",
     tabBarIcon: ({color}) => (
      <Entypo name="login" size={24} color={color} />
    )}}></Tabs.Screen>
  </Tabs>
}
