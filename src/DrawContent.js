import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Button from "./components/Button";
const DrawContent = (props) => {
  return (
    <View style={styles.drawerContent}>
      <View style={styles.userInfoSection}>
        <Image
          source={require("../assets/avatar.jpg")}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.title}>Nguyễn Đức Hạnh</Text>
        <Text style={{ ...styles.caption, fontWeight: "300", marginTop: 5 }}>
          @hanhgoogle
        </Text>
        <View style={styles.row}>
          <View style={styles.section}>
            <Text style={[styles.paragraph, styles.caption]}>10M</Text>
            <Text style={{ ...styles.caption, fontWeight: "100" }}>
              Following
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.paragraph, styles.caption]}>10M</Text>
            <Text style={{ ...styles.caption, fontWeight: "100" }}>
              Followers
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.drawerSection}>
        <Button
          title="Home"
          icon={<AntDesign name="profile" size={22} color="#333" />}
          onPress={() => props.navigation.navigate("Messages")}
        />
        <Button
          title="Message"
          icon={<Ionicons name="ios-chatbubbles" size={22} color="#333" />}
          onPress={() => props.navigation.navigate("Messages")}
        />
        <Button
          title="Contacts"
          icon={<Ionicons name="ios-contact" size={22} color="#333" />}
          onPress={() => props.navigation.navigate("Contacts")}
        />
        <Button
          title="Groups"
          icon={<Ionicons name="ios-contacts" size={22} color="#333" />}
          onPress={() => props.navigation.navigate("Groups")}
        />
        <Button
          title="Time Lines"
          icon={<Ionicons name="ios-time" size={22} color="#333" />}
          onPress={() => props.navigation.navigate("Timelines")}
        />
      </View>
      <View style={styles.line} />
      <View
        style={{
          marginTop: 10,
          marginLeft: "-20%",
        }}
      >
        <Button
          title="Settings"
          onPress={() => props.navigation.navigate("More")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#FFF",
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  avatar: { width: 50, height: 50, borderRadius: 999 },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    paddingLeft: 20,
    alignItems: "flex-start",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    width: "100%",
    alignSelf: "flex-start",
  },
});

export default DrawContent;
