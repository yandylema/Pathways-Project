import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import PurpleButton from "../../components/PurpleButton";
import WhiteButton from "../../components/WhiteButton";
import GradientCard from "../../components/GradientCard";
import { useEffect, useState } from 'react';

// Image assets for social media logos
const facebooklogo = require("../../assets/facebooklogo.png");
const instagramlogo = require("../../assets/instagramlogo.png");
const tiktoklogo = require("../../assets/tiktoklogo.png");
const twitterlogo = require("../../assets/twittersymbol.png");

export default function Generate({ navigation }) {
  // State for the fetched logos
  const [logos, setLogos] = useState([]);
  
  // State to store the generated website content
  const [websiteContent, setWebsiteContent] = useState(null);
  
  // State to check if the website is currently being generated
  const [isGenerating, setIsGenerating] = useState(false);
  
  // State to check if the website has been successfully generated
  const [websiteGenerated, setWebsiteGenerated] = useState(false);

  // Fetches logo data from the server
  const fetchLogos = async () => {
    try {
      const result = await fetch("http://127.0.0.1/logo?color=red&theme=vintage");
      const jsoned = await result.json();
      setLogos(jsoned);
    } catch (error) {
      console.error("Error fetching logos:", error);
    }
  }

  // UseEffect hook to fetch logos once when the component is mounted
  useEffect(() => {
    fetchLogos();
  }, []);

  // Generates website content from the server
  const generateWebsite = async () => {
    try {
      setIsGenerating(true);
      const response = await fetch("http://127.0.0.1/website?name=PhoExpress&product=Chicken&location=Seattle&details=comfortable");
      const data = await response.text();
      setWebsiteContent(data);
      setIsGenerating(false);
      setWebsiteGenerated(true);
    } catch (error) {
      console.error("Error generating website:", error);
      setIsGenerating(false);
    }
  }

  // Opens a new window/tab with the generated website content
  const openGeneratedWebsite = () => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(websiteContent);
  }

  return (
    <ScrollView>
      {/* Gradient Card for Social Media logos */}
      <GradientCard text="Social Media">
        <View style={styles.logoContainer}>
          {/* Navigating to different screens upon clicking on each logo */}
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}>
            <Image source={facebooklogo} style={{height: 48, width: 48, marginTop: -4}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}> 
            <Image source={instagramlogo} style={{height: 40, width: 40}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}> 
            <Image source={tiktoklogo} style={{height: 40, width: 40}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}>  
            <Image source={twitterlogo} style={{height: 40, width: 40}} />
          </TouchableOpacity>
        </View>
      </GradientCard>

      {/* Gradient Card for Website Generation */}
      <GradientCard text="Website">
        <View>
          {!websiteGenerated ? (
            <>
              {isGenerating ? (
                <PurpleButton text="Loading" disabled={true}></PurpleButton>
              ) : (
                <PurpleButton text="Generate Website" onPress={generateWebsite}></PurpleButton>
              )}
            </>
          ) : (
            <>
              <WhiteButton text="Visit Website" onPress={openGeneratedWebsite}></WhiteButton>
              <WhiteButton text="Manage Website" onPress={openGeneratedWebsite}></WhiteButton>
            </>
          )}
        </View>     
      </GradientCard>

      {/* Gradient Card for displaying Logo Ideas */}
      <GradientCard text="Logo Ideas">
        <View>
          {/* Displaying two rows of logos */}
          <View style={styles.row}>
            <Image source={{uri: logos[0]}} style={styles.image} />
            <Image source={{uri: logos[1]}} style={styles.image} />
          </View>
          <View style={styles.row}>
            <Image source={{uri: logos[2]}} style={styles.image} />
            <Image source={{uri: logos[3]}} style={styles.image} />
          </View>
          {/* Button to re-fetch and regenerate logos */}
          <PurpleButton text="Regenerate" onPress={fetchLogos}></PurpleButton>
        </View>
      </GradientCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,  // Increased size from 40 to 80
    height: 80, // Increased size from 40 to 80
    resizeMode: 'contain',
    marginVertical: 15, // Spaced them out vertically
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-around",  // Used space-around for even spacing
    marginBottom: 20,  // Spaced out each row vertically
  },
});


