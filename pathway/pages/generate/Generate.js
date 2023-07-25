import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ButtonWithI from "../../components/ButtonWithI";
const facebooklogo = require("../../assets/facebooklogo.png");
const instagramlogo = require("../../assets/instagramlogo.png")
const tiktoklogo = require("../../assets/tiktoklogo.png")
const twitterlogo= require("../../assets/twittersymbol.png")


export default function Generate({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}> Social Media </Text>
      </View>
      <View>
        <View style={style1.logoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}>
          <Image 
            source= {facebooklogo}
            style = {{height:55, width:65, marginBottom: 60}}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}> 
          <Image 
            source= {instagramlogo}
            style = {style1.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}> 
          <Image 
            source= {tiktoklogo}
            style = {style1.image}/>
           </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}>  
          <Image 
            source= {twitterlogo}
            style = {{height: 60, width:60}}/>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.containerTitle}>
        <Text style={styles.title}> Website </Text>
      </View>
      <View>
        <View style={styles.containerInside}>
          <Text style={styles.containerInsideText}>
          <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Website Generation "
        />
        <ButtonWithI
          onPress={() => {
            // navi
          }}
          text="Manage Website "
        />
        
          </Text>
        </View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}> Logo Ideas </Text>
      </View>
      <View>
        <View style={styles.containerInside}>
          <Text style={styles.containerInsideText}>
            Dall-E Images go here
          </Text>
        </View>
      </View>
    </View>
    
  );
}
//Logo Sizes
const style1 = StyleSheet.create({
  image: {
    width: 60,
    height: 55,
    resizeMode: 'contain'
  },
  logoContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 60,
    textAlign: "center",
    marginBottom: 30,
    backgroundImage:
      "linear-gradient(rgba(207,167,231,0.4),rgba(183,117,223,0.152))",
    border: "1px solid rgba(183,117,223,0.152)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  }
});


//Gradient Box 
const styles = StyleSheet.create({
  container: {
    width: "87%",
    height: 380,
    alignSelf:"center"
  },
  containerTitle: {
    width: "100%",
    textTransform: "uppercase",
    backgroundImage: "linear-gradient(to left, #AF02CB, #AD00FF)",
    textAlign: "left",
    paddingLeft: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "30",
    color: "white",
    paddingTop: 7,
    paddingBottom: 7,
  },
  containerInside: {
    width: "100%",
    height: 200,
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(207,167,231,0.4),rgba(183,117,223,0.152))",
    border: "1px solid rgba(183,117,223,0.152)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});


    // <View>
    //   <Text>generate page</Text>
    //   <Button
    //     title="Generate Social Media"
    //     onPress={() => navigation.navigate("SocialMedia")}
    //   />
    //   <Button
    //     title="Generate Logo"
    //     onPress={() => navigation.navigate("Logo")}
    //   />
    // </View>
