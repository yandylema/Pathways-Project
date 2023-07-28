import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import PurpleButton from "../../components/PurpleButton";
import WhiteButton from "../../components/WhiteButton";
const facebooklogo = require("../../assets/facebooklogo.png");
const instagramlogo = require("../../assets/instagramlogo.png")
const tiktoklogo = require("../../assets/tiktoklogo.png")
const twitterlogo= require("../../assets/twittersymbol.png")
import GradientCard from "../../components/GradientCard";
import {useEffect, useState} from 'react';

export default function Generate({ navigation }) {
  const [logos, setLogos] = useState([]);
  const [websiteContent, setWebsiteContent] = useState(null);

  const fetchLogos = async () => {
    try {
      const result = await fetch("http://127.0.0.1/logo?color=red&theme=vintage");
      const jsoned = await result.json();
      setLogos(jsoned);
    } catch (error) {
      console.error("Error fetching logos:", error);
    }
  }

  useEffect(() => {
    fetchLogos();
  } , []);

  const generateWebsite = async () => {
    try {
        const response = await fetch("http://127.0.0.1/website?name=PhoExpress&product=Chicken&location=Seattle&details=comfortable");
        const data = await response.text();
        console.log(data)
        // write this to an html file websites folder
        setWebsiteContent(data);
        setShowWebsiteOptions(true);
    } catch (error) {
        console.error("Error generating website:", error);
    }
}
const openGeneratedWebsite = () => {
  const newWindow = window.open("", "_blank");
  newWindow.document.write(websiteContent);
}


  
  const [showWebsiteOptions, setShowWebsiteOptions] = useState(false);
  return (
    <ScrollView>
      <GradientCard text="Social Media">
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}>
          <Image 
            source= {facebooklogo}
            style = {styles.image}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}> 
          <Image 
            source= {instagramlogo}
            style = {styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}> 
          <Image 
            source= {tiktoklogo}
            style = {styles.image}/>
           </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}>  
          <Image 
            source= {twitterlogo}
            style = {styles.image}/>
          </TouchableOpacity>
        </View>
      </GradientCard>

      <GradientCard text="Website">
            <View>
                {showWebsiteOptions ? (
                    <>
                        <WhiteButton text="Visit Website" onPress={openGeneratedWebsite}></WhiteButton>
                        <WhiteButton text="Manage Website" onPress={generateWebsite}></WhiteButton>
                    </>
                ) : (
                    <PurpleButton text="Generate Website" onPress={() => setShowWebsiteOptions(true)}></PurpleButton>
                )}
            </View>     
        </GradientCard>
      

      <GradientCard text="Logo Ideas">
        <View>
          {/* First Row */}
          <View style={styles.row}>
            <Image source = {{uri: logos[0]}} style ={styles.image} ></Image>
            <Image source = {{uri: logos[1]}} style ={styles.image} ></Image>
          </View>
          {/* Second Row */}
          <View style = {styles.row}>
            <Image source = {{uri: logos[2]}} style ={styles.image} ></Image>
            <Image source = {{uri: logos[3]}} style ={styles.image} ></Image>
          </View>
          <PurpleButton text="Regenerate" onPress={fetchLogos}></PurpleButton>
      </View>
      </GradientCard>
    </ScrollView>
    
  );
}

//Logo Sizes
const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    // padding: 20
  },
  logoContainer: {
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center",
  },
});




