export const formatTimeFunction = (totalSeconds) => {
  const mins = `${Math.floor(totalSeconds / 60)}`.padStart(2, "0"); // in case its 63 that will give 1.333 we want to floor that
  const seconds = `${totalSeconds % 60}`.padStart(2, "0");

  return mins + ":" + seconds; // if the string length of seconds is less than 2 append the 0 in front
};
