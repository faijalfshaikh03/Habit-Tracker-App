import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    <Link style={styles.link} href="/login">Click here for login</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
  },
  link: {
    height:20, width:200, backgroundColor: "red",
      margin:10, textAlign: "center", borderRadius:10,
  }
})