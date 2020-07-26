import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
const WIDTH = Dimensions.get("window").width;
const MessageItem = ({ name, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Conversation")}
    >
      <Image
        style={styles.avatar}
        source={require("../../assets/avatar.jpg")}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.body}>Xin chào bạn nhé</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 5,
    width: WIDTH,
    paddingLeft: 10,
    alignItems: "center",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 999,
  },
  content: {
    borderTopWidth: 0.2,
    borderTopColor: "gray",
    width: WIDTH,
    paddingTop: -30,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  body: {
    paddingLeft: 10,
    fontWeight: "100",
  },
});
