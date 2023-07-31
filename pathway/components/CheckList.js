import { StyleSheet, Text, View } from "react-native";

export default function CheckList(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            style={{
              width: 40,
              height: 40,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
          </svg>
        </View>
        <Text onPress={() => console.log("clicked text")} style={styles.text}>
          {props.name}
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
          backgroundColor: "#BC7EE3",
          width: 60,
          height: 60,
          borderRadius: 30,
          marginLeft: "75%",
          position: "absolute",
        }}
      >
        <View
          style={{
            position: "relative",
            top: 22,
            left: 16,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          <Text>{props.percentage}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 100,
    borderRadius: 3,
    backgroundColor: "#FAF7F7",
    display: "flex",
    flexDirection: "row",
    marginBottom: 25,
    borderRadius: 19,
    marginLeft: "2%",
    shadowColor: "#747474",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    padding: 5,
  },
  containerLeft: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    margin: 15,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#BC7EE3",
  },
  text: {
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 15,
  },
  progressCircle: {
    backgroundColor: "black",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: "70%",
    marginTop: "4%",
  },
});
