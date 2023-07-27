import { View, Image, ScrollView, StyleSheet } from "react-native";
import PageTitle from "../../components/PageTitle";

const legal1 = require("../../assets/legal1.png");
const legal2 = require("../../assets/legal2.png");
const legal3 = require("../../assets/legal3.png");
const legal4 = require("../../assets/legal4.png");
const editIcon = require("../../assets/editIcon.png");
const downloadIcon = require("../../assets/downloadIcon.png");
export function PDFPage() {
  return (
    <ScrollView>
      <View>
        <PageTitle>Business License PDF</PageTitle>
      </View>
      <View style={styles.container}>
        <Image
          source={downloadIcon}
          style={{ width: 30, height: 30, margin: 10 }}
        />
        <Image
          source={editIcon}
          style={{ width: 25, height: 25, margin: 10 }}
        />
      </View>

      <Image source={legal1} style={styles.images} />
      <Image source={legal2} style={styles.images} />
      <Image source={legal3} style={styles.images} />
      <Image source={legal4} style={styles.images} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignSelf: "flex-end" },
  images: {
    marginTop: 10,
    magrin: 5,
    alignSelf: "center",
    width: 400,
    height: 550,
  },
});
