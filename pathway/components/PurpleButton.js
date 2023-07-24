import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#BD00FF",
    color: "white",
    borderRadius: "15px",
    width: "250px",
    height: "45px",
    border: "0",
    margin: "15px",
    boxShadow: "3px 5px 7px #c6c6c6",
  },
});

export function PurpleButton(props) {
  console.log(props);
  return <Button style={styles.button}></Button>;
}
