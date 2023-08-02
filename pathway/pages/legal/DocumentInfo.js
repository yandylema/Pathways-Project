import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import PageTitle from "../../components/PageTitle";
import CONFIG from "../../config/config";

export default function DocumentInfo({ navigation, route }) {
  const documentName = route.params.documentName;
  const [loading, setLoading] = useState(false);

  const [websiteContent, setWebsiteContent] = useState(""); // Initialize state

  const documentsimplify = async () => {
    setLoading(true); // start loading
    try {
      const response = await fetch(
        `${CONFIG.SERVER_URL}/documentinfo?documentName=${documentName}&product=Pho&businessName=PhoExpress&location=Seattle`
      );
      const data = await response.text();
      setWebsiteContent(data);
    } catch (error) {
      console.error("Error generating website:", error);
    }
    setLoading(false); //End of loading
  };

  useEffect(() => {
    documentsimplify(); // call the function when the component is rendered
  }, []);

  return (
    <ScrollView style={styles.container}>
      <PageTitle>Document Info</PageTitle>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="black"></ActivityIndicator>
        ) : websiteContent ? (
          <Text style={styles.text}>{websiteContent}</Text>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    textAlign: "center",
  },
  text: {
    lineHeight: 50,
    fontSize: 20,
    fontFamily: "Jost",
  },
});
