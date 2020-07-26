import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ style, onPress, title, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...style, ...styles.container }}>
        <Text>{icon}</Text>
        <Text style={{ fontSize: 18, marginLeft: 30 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
