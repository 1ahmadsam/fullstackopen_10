//import { StatusBar } from "expo-status-bar";
import React from "react";
//import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import Constants from "expo-constants";

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.manifest);
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;

//TODO 10.3
