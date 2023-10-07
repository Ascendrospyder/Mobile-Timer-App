import { View, Text } from "react-native";
import { styles } from "./Timer.styles";
import { useState } from "react";

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false)
  const [remainingSeconds, setRemainingSeconds] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.elapsedTime}>{remainingSeconds}</Text>
    </View>
  );
}
