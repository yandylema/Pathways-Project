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
            style = {{height:55, width:65, marginBottom: 60, padding: 20}}/>
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
      </View>


      <View style={styles.containerTitle}>
        <Text style={styles.title}> Website </Text>
      </View>
      <View>
        <View style={styles.containerInside}>
          <TouchableOpacity onPress = {() => {
            // navi
          }}>
            <View style = {[style4.button, style4.shadowProp]}>
              <Text style={style4.text}>Visit Website</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {
            // navi
          }}>
            <View style = {[style4.button, style4.shadowProp]}>
              <Text style={style4.text}>Manage website</Text>
            </View>
          </TouchableOpacity>
          </View>     
       </View>
      
  

   


      <View style={style3.containerTitle}>
        <Text style={style3.title}> Logo Ideas </Text>
      </View>
      <View style = {{flex:5}}>
        <View style={style3.containerInside}>
          <View style = {style2.row}>
        <Image source= {dalle1} style = {style2.image}/>
        <Image source= {dalle2} style = {style2.image}/>
          </View>
          <View style = {style2.row}>
        <Image source= {dalle3} style = {style2.image}/>
        <Image source= {dalle4} style = {style2.image}/>
          </View>
        

          <TouchableOpacity onPress = {() => {
            // navi
          }}>
            <View style = {[style5.button, style5.shadowProp]}>
              <Text style={style5.text}>Regenerate</Text>
            </View>
          </TouchableOpacity>

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
    resizeMode: 'contain',
    padding: 20
  },
  logoContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 60,
    textAlign: "center",
    marginBottom: 7,
    backgroundImage:
      "linear-gradient(rgba(207,167,231,0.4),rgba(183,117,223,0.152))",
    border: "1px solid rgba(183,117,223,0.152)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  }
});



//Dall-e Image Placeholder container
const style2 = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 12,
    resizeMode: 'contain'
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop:-35,
    marginBottom: -40, // Add some margin if needed between the rows
  },
  containerInside: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
    backgroundImage: "linear-gradient(rgba(207,167,231,0.4),rgba(183,117,223,0.152))",
    border: "1px solid rgba(183,117,223,0.152)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  }
});




//Gradient Box for website generator
const styles = StyleSheet.create({
  container: {
    width: "87%",
    height: 370,
    alignSelf:"center",
    marginBottom: 10
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
    height: 150,
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(207,167,231,0.4),rgba(183,117,223,0.152))",
    border: "1px solid rgba(183,117,223,0.152)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
    height: 435,
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(207,167,231,0.4),rgba(183,117,223,0.152))",
    border: "1px solid rgba(183,117,223,0.152)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
  },
});


//Purple Button 
const style5 = StyleSheet.create({
  button: {
    backgroundImage: "linear-gradient(to right, #BD00FF, #AF02CB)",
    width: 342,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    marginTop: 150
    
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
