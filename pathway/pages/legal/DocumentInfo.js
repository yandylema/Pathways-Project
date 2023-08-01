import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import PageTitle from "../../components/PageTitle";

export default function DocumentInfo({navigation, route}) {
    const documentName = route.params.documentName;

    const [websiteContent, setWebsiteContent] = useState("");  // Initialize state

    const documentsimplify = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/documentinfo?documentName=${documentName}&product=Pho&businessName=PhoExpress&location=Seattle`);
      const data = await response.text();
      setWebsiteContent(data);
    } catch (error) {
      console.error("Error generating website:", error);
    }
  }

  useEffect(() => {
    documentsimplify();  // call the function when the component is rendered
  }, []);

    return (
        <ScrollView>
            <PageTitle>Document Info</PageTitle>
            <View>
                <Text>{websiteContent}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})
