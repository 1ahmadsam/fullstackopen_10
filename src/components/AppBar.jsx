import React from "react";
import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: "flex",
    flexDirection: "row",

    // ...
  },
  tab: {
    color: "#fff",
    padding: 12,
    fontWeight: "700",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/">
            <Text style={styles.tab}>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/signin">
            <Text style={styles.tab}>Sign in</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
