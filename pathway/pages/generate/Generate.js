import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import PurpleButton from "../../components/PurpleButton";
import WhiteButton from "../../components/WhiteButton";
const facebooklogo = require("../../assets/facebooklogo.png");
const instagramlogo = require("../../assets/instagramlogo.png")
const tiktoklogo = require("../../assets/tiktoklogo.png")
const twitterlogo= require("../../assets/twittersymbol.png")
//dalle images placeholder
const dalle1= require("../../assets/dalle1.png")
const dalle2= require("../../assets/dalle2.png")
const dalle3= require("../../assets/dalle3.png")
const dalle4= require("../../assets/dalle4.png")
import GradientCard from "../../components/GradientCard";

export default function Generate({ navigation }) {
  return (
    <View style={styles.container}>
      <GradientCard text="Social Media">
      <View style={style1.logoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SocialMedia")}>
          <Image 
            source= {facebooklogo}
            style = {{height:55, width:65}}/>
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
            style = {{height: 60, width:60, padding: 20}}/>
          </TouchableOpacity>
        </View>
      </GradientCard>

      <GradientCard text="Website">
      <View>
          <WhiteButton text="Visit Website"></WhiteButton>
          <WhiteButton text="Manage Website"></WhiteButton>
          </View>     
       </GradientCard>
      

      <GradientCard text="Logo Ideas">
      <View style = {{flex:5}}>
          <View style = {style2.row}>
        <Image source= {dalle1} style = {style2.image}/>
        <Image source= {dalle2} style = {style2.image}/>
          </View>
          <View style = {style2.row}>
        <Image source= {dalle3} style = {style2.image}/>
        <Image source= {dalle4} style = {style2.image}/>
          </View>
        
          <PurpleButton text="Regenerate"></PurpleButton>
      </View>
      </GradientCard>
    </View>
    
  );
}

//Logo Sizes
const style1 = StyleSheet.create({
  image: {
    width: 60,
    height: 55,
    resizeMode: 'contain',
    // padding: 20
  },
  logoContainer: {
    flexDirection:'row',
    justifyContent: 'space-around',
  }
});



//Dall-e Image Placeholder container
const style2 = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
    margin: 3,
    resizeMode: 'contain'
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center",
  },
});




//Gradient Box for website generator
const styles = StyleSheet.create({
  container: {
    width: "87%",
    height: 370,
    alignSelf:"center",
    marginBottom: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    paddingTop: 7,
    paddingBottom: 7,
  },
});

//Gradient box for logo generator
const style3 = StyleSheet.create({
  container: {
    width: "87%",
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-between',
    height: 380,
    alignSelf:"center"
  },
  containerTitle: {
    width: "100%",
    textTransform: "uppercase",
    textAlign: "left",
    paddingLeft: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    paddingTop: 7,
    paddingBottom: 7,
  },
});


//White button css
const style4 = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 342,
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
   
  },
  text: {
    color: "black",
    fontSize: 15,
    fontFamily: "Jost",
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#747474",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5
  },
});


//Purple Button 
const style5 = StyleSheet.create({
  button: {
    width: 342,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    
  },
  text: {
    color: "white",
    fontSize: 15,
    fontFamily: "Jost",
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#747474",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
