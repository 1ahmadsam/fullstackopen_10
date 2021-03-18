import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik, useField } from "formik";
import Text from "./Text";
import theme from "../theme";
import * as yup from "yup";
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  signIn__input: {
    borderColor: "#c2c0c0",
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 4,
    padding: 4,
  },
  signIn__button: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,

    padding: 12,
    borderRadius: 2,
  },
  signIn__text: {
    alignSelf: "center",
    color: "#fff",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.signIn__input}
        name="username"
        placeholder="Username"
      />

      <FormikTextInput
        style={styles.signIn__input}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit} style={styles.signIn__button}>
        <Text fontWeight="bold" style={styles.signIn__text}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
