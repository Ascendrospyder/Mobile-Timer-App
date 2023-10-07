import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
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

  const formatTimeFunction = (totalSeconds) => {
    const mins = `${Math.floor(totalSeconds / 60)}`.padStart(2, "0"); // in case its 63 that will give 1.333 we want to floor that
    const seconds = `${totalSeconds % 60}`.padStart(2, "0");

    return mins + ":" + seconds; // if the string length of seconds is less than 2 append the 0 in front
  };


  // introducing reusable components
  const RoundedButton = ({
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

const styles = StyleSheet.create({
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
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%", // instead of flex: 1 we use width 100% to take up all space
    justifyContent: "space-around",
  },
});
