import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { fakeUsers } from "../actions/Fake";
import { connect } from "react-redux";
import MessageItem from "../components/MessageItem";

const Messages = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const _renderItem = ({ item }) => {
    return <MessageItem {...item} navigation={props.navigation} />;
  };

  if (!users) {
    return <View style={styles.container}>Loading</View>;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {users && (
          <FlatList
            data={users}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </ScrollView>
    </View>
  );
};

// const mapStateToProps = (state) => {
//   return { ...state.fake };
// };
// const mapDispatchToProps = (dispatch) => ({
//   getUsers: () => dispatch(fakeUsers),
// });

//export default connect(mapStateToProps, mapDispatchToProps)(Messages);
export default Messages;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
