import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    color: "black",
    width: "250px",
    height: "45px",
    borderRadius: "15px",
    border: "0",
    margin: "15px",
    boxShadow: "3px 5px 7px #c6c6c6",
  },
});

export function WhiteButton(props) {
  console.log(props);
  return <Button style={styles.button}></Button>;
}
