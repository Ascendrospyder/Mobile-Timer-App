import { View, Text } from "react-native";
import { styles } from "./Timer.styles";
import { useEffect, useState } from "react";
import { formatTimeFunction } from "../Utility/formatTime";
import { RoundedButton } from "../components/RoundedButton";
import { Picker } from "@react-native-picker/picker";

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(10);

  let intervalId = null;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        if (remainingSeconds > 0) {
          setRemainingSeconds((prevTime) => prevTime - 1);
        } else {
          setIsRunning(false);
          alert("The timer has finished");
        }
      }, 1000); // run that for every 1000ms or second
    }

    return () => clearInterval(intervalId);
  }, [isRunning, remainingSeconds]);

  return (
    <View style={styles.container}>
      {isRunning ? (
        <Text style={styles.elapsedTime}>
          {formatTimeFunction(remainingSeconds)}
        </Text>
      ) : (
        <View>
          <Picker
            style={{ width: 100 }}
            itemStyle={{ color: "white" }}
            selectedValue={"js"}
            // onValueChange={(itemValue, itemIndex) =>
            //   setSelectedLanguage(itemValue)
            // }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <RoundedButton
          text={"Cancel"}
          textColour={"white"}
          buttonColour={"grey"}
          onPressFunction={() => {
            setIsRunning(false);
            setRemainingSeconds(0);
          }}
          disabled={isRunning || remainingSeconds === 0}
        />
        {isRunning ? (
          <RoundedButton
            text={"Pause"}
            textColour={"white"}
            buttonColour={"darkorange"}
            onPressFunction={() => {
              setIsRunning(false);
            }}
          />
        ) : (
          <RoundedButton
            text={"Start"}
            textColour={"lime"}
            buttonColour={"green"}
            onPressFunction={() => {
              setIsRunning(true);
            }}
          />
        )}
      </View>
    </View>
  );
}
