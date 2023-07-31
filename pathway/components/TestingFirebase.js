import { getDatabase, ref, get } from "firebase/database";
const database = getDatabase();
const businessesRef = ref(database, "businesses");
get(businessesRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      // snapshot.val() gives you the entire data under 'businesses' node
      const businessesData = snapshot.val();
      console.log(businessesData);
    } else {
      console.log("No businesses data found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
export default function TestingFirebase() {}
