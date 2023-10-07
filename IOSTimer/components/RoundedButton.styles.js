import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerButton: {
    display: "flex",
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
  },
  innerButton: {
    display: "flex",
    height: 72,
    width: 72,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  }
});