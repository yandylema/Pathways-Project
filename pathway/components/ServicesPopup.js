import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from "react-native";
import PageTitle from "./PageTitle";

const YelpIcon = require("../assets/YelpAppIcon.png");
const UberIcon = require("../assets/Uber-Eats-Icon-200x200.png");
const SquareIcon = require("../assets/SquareAppIcon.png");

export function ServicesPopup(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.card}>
        <PageTitle>Expand your business</PageTitle>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "85%",
            borderRadius: 13,
            padding: 20,
            marginLeft: 7,
            justifyContent: "space-between",
            boxShadow: "3px 3px rgba(1, 1, 1, 0.2)",
            alignItems: "center",
          }}
          onPress={() => {Linking.openURL("https://merchants.ubereats.com/us/en/s/signup/?ad_id=&adg_id=1243548296223921&campaign_id=638141497&cre=&dev=c&dev_m=&fi_id=&kw=uber%20eats%20setup&kwid=kwd-77722133023384%3Aloc-190&match=e&msclkid=dfcd7e63d79b1f817cbe1aaed5591f2b&net=o&placement=&tar=&utm_campaign=CM2250889-search-bing-brand_1_-99_US-National_eb_web_acq_cpc_en_T1_Generic_Phrase_uber%20eats%20setup_kwd-77722133023384%3Aloc-190__1243548296223921_e_c&utm_medium=cpc-brand&utm_source=Bing_Brand")}}

        >
          <Image source={UberIcon} style={styles.images} />
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 13 }}>
            Learn More
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "85%",
            borderRadius: 13,
            padding: 20,
            marginLeft: 7,
            justifyContent: "space-between",
            boxShadow: "3px 3px rgba(1, 1, 1, 0.2)",
            alignItems: "center",
          }}
          onPress={() => {Linking.openURL("https://biz.yelp.com/claim?promo=&utm_source=type:claim_ad_bing&utm_medium=search&utm_campaign=ClickLogic-Hyper-Branded_create-yelp-business-account&utm_content=claim-your-free-business-page-1&promo=BAPCHBP300V21&msclkid=b994bbd00708193632cbdf1d043811ba")}}

        >
          <Image source={YelpIcon} style={styles.images} />
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 13 }}>
            Learn More
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "85%",
            borderRadius: 13,
            padding: 20,
            marginLeft: 7,
            justifyContent: "space-between",
            boxShadow: "3px 3px rgba(1, 1, 1, 0.2)",
            alignItems: "center",
          }}
          onPress={() => {Linking.openURL("https://squareup.com/us/en/campaign/cross-product-center?device=c&gclid=471b618b53f015a2d940054650bb6c9b&gclsrc=3p.ds&kw=square+setup&kwid=p63541938887&matchtype=e&msclkid=471b618b53f015a2d940054650bb6c9b&pub=MICROSOFT&utm_campaign=cmtp_performance%2Fsubcmtp_net_new%2Fexp_no%2Fpr_cross_product%2Fd_search_brand%2Ftar_prospect%2Faud_mixed%2Fp_bing%2Fl_us%2Flang_en%2Fdt_alldevice&utm_content=Set-up+-+MKAG&utm_medium=cpc&utm_source=bing&utm_term=square+setup")}}

        >
          <Image source={SquareIcon} style={styles.images} />
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 13 }}>
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    zIndex: 999,
    position: "absolute", 
    alignSelf: "stretch", 
    height: "100%"
  },
  card: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: 20,
    alignItems: "center",
    paddingTop: 20
  },
  images: {
    width: 50,
    height: 50,
    margin: 1,
  },
});
