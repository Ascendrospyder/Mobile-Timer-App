import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  elapsedTime: {
    color: "white",
    fontSize: 80,
    fontWeight: "200",
    paddingBottom: 30,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%", // instead of flex: 1 we use width 100% to take up all space
    justifyContent: "space-around",
  },
});
