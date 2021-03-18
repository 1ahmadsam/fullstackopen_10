import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorBox: {
    borderWidth: 1,
    borderRadius: 2,
    padding: 4,
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <NativeTextInput
      style={error ? styles.errorBox : textInputStyle}
      {...props}
    />
  );
};

export default TextInput;
