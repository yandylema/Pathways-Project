import { View, ScrollView, Text, StyleSheet } from "react-native";
import PageTitle from "../../components/PageTitle";
import WhiteButton from "../../components/WhiteButton";

export default function BusinessPlan() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Other sections of the business plan */}
      <PageTitle>PhoExpress Plan</PageTitle>
      <View style={styles.section}>
        <Text style={styles.title}>Products:</Text>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Main:</Text>
          <Text style={styles.content}>
            Diverse Pho options (beef, chicken, vegetarian).
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Extras:</Text>
          <Text style={styles.content}>
            Spring rolls, bánh mì, Vietnamese coffee, iced teas.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Specials:</Text>
          <Text style={styles.content}>Seasonal pho & promotions.</Text>
        </View>
        <Text style={styles.title}>Market:</Text>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Target:</Text>
          <Text style={styles.content}>
            Urban professionals, students, tourists.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Demand:</Text>
          <Text style={styles.content}>
            Rising interest in Vietnamese cuisine in Seattle.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Edge:</Text>
          <Text style={styles.content}>
            Quick service + consistent quality.
          </Text>
        </View>
      </View>
      {/* Continue with other sections of the business plan */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subSection: {
    marginLeft: 15,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
