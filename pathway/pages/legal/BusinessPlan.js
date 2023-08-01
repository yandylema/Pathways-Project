import { View, ScrollView, Text, StyleSheet } from "react-native";
import PageTitle from "../../components/PageTitle";
import WhiteButton from "../../components/WhiteButton";

export default function BusinessPlan() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Other sections of the business plan */}
      <PageTitle>PhoExpress Plan</PageTitle>
      <View style={styles.section}>
        
        <View style={styles.subSection}>
          <Text style={styles.content}>
            Objective: Serve authentic, quick Vietnamese Pho to Seattle residents and visitors.
          </Text>
        </View>

        <View style={styles.subSection}>
          <Text style={styles.content}>
            Location: Central Seattle (near offices/universities).
          </Text>
        </View>

        <View style={styles.subSection}>
          <Text style={styles.content}>
            Opening: November 1st, 2023.
          </Text>
        </View>

        
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
        
        <Text style={styles.title}>Marketing:</Text>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Launch:</Text>
          <Text style={styles.content}>
            Grand opening promotions.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Partners:</Text>
          <Text style={styles.content}>
            Local business collaboration.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Social:</Text>
          <Text style={styles.content}>Instagram, Facebook, and Twitter.</Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Loyalty:</Text>
          <Text style={styles.content}>Punch card or app rewards.</Text>
        </View>

        
        <Text style={styles.title}>Operations:</Text>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Hours:</Text>
          <Text style={styles.content}>
            11 AM - 10 PM (extended weekends).
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Suppliers:</Text>
          <Text style={styles.content}>
            Local farmers & distributors.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Staff:</Text>
          <Text style={styles.content}>Experienced chefs & trained customer service team.</Text>
        </View>
        
        <Text style={styles.title}>Finances:</Text>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Startup:</Text>
          <Text style={styles.content}>
            Rent, decor, equipment, inventory, licenses, marketing.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Ongoing:</Text>
          <Text style={styles.content}>
            Rent, utilities, salaries, ingredients.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Goal:</Text>
          <Text style={styles.content}>Calculate meals/month for break-even.</Text>
        </View>
        
        <Text style={styles.title}>Challenges & Solutions:</Text>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Saturation:</Text>
          <Text style={styles.content}>
            Update menu based on feedback.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Seasons:</Text>
          <Text style={styles.content}>
            Offer delivery in winter.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Supplies:</Text>
          <Text style={styles.content}>Multiple suppliers for consistency.</Text>
        </View>

        <Text style={styles.title}>Future:</Text>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Year 1:</Text>
          <Text style={styles.content}>
            Brand building & refining ops.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subTitle}>Year 3-5:</Text>
          <Text style={styles.content}>
            Expansion & franchising.
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
    textAlign: "center"
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
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
