import { Text, Button, View, Image, ScrollView } from "react-native";
import PageTitle from "../../components/PageTitle";
import PurpleButton from "../../components/PurpleButton";
import WhiteButton from "../../components/WhiteButton";
import { useState, useContext } from "react";
import CONFIG from "../../config/config";
import { getDatabase, ref, get } from "firebase/database";
import AppContext from "../../utils/AppContext";

// Image asset
// const upload = require("../../assets/pho1.jpg");

export default function SocialMedia({ navigation }) {
  
  // State to store the generated social media post content
  const [generatedPost, setGeneratedPost] = useState(null);
  
  // State to determine if the post has been generated successfully
  const [postGenerated, setPostGenerated] = useState(false);
  
  // State to check if the post is currently being generated
  const [loading, setLoading] = useState(false);
  const myContext = useContext(AppContext);

  // Function to fetch a generated social media post based on certain parameters
  const fetchSocialMediaPost = async () => {
    setLoading(true); // Indicate the start of the loading process
    const database = getDatabase();
    const businessesRef = ref(database, "businesses/" + myContext.id);
    get(businessesRef).then(async (snapshot) => {
    if (snapshot.exists()) {
      const businessData = snapshot.val();
      console.log(businessData);
      try { 
        const response = await fetch(`${CONFIG.SERVER_URL}/social?businessName=${businessData.businessName}&product=${businessData.businessProduct}`);
        const data = await response.text();
        setGeneratedPost(data);   // Save the generated post content
        setPostGenerated(true);   // Mark the post as generated
      } catch (error) {
        console.error("Error fetching social media post: ", error);
      }
    }})
    setLoading(false); // Indicate the end of the loading process
  }

  // Function to view the generated post in a new window/tab
  const viewGeneratedPost = () => {
    navigation.navigate('GeneratedSoc', { generatedPostContent: generatedPost });
  }

  return (
    <ScrollView style={{flex: 1}}> 
      <View>
        {/* Displaying the title for the page */}
        <PageTitle>Social Media Marketing</PageTitle>

        {/* Label for the Image insertion */}
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Jost",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Insert Image
        </Text>

        {/* Displaying the uploaded image */}
        {/* <Image
          source={upload}
          style={{ width: 400, height: 400, alignSelf: "center", borderRadius:15 }}
        /> */}

        {/* Conditionally rendering buttons based on the generation state */}
        {!postGenerated ? (
          loading ? 
            // Display a loading button while generating the post
            <PurpleButton text="Generating your post! Please wait..." disabled={true}></PurpleButton> :
            // Display the button to initiate the generation process
            <PurpleButton text="Generate" onPress={fetchSocialMediaPost}></PurpleButton>
        ) : 
          // Display the button to view the generated post once it's ready
          <PurpleButton text="Click to see your post" onPress={viewGeneratedPost}></PurpleButton>
        }

        {/* Button to navigate back to the "Generate" page */}
        <WhiteButton text="Cancel" onPress={() => navigation.navigate("Generate")}></WhiteButton>
      </View>
    </ScrollView>
  );
}
