import { StyleSheet, Text, View, Pressable } from "react-native";

export const RoundedButton = ({
  text,
  textColour,
  buttonColour,
  onPressFunction,
  disabled,
}) => {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => ({
        ...styles.outerButton,
        opacity: pressed || disabled ? 0.5 : undefined,
        borderColor: buttonColour,
      })}
      disabled={disabled}
    >
      <View style={[styles.innerButton, { backgroundColor: buttonColour }]}>
        <Text style={[styles.buttonText, { color: textColour }]}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

