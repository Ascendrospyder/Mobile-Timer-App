import { StyleSheet, Text, View, Pressable } from "react-native";
import { styles } from "./RoundedButton.styles"

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


