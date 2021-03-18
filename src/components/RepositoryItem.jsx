import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  container__top: {
    display: "flex",
    flexDirection: "row",
  },
  container__description: {
    paddingLeft: 8,
  },
  container__avatar: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  container__language: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    color: "#fff",
    padding: 4,
    borderRadius: 2,
  },
  container__bottom: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
  },
  container__stat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container__top}>
        <Image
          style={styles.container__avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.container__description}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">Description: {item.description}</Text>
          <Text style={styles.container__language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.container__bottom}>
        <View style={styles.container__stat}>
          <Text fontWeight="bold">{item.stargazersCount}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.container__stat}>
          <Text fontWeight="bold">{item.forksCount}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.container__stat}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.container__stat}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
