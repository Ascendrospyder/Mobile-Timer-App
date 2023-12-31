import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { styles } from "./Stopwatch.styles";
import { formatTimeFunction } from "../Utility/formatTime";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  let intervalId = null;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(
        () => setCurrentTime((prevTime) => prevTime + 1),
        1000
      ); // run that for every 1000ms or second
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.elapsedTime}>{formatTimeFunction(currentTime)}</Text>
      <View style={styles.buttonContainer}>
        <RoundedButton
          text={"Reset"}
          textColour={"white"}
          buttonColour={"grey"}
          onPressFunction={() => setCurrentTime(0)}
          disabled={isRunning || currentTime == 0}
        />
        {isRunning ? ( // check if isRunning, then we show the stop, if not show start
          <RoundedButton
            text={"Stop"}
            textColour={"red"}
            buttonColour={"maroon"}
            onPressFunction={() => setIsRunning(false)}
          />
        ) : (
          <RoundedButton
            text={"Start"}
            textColour={"lime"}
            buttonColour={"green"}
            onPressFunction={() => setIsRunning(true)}
          />
        )}
      </View>
    </View>
  );
}
