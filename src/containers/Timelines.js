import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Timelines = () => {
  return (
    <View style={styles.container}>
      <Text>TimeLine</Text>
    </View>
  );
};

export default Timelines;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
