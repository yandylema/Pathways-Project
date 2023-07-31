import { getDatabase, ref, get } from "firebase/database";

//THIS FILE IS FOR READING AND RETRIEVING THE DATABASE FROM FIREBASE DATA STORAGE
const database = getDatabase();
const businessesRef = ref(database, "businesses");
const documentsRef = ref(database, "documents");
get(businessesRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      // snapshot.val() gives you the entire data under 'businesses' node
      const businessesData = snapshot.val();
      console.log("hazel business data la la la it is working", businessesData);
    } else {
      console.log("No businesses data found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

get(documentsRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      // snapshot.val() gives you the entire data under 'businesses' node
      const documentsData = snapshot.val();
      console.log("hazel document data la la la it is working", documentsData);
    } else {
      console.log("No documents data found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
export default function TestingFirebase() {}
