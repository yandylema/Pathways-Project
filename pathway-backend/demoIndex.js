
	
var express = require('express');
var http = require('http');
let cors = require("cors");
const fetch = require("node-fetch");
require('dotenv').config()

var app = express();

app.use(cors());

app.use("/businesses", async (req, res) => {
    let ret = [
      {
          "name": "Mandarin Buffet & Grill",
          "type": "Restaurant",
          "phone": "(425) 885-3888",
          "website": "http://mandarinbuffetngrill.com/",
          "address": "14850 NE 24th St, Redmond, WA, 98052",
          "lat": 47.63260269,
          "long": -122.14144897,
          "images": [
              "http://4.bp.blogspot.com/-kzufVQ1gFQA/UFKE3ftZ5II/AAAAAAAAS30/TqhloWFYPd0/s1600/mandarinbuffetDSC01459.JPG",
              "https://4.bp.blogspot.com/-VQ0InHL-bDA/UFKFa0Y0LGI/AAAAAAAAS4U/oBZ0M-P5uLM/s1600/mandarinbuffetDSC01463.JPG",
              "http://blog.mpt-reisen.de/wp-content/uploads/2012/09/Mandarin-buffet-2.jpg",
              "https://media.blogto.com/articles/2021716-buffet.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70",
              "https://1.bp.blogspot.com/-X3fIBkCWoD4/UFFfC8NkigI/AAAAAAAAS18/hYablf1MGlg/s1600/mandarinbuffetDSC01472.JPG"
          ]
      },
      {
          "name": "Bai Tong Thai Restaurant - Redmond",
          "type": "Restaurant",
          "phone": "(425) 747-8424",
          "website": "https://www.baitongrestaurant.com/",
          "address": "14804 NE 24th St, Redmond, WA, 98052",
          "lat": 47.63180161,
          "long": -122.14174652,
          "images": [
              "https://d37219swed47g7.cloudfront.net/media/images/reviews/bai-tong-thai-restaurant/banners/1506031868.29.jpg",
              "http://s3-media1.ak.yelpcdn.com/bphoto/mlqeHsFrLVweXbvm3mrq7A/l.jpg",
              "http://s3-media4.ak.yelpcdn.com/bphoto/mlqeHsFrLVweXbvm3mrq7A/ls.jpg",
              "https://media-cdn.tripadvisor.com/media/photo-s/14/87/00/d0/photo1jpg.jpg",
              "https://infatuation.imgix.net/media/images/reviews/bai-tong-thai-restaurant/banners/1506031868.29.jpg?auto=format&h=840&w=1336"
          ]
      },
      {
          "name": "Matador Redmond",
          "type": "Restaurant",
          "phone": "(425) 883-2855",
          "website": "https://matadorrestaurants.com/locations/redmond",
          "address": "7824 Leary Way NE, Redmond, WA, 98052",
          "lat": 47.6733284,
          "long": -122.12315369,
          "images": [
              "https://www.liveatthecarter.com/wp-content/uploads/2016/06/20160625_msp_red_0679_s.jpg",
              "https://www.matadorrestaurants.com/uploads/_1664x884_crop_center-center_75_line/Matador_Redmond.jpg",
              "https://media-cdn.tripadvisor.com/media/photo-s/0c/14/8c/5e/photo2jpg.jpg",
              "https://www.matadorrestaurants.com/uploads/_1200x630_crop_center-center_82_none/matador-social.png?mtime=1653593104",
              "https://i.ytimg.com/vi/GTrYmKp9u_Y/maxresdefault.jpg"
          ]
      },
      {
          "name": "Red Robin Gourmet Burgers and Brews",
          "type": "Restaurant",
          "phone": "(425) 641-3810",
          "website": "https://locations.redrobin.com/wa/redmond/19/",
          "address": "2390 148th Ave NE, Redmond, WA, 98052",
          "lat": 47.63111496,
          "long": -122.14287567,
          "images": [
              "https://floridanationalnews.com/blog/wp-content/uploads/2017/06/RED.jpg",
              "http://restaurantnewsrelease.com/wp-content/uploads/2018/03/Red-Robin-Gourmet-Burgers-and-Brews-Cowboy-Ranch-Tavern-Double.jpg",
              "https://photos.prnewswire.com/prnfull/20160321/346117?max=950",
              "https://www.restaurantmagazine.com/wp-content/uploads/2019/09/Red-Robin-Gourmet-Burgers-and-Brews-Celebrates-National-Cheeseburger-Day-with-a-5-Gourmet-Cheeseburger-and-Bottomless-Steak-Fries-Deal.jpg",
              "https://www.restaurantmagazine.com/wp-content/uploads/2019/10/Red-Robin-Gourmet-Burgers-and-Brews-Unveils-the-French-Onion-Ringer-and-Brings-Back-Fan-Favorite-El-Ranchero-as-its-Latest-Fall-Menu-Items.jpg"
          ]
      },
      {
          "name": "BJ's Restaurant & Brewhouse",
          "type": "Restaurant",
          "phone": "(425) 376-1560",
          "website": "https://www.bjsrestaurants.com/locations/wa/redmond",
          "address": "7211 166th Ave NE, Redmond, WA, 98052",
          "lat": 47.6687851,
          "long": -122.11981201,
          "images": [
              "http://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2015/08/10112333/BJs_restaurant.jpg",
              "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/1000-BJs-Restaurants-Q2-Closing-dining-rooms-again.png?itok=_Yzmrq5m",
              "https://www.gannett-cdn.com/-mm-/c676791cbd3ee0e46bca458d565bc14e9f339c6e/c=0-70-320-251/local/-/media/2016/10/05/TennGroup/Nashville/636112701496563769-BJsanjose.jpg?width=3200&height=1680&fit=crop",
              "https://g.foolcdn.com/editorial/images/532847/bjri-restaurant-storefront-bjs-restaurants.png",
              "https://www.wdpartners.com/wp-content/uploads/2020/03/BJs-Restaurant-AE-3.jpg"
          ]
      },
      {
          "name": "Malay Satay Hut",
          "type": "Restaurant",
          "phone": "(425) 564-0888",
          "website": "https://www.malaysatay.com/",
          "address": "15230 NE 24th St Ste K, Redmond, WA, 98052",
          "lat": 47.63187027,
          "long": -122.13641357,
          "images": [
              "https://media-cdn.tripadvisor.com/media/photo-s/0c/ae/68/d5/malay-satay-hut.jpg",
              "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_800,g_auto/fqv1dn6o6wghwstqbaua",
              "https://media-cdn.tripadvisor.com/media/photo-p/0f/e7/63/5c/good-taste.jpg",
              "https://d1ralsognjng37.cloudfront.net/f8e71500-3485-4f3a-8d24-c7e7ccc5abaf.jpeg",
              "https://s3-media0.fl.yelpcdn.com/bphoto/lWmHZsWG7kd4e28lfIeTvQ/l.jpg"
          ]
      },
      {
          "name": "IHOP",
          "type": "Restaurant",
          "phone": "(425) 747-5975",
          "website": "https://restaurants.ihop.com/en-us/wa/bellevue/breakfast-14747-ne-20th-st-638/takeout",
          "address": "14747 NE 20th St, Bellevue, WA, 98007",
          "lat": 47.62711716,
          "long": -122.14362335,
          "images": [
              "https://www.rd.com/wp-content/uploads/2018/10/IHop.jpg",
              "https://www.rd.com/wp-content/uploads/2018/10/IHop3.jpg",
              "http://static.businessinsider.com/image/556cb5616bb3f78d01cba7b2/image.jpg",
              "https://www.rd.com/wp-content/uploads/2018/10/IHop6.jpg",
              "https://bloximages.chicago2.vip.townnews.com/thesouthern.com/content/tncms/assets/v3/editorial/9/10/91041ae0-ae5a-5b25-aa10-347a3954ed5d/57ed96a606c14.image.jpg?resize=1200%2C798"
          ]
      },
      {
          "name": "Mayuri Indian Cuisine",
          "type": "Restaurant",
          "phone": "(425) 641-4442",
          "website": "https://mayuriseattle.com/cuisine/index.php",
          "address": "2560 152nd Ave NE,Suite A, Redmond, WA, 98052",
          "lat": 47.62931824,
          "long": -122.13557434,
          "images": [
              "https://duyt4h9nfnj50.cloudfront.net/resized/9c435c18c53143f1a40c65f07faa7510-w2880-1c.jpg",
              "https://s3-media2.fl.yelpcdn.com/bphoto/V7GlYbh6UcRKehhMyw0CbA/o.jpg",
              "https://i.ytimg.com/vi/g3LZhCYPwCI/maxresdefault.jpg",
              "https://s3-media1.fl.yelpcdn.com/bphoto/pcElIuYTvGJtJwqi_0yrsw/o.jpg",
              "https://patch.com/img/cdn/users/95968/2012/07/raw/6b58a8da0ea5cc5116bc331211600b2b.jpg"
          ]
      },
      {
          "name": "Pomegranate Bistro",
          "type": "Restaurant",
          "phone": "(425) 556-5972",
          "website": "https://pomegranatebistro.com/",
          "address": "18005 NE 68th St Ste A150, Redmond, WA, 98052",
          "lat": 47.66653824,
          "long": -122.09931946,
          "images": [
              "https://media-cdn.tripadvisor.com/media/photo-s/02/8b/07/3a/interior.jpg",
              "http://3.bp.blogspot.com/-60yOPLDVXOg/TsdApFQjWaI/AAAAAAAADJ4/maf-AjfDQFA/s1600/PomegranateBistro.jpg",
              "https://b.zmtcdn.com/data/pictures/4/16720134/204edd543f8a8aeb264f8f8230b60151.jpg",
              "https://www.pomegranatekingston.com/wp-content/uploads/2018/09/pomegranate_08.jpg",
              "https://www.pomegranatekingston.com/wp-content/uploads/2018/09/pomegranate_01.jpg"
          ]
      },
      {
          "name": "Redmond's Bar & Grill",
          "type": "Restaurant",
          "phone": "(425) 558-9800",
          "website": "https://www.redmondsgrill.com/",
          "address": "7979 Leary Way NE, Redmond, WA, 98052",
          "lat": 47.67451477,
          "long": -122.1228714,
          "images": [
              "https://media-cdn.tripadvisor.com/media/photo-p/08/98/05/c8/redmond-s-bar-and-grill.jpg",
              "https://i.pinimg.com/originals/50/8a/2c/508a2c01acc97124ea72fe1b550e8b16.jpg",
              "http://bunclodybusiness.com/wp-content/uploads/2019/09/Redmond2.jpg",
              "https://images.happycow.net/venues/1024/23/71/hcmp237176_1129604.jpeg",
              "http://1.bp.blogspot.com/-0pyJDnVhRIY/UKHqkUbv3hI/AAAAAAAAG7Q/bCH8tcqJ0vs/s1600/redmonds-20120806p-034.jpg"
          ]
      }
  ]
    res.send(ret);
})


app.use("/logo", async (req, res) => { 
    let color = req.query.color; //red
    let theme = req.query.theme; //vintage
    const promptValue = `Generate a logo for a Vietnamese restaurant with red color and a traditional theme, without any text`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: promptValue,
        n: 4,
        size: "1024x1024",
      }),
    };
    try {
        const response = await fetch(
          "https://api.openai.com/v1/images/generations",
          options
        );
        const data = await response.json();
        let ret = [];
        for (let imageObject of data.data) {
          ret.push(imageObject.url)
        }
        res.send(ret);
      } catch (error) {
        console.error(error);
      }
})

app.use("/website", async (req, res) => { 
   res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhoExpress | Authentic Vietnamese Pho</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f6f6f6;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }
        .phoexpress-header {
            text-align: center;
            margin-bottom: 20px;
        }
        .phoexpress-header h1 {
            font-size: 28px;
            color: #4a4a4a;
            margin-bottom: 10px;
        }
        .phoexpress-content img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .phoexpress-content p {
            color: #666;
            margin-bottom: 20px;
            line-height: 1.5;
        }
        .special-offer {
            background-color: #ffeeee;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            margin-top: 20px;
            color: #e74c3c;
        }
        .tags {
            text-align: center;
            color: #0077b5;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="phoexpress-header">
        <h1>PhoExpress 🚀</h1>
        <p>Your Destination for Authentic Vietnamese Pho!</p>
    </div>
    <div class="phoexpress-content">
        <img src="https://www.measuringcupsoptional.com/wp-content/uploads/2016/12/Beef-Pho.jpg" alt="Delicious Beef Pho">
        <p>If you're on the hunt for a bowl that brims with warmth, comfort, and the rich, intricate flavors of Vietnam, you've come to the right place.</p>
        <p>Introducing our signature bowl - A harmonious blend of slowly simmered broth, delicate rice noodles, and succulent beef. Every spoonful promises an unforgettable flavor sensation!</p>
        <div class="special-offer">
            🌟 WEEKLY SPECIAL 🌟<br>
            Mention "PHO-LOVE" at the counter for a 10% discount!
        </div>
        <p>We believe that enjoying pho is not just about satisfying your hunger. It's an experience that connects you to the rich tapestry of Vietnamese culture and its culinary wonders.</p>
        <p class="tags">#PhoExpress #AuthenticTaste #VietnameseDelight</p>
    </div>
</div>

</body>
</html>`)
})

//Social media generator endpoint
app.use("/social", async (req, res) => { 
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhoExpress Facebook Post</title>
    <style>
        .phoexpress-post {
            font-family: Arial, sans-serif;
            width: 500px;
            border: 1px solid #e1e1e1;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        }
        .phoexpress-post img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 10px;
        }
        .phoexpress-post h1 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #4a4a4a;
        }
        .phoexpress-post p {
            color: #666;
            margin-bottom: 10px;
        }
        .special-offer {
            background-color: #ffeeee;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
            margin-top: 10px;
            color: #e74c3c;
        }
        .tags {
            color: #0077b5;
        }
    </style>
</head>
<body>

<div class="phoexpress-post">
    <h1>🍜 PHO-TASTIC NEWS! 🍜</h1>
    <img src="https://www.measuringcupsoptional.com/wp-content/uploads/2016/12/Beef-Pho.jpg" alt="Beef Pho">
    <p>Ladies and gentlemen, if you're searching for a bowl of warmth, comfort, and the rich flavors of Vietnam, look no further!</p>
    <p>Introducing our signature bowl at <b>PhoExpress</b> 🚀 - A symphony of simmered broth, delicate rice noodles, and tender beef that promises a taste sensation with every bite!</p>
    <div class="special-offer">
        🌟 SPECIAL OFFER 🌟<br>
        Drop by this week and mention "PHO-LOVE" to get a 10% discount on your pho order!
    </div>
    <p>Remember, it's not just a meal, it's an experience! 🌏❤️</p>
    <p>Share the love, tag a friend who NEEDS to taste this today! 👫</p>
    <p class="tags">#PhoExpress #TasteTheTradition #PhoLoversUnite</p>
</div>

</body>
</html>
`)
});

// Document info end point 
app.use("/documentinfo", async (req, res) => { 
  let documentName = req.query.documentName;
  let product = req.query.product;
  let businessName = req.query.businessName;
  let location = req.query.location;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
            "role": "system",
            "content": "You are a business consultant. Your job is to generate a simple one paragraph response to a business question that can be understood by someone with a 9th grade reading level."
          },
          {
            "role": "user",
            "content": `Generate an explanation of what a "${documentName}" is and why it is important that my new business that will be called PhoExpress that will sell Pho in Seattle should have a "${documentName}".`
          }
        ] 
    }),
  };

  try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options
      );
      const data = await response.json();
      console.log(data)
      res.send(data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error generating website content.');
    }
});

app.use("/realestate", async (req, res) => {
  res.send(`[
    {
        "title": "Park 520 6855 176th Ave NE",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/6855-176th-Ave-NE-Redmond-WA/23914545/",
        "phone": "(425) 576-8700",
        "address": "6855 176th Ave NE, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/xMYbIw8j7WXNx-PWLAzZ7PuLjiZm8qkROrUoz6Am-zo/110/6855-176th-Ave-NE-Redmond-WA-Park-520-1-Large.jpg",
            "https://images1.loopnet.com/i2/EviLQMPHkUbG0x0O3LZ7bJAlPR2e4b-GACWcw0lfOlY/110/6855-176th-Ave-NE-Redmond-WA-Photo-2-Large.jpg",
            "https://images1.loopnet.com/i2/M09eZSIR6Gpc-VsbFF-tQ2JsBj3QX6fnlF1hlLAfkv8/110/6855-176th-Ave-NE-Redmond-WA-Plat-Map-3-Large.jpg"
        ],
        "size": "18,110 SF",
        "year": "1987",
        "floorSize": "",
        "lat": 47.666695,
        "long": -122.106524
    },
    {
        "title": "Village Square 16150 NE 85th St",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/16150-NE-85th-St-Redmond-WA/24643052/",
        "phone": "(425) 576-8700",
        "address": "16150 NE 85th St, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/m7abt2x6O0TSCx_zz4JjHRuVXtR_hTCXjymQS1pJ1JA/110/16150-NE-85th-St-Redmond-WA-DSC_3320-4-Large.jpg",
            "https://images1.loopnet.com/i2/WBpJzUUCQuhtr6k7eMT4Sil2Nn0llJMQbf_Yo3f18uM/110/16150-NE-85th-St-Redmond-WA-DSC_3333-5-Large.jpg",
            "https://images1.loopnet.com/i2/39ZRRRUIS3zYvtzDVMFfQ67r7SCrDE_HGjPjY5_5Gh8/110/16150-NE-85th-St-Redmond-WA-DSC_3319-2022-07-21T23_05_50691-6-Large.jpg",
            "https://images1.loopnet.com/i2/E-wf5me9ehqmdMuoOrl7_xQq49WooAaEOtArlFHblHg/110/16150-NE-85th-St-Redmond-WA-DSC_3322-2022-07-21T23_06_05326-7-Large.jpg",
            "https://images1.loopnet.com/i2/C7oCojPmtNvQpFMB60xmgYTIuhwY6FS7WpPMUZ53YrY/110/16150-NE-85th-St-Redmond-WA-DSC_3327-8-Large.jpg",
            "https://images1.loopnet.com/i2/OxuWLciKyvrK6sq6dvIU1ZqVc7E7QWKJeeAY7fPlIzI/110/16150-NE-85th-St-Redmond-WA-DSC_3330-9-Large.jpg",
            "https://images1.loopnet.com/i2/52CkrNl_eCX3R5LqPLiZWPR4akb3aEZmD-I0RjQHevw/110/16150-NE-85th-St-Redmond-WA-Exterior-10-Large.jpg",
            "https://images1.loopnet.com/i2/PCWoKM2i4P0rKb6yFls2qx0BB4dDCsJTkUV2eqcH7cI/110/16150-NE-85th-St-Redmond-WA-Exterior-11-Large.jpg",
            "https://images1.loopnet.com/i2/50iTqndIHPbFIP_3xRnKI8_5MY6NKqvkt47u1MGqIgk/110/16150-NE-85th-St-Redmond-WA-Exterior-12-Large.jpg",
            "https://images1.loopnet.com/i2/hnrbz6Cs015gu5-eEFEQE4BMUT0CaFgRD8xwyj8fWpI/110/16150-NE-85th-St-Redmond-WA-Exterior-13-Large.jpg",
            "https://images1.loopnet.com/i2/j5C7SLPeGg_oE05mf4hXPQLLwcumTWclAIDyoiIfJSc/110/16150-NE-85th-St-Redmond-WA-Building-Photo-14-Large.jpg",
            "https://images1.loopnet.com/i2/NUpKa03smOvUK7wsfsE9bZkSZP4AqlhOvwFbbS8dMTo/110/16150-NE-85th-St-Redmond-WA-Building-Photo-15-Large.jpg",
            "https://images1.loopnet.com/i2/1ym9fIE2Wvi_UMAM5E7FdL0zqASlRNpJWm4nD_yANLc/110/16150-NE-85th-St-Redmond-WA-Building-Photo-1-Large.jpg",
            "https://images1.loopnet.com/i2/xklmv6jwiSu_1ONIwylAcqmxmMFRtxtcNWKiZs5PSIQ/110/16150-NE-85th-St-Redmond-WA-DSC_3340-2-Large.jpg",
            "https://images1.loopnet.com/i2/-e1fY984fBl7vNRZ_HkOXfdPh0i32Leam4M1rppVt38/110/16150-NE-85th-St-Redmond-WA-DJI_0528-3-Large.jpg"
        ],
        "size": "",
        "year": "",
        "floorSize": "",
        "lat": 47.679072,
        "long": -122.124375
    },
    {
        "title": "Amsberry Painting Building 500 E Main St, Monroe, WA 9827",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/500-E-Main-St-Monroe-WA-9827-Redmond-WA/26194816/",
        "phone": "(425) 250-3285",
        "address": "500 E Main St, Monroe, WA 9827, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/xVTSbuWJ_PY_I4s5QIr481kkiCI6NEp13erVN2YNoI0/110/500-E-Main-St-Monroe-WA-9827-Redmond-WA-Screenshot-2022-07-18-105526-1-Large.png",
            "https://images1.loopnet.com/i2/Xju9Ndjz47DJwz7PdO3wKPyPOFWj8PVJ46cmn4RPitI/110/500-E-Main-St-Monroe-WA-9827-Redmond-WA-Building-Photo-2-Large.jpg"
        ],
        "size": "",
        "year": "",
        "floorSize": "",
        "lat": 47.857244,
        "long": -121.965387
    },
    {
        "title": "The Offices at Riverpark 15809 Bear Creek Pky NE",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/15809-Bear-Creek-Pky-NE-Redmond-WA/27779631/",
        "phone": "(425) 455-8500",
        "address": "15809 Bear Creek Pky NE, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/nj88eOijOMYymQNp4-pVx3WyYD3hguu4l-SxcEkpRU4/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-4-Large.jpg",
            "https://images1.loopnet.com/i2/zp6jEwSB5VJO9NfVpGCVGbu1bax1FVTSPHjZU5my6So/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-5-Large.jpg",
            "https://images1.loopnet.com/i2/8oBDFs43ndeJKS-Adhi8fPeMmQOV0fiQqj2z_N1vwAc/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Lobby-6-Large.jpg",
            "https://images1.loopnet.com/i2/EgvwEf9m73FoiWGKFANglpqRPXJdlvNxO07z87hUE6o/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-7-Large.jpg",
            "https://images1.loopnet.com/i2/FM01vFgMcLgLVTbALvWJioJ2bTDDfMeRLsAXZ1mbbN8/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-8-Large.jpg",
            "https://images1.loopnet.com/i2/nHuH4eBRhuNniINnj0b6SMx9finhixRk93_NGVqpGp0/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-9-Large.jpg",
            "https://images1.loopnet.com/i2/hl-0fZ7xgQ1iaSmcn_5rtHcdWHXFy_92NH71bjY5SPY/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Building-Photo-10-Large.jpg",
            "https://images1.loopnet.com/i2/K6gxqFeWNmYtawLM7PAGLvqdv-CAprEEQUnVyo3l1o8/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Building-Photo-11-Large.jpg",
            "https://images1.loopnet.com/i2/qaOPjzmLD3APLYqxUKr7FCeXr0LoR7KE3DTRl1FIrdk/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-12-Large.jpg",
            "https://images1.loopnet.com/i2/CbRDVpTFgU7c1kZKtwesdmv28zZu7Uy0kQy-jWtZdAM/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-13-Large.jpg",
            "https://images1.loopnet.com/i2/i4wvg2pZJ1UF8Ps44iL264fV2vi7weISQIOgKDtTgSI/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-14-Large.jpg",
            "https://images1.loopnet.com/i2/sI7rS0m5dD5YZdu9-Nty8-nlSIz4EWObHx0HUEFMBsk/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-15-Large.jpg",
            "https://images1.loopnet.com/i2/c3ekHUFfUXrfx5sikxr3AuGQbwtdUna4AsWM9Uuzu3A/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-16-Large.jpg",
            "https://images1.loopnet.com/i2/ys6syEKuWQ9eUVnGAWIvGSohQpHJKrf3wlLGoC0ETE8/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-17-Large.jpg",
            "https://images1.loopnet.com/i2/ZjH58nNIpzcf1Ov3dHipo9kmdDubHxQstvsEkhNgRK0/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-18-Large.jpg",
            "https://images1.loopnet.com/i2/PxdjqSMMNBc34RKmVycrtiD4AZVG87REp8KZgaaMJa0/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-19-Large.jpg",
            "https://images1.loopnet.com/i2/U4ycgIjvp9vdEEQka5xg_bS6xHdXdcvVi4aItwZa7jY/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Primary-Photo-1-Large.jpg",
            "https://images1.loopnet.com/i2/EPk3TxE-MqT8gDQiF9655h68wRPSTaKnGJfcOpu4n3A/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Plat-Map-2-Large.jpg",
            "https://images1.loopnet.com/i2/fW1XDXXdjuloe8aEIuPZGl_VkaojHUsW3v08Y6Opdws/110/15809-Bear-Creek-Pky-NE-Redmond-WA-Interior-Photo-3-Large.jpg"
        ],
        "size": "107,029 SF",
        "year": "2008",
        "floorSize": "21,406 SF",
        "lat": 47.673332,
        "long": -122.129264
    },
    {
        "title": "Building G 4102-4120 148th Ave NE",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/4102-4120-148th-Ave-NE-Redmond-WA/26826154/",
        "phone": "(425) 502-2905",
        "address": "4102-4120 148th Ave NE, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/Imkouf1iLdLmfbkFFN_Q-N419T4XUlYF20zcBmbagn4/110/4102-4120-148th-Ave-NE-Redmond-WA-Interior-Photo-4-Large.jpg",
            "https://images1.loopnet.com/i2/_GqJOiHjC9JaNvVxbBOal2Hcs81xFRjQWMxFvWdCuVk/110/4102-4120-148th-Ave-NE-Redmond-WA-Interior-Photo-5-Large.jpg",
            "https://images1.loopnet.com/i2/w1dAenY31J0cS3teQr9KNDr8IoQ5kj5q5rM6t-wxs4s/110/4102-4120-148th-Ave-NE-Redmond-WA-Building-Photo-6-Large.jpg",
            "https://images1.loopnet.com/i2/6P3-_LA2nsNjInzOcdlgYeiQrVE0Bes06l7H4mmnu5M/110/4102-4120-148th-Ave-NE-Redmond-WA-Primary-Photo-1-Large.jpg",
            "https://images1.loopnet.com/i2/1X1RttJhWvXdKIkux9nRac9QXIoWCS5X9jrBjyolMfE/110/4102-4120-148th-Ave-NE-Redmond-WA-Interior-Photo-2-Large.jpg",
            "https://images1.loopnet.com/i2/IMS7oJV_wojPteOAYn3CIEbera-j1M6M8Ob9dz1vazc/110/4102-4120-148th-Ave-NE-Redmond-WA-Interior-Photo-3-Large.jpg"
        ],
        "size": "30,482 SF",
        "year": "1980",
        "floorSize": "15,241 SF",
        "lat": 47.6474872,
        "long": -122.1421605
    },
    {
        "title": "Redmond Heights Tech Center Redmond, WA",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/8561-8575-Willows-Rd-NE-Redmond-WA/27974348/",
        "phone": "(425) 576-8700",
        "address": "Redmond Heights Tech Center",
        "images": [
            "https://images1.loopnet.com/i2/vbIACUnExvM00M3TycEsDmmIWYeRydSn4DPhHBxEfYA/110/8561-8575-Willows-Rd-NE-Redmond-WA-14727-14737-NE-87th-St-Bldg-D-4-Large.jpg",
            "https://images1.loopnet.com/i2/T-7X5OMRoHwBdEcgoriFHMZj88wSY5Q0tAojssPzP9M/110/8561-8575-Willows-Rd-NE-Redmond-WA-14833-NE-87th-St-Bldg-C-5-Large.jpg",
            "https://images1.loopnet.com/i2/qMAYB7bPOHcAiSw4BAbI6LxT43MksrSAW6_NTAGrWQk/110/8561-8575-Willows-Rd-NE-Redmond-WA-14603-14613-NE-87th-St-Bldg-E-6-Large.jpg",
            "https://images1.loopnet.com/i2/Ld5iwTQogfc4UhrU4XxQ65lMXDTewOEYZeLUOLjumMI/110/8561-8575-Willows-Rd-NE-Redmond-WA-Aerial-w-Markup-7-Large.png",
            "https://images1.loopnet.com/i2/gacBYD5d04lUEbYQFnlDM5pYAp2deg00j0kgvdY7dUA/110/8561-8575-Willows-Rd-NE-Redmond-WA-14833-NE-87th-St-1-Large.png",
            "https://images1.loopnet.com/i2/imXrvZLqdGWjWW2qPis-7fYSvRLUSaefwhu0teNqSoQ/110/8561-8575-Willows-Rd-NE-Redmond-WA-8561-8575-Willows-Rd-NE-Bldg-A-2-Large.jpg",
            "https://images1.loopnet.com/i2/hx6TtR9E5GN8d2KIt7w0ogRIqDQceJSGitbqua4ajY4/110/8561-8575-Willows-Rd-NE-Redmond-WA-8601-Willows-Rd-Bldg-B-3-Large.jpg"
        ],
        "size": "24,446 SF24,446 SF",
        "year": "19831983",
        "floorSize": "",
        "lat": 47.6749115,
        "long": -122.12399292
    },
    {
        "title": "RAD Ventures Bldg 15110 NE 95th St",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/15110-NE-95th-St-Redmond-WA/27871047/",
        "phone": "(425) 450-1102",
        "address": "15110 NE 95th St, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/uPG-wkrqhyv0eSduIO4FL-KVz_k1fLY7_htMtmJztI4/110/15110-NE-95th-St-Redmond-WA-Other-4-Large.jpg",
            "https://images1.loopnet.com/i2/_pmk_Jor6EB3VDpB9yRpKaDZ8jq8fgG-vn9nioW_uRo/110/15110-NE-95th-St-Redmond-WA-Other-5-Large.jpg",
            "https://images1.loopnet.com/i2/6sUkUNuKXY_GN6QP_l0SPKblPJwo0GhW3jGfb10ixs8/110/15110-NE-95th-St-Redmond-WA-Other-6-Large.jpg",
            "https://images1.loopnet.com/i2/hJhy6WkF7wqXFxzAFfWceTHiVAWNooePJjPSLbf3j-k/110/15110-NE-95th-St-Redmond-WA-Building-Photo-7-Large.jpg",
            "https://images1.loopnet.com/i2/NDZsDelzzE-3K2mVXLV8DrkvGVuS4Q1FrXSV2IbG2Ts/110/15110-NE-95th-St-Redmond-WA-Other-8-Large.jpg",
            "https://images1.loopnet.com/i2/wLKXir3U0XbdTuVauq0w-kLYRKnIa5WYNgrNNw_tahc/110/15110-NE-95th-St-Redmond-WA-Plat-Map-9-Large.jpg",
            "https://images1.loopnet.com/i2/TlZC6kspaTHNOPWeNNG6jZUlLqrRXYgE3O3c0oTDovg/110/15110-NE-95th-St-Redmond-WA-Building-Photo-10-Large.jpg",
            "https://images1.loopnet.com/i2/duoDGGZvDU315qrb1aYv8mxJq9K2QaHGBc8pwEyKb4I/110/15110-NE-95th-St-Redmond-WA-Building-Photo-11-Large.jpg",
            "https://images1.loopnet.com/i2/zp1NUKuLq4MtuW3Nm9QeP9HPipzMk1xvUycv4MKcFO4/110/15110-NE-95th-St-Redmond-WA-Building-Photo-12-Large.jpg",
            "https://images1.loopnet.com/i2/ftisycG7tZGMjkn3_hSB6H92mjEAhdUb7ZmZ2sFOOGw/110/15110-NE-95th-St-Redmond-WA-Building-Photo-13-Large.jpg",
            "https://images1.loopnet.com/i2/o2QpBR2_S5ocdejZlKpbwnms1zlRBQj_WsXn8ttn2yA/110/15110-NE-95th-St-Redmond-WA-Building-Photo-14-Large.jpg",
            "https://images1.loopnet.com/i2/Br4xjWPBcHTq_2eTPj0LSymOfJL_EEr6mgx4RpXNtRk/110/15110-NE-95th-St-Redmond-WA-Building-Photo-15-Large.jpg",
            "https://images1.loopnet.com/i2/bgn7YqG2ESU9o68YT_baGu--zD4jgpJm76x4Q26cN5I/110/15110-NE-95th-St-Redmond-WA-Primary-Photo-1-Large.jpg",
            "https://images1.loopnet.com/i2/FUqglhD4XSLCsTMcr15WoxZHlnlPkc5EYUJN2M5z2Q8/110/15110-NE-95th-St-Redmond-WA-Plat-Map-2-Large.jpg",
            "https://images1.loopnet.com/i2/k23q-lP5vjzNjj81qEzXa_eO81bm9Bv19KQoIp9CZa0/110/15110-NE-95th-St-Redmond-WA-Other-3-Large.jpg"
        ],
        "size": "51,165 SF",
        "year": "1978",
        "floorSize": "",
        "lat": 47.686397,
        "long": -122.139245
    },
    {
        "title": "Pure Redmond 17634 NE Union Hill Rd",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/17634-NE-Union-Hill-Rd-Redmond-WA/28103583/",
        "phone": "(206) 351-3573",
        "address": "17634 NE Union Hill Rd, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/-DmL0OIepCExMW_0awi1lnvE0esiik6SEcYIdQnuqFc/110/17634-NE-Union-Hill-Rd-Redmond-WA-Interior-Photo-4-Large.jpg"
        ],
        "size": "130,611 SF",
        "year": "",
        "floorSize": "",
        "lat": 47.675369,
        "long": -122.103643
    },
    {
        "title": "MJL Center 16398 NE 85th St",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/16398-NE-85th-St-Redmond-WA/28279991/",
        "phone": "(425) 576-8700",
        "address": "16398 NE 85th St, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/-l8vEpRE0qV-kJuDtGW0sNxKOpjnpeI48LbQjhrFgmY/110/16398-NE-85th-St-Redmond-WA-Building-Photo-4-Large.jpg",
            "https://images1.loopnet.com/i2/hT6LiTlx-3q9l0COFkb9tHf7BiH6b1ZXXYtFSfgYgWQ/110/16398-NE-85th-St-Redmond-WA-Building-View-2-1-Large.jpg",
            "https://images1.loopnet.com/i2/UkvRcDjh-WLGlwZfgCVe7eL3QbApeb1rPdkNY4YcIww/110/16398-NE-85th-St-Redmond-WA-Building-View-1-2-Large.jpg",
            "https://images1.loopnet.com/i2/XH3qcqTqPYOhZgd-ux-LL8Jdljfuhc1jUtQaCFsfhhw/110/16398-NE-85th-St-Redmond-WA-Primary-Photo-3-Large.jpg"
        ],
        "size": "5,475 SF",
        "year": "1986",
        "floorSize": "2,735 SF",
        "lat": 47.678745,
        "long": -122.121804
    },
    {
        "title": "Redmond Centercourt Bldg P 8661 154th Ave NE",
        "type": "property",
        "url": "https://www.loopnet.com/Listing/8661-154th-Ave-NE-Redmond-WA/28710794/",
        "phone": "(425) 502-2905",
        "address": "8661 154th Ave NE, Redmond, WA 98052",
        "images": [
            "https://images1.loopnet.com/i2/GfgDYdEaZFnE3ac2Wtc0_JYJBz9wOgqz2EcWsynrAJI/110/8661-154th-Ave-NE-Redmond-WA-Primary-Photo-1-Large.jpg",
            "https://images1.loopnet.com/i2/VZoor5eM7nfA0S-LttpwG7r_6uJXHA_HMg-NU3yQNtQ/110/8661-154th-Ave-NE-Redmond-WA-Plat-Map-2-Large.jpg",
            "https://images1.loopnet.com/i2/p_LLpi6LebBDdEKoEvMhLpnKUok9AXsWXmb-SI9Z8wo/110/8661-154th-Ave-NE-Redmond-WA-Building-Photo-3-Large.jpg"
        ],
        "size": "38,746 SF",
        "year": "1975",
        "floorSize": "",
        "lat": 47.680202,
        "long": -122.135492
    }
]
  `);
})



app.use("/businessplan", async (req, res) => {
  let businessType = req.query.businessType; //47.602038,-122.333964
  let businessName = req.query.businessName; //47.602038,-122.333964
  let businessLocation = req.query.businessLocation; //47.602038,-122.333964
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
            "role": "system",
            "content": `You are a business consultant for a restaurant business called PhoExpress based in Seattle. Your client will give you a text input with headers: your job is to replace the question marks with simple paragraphs.`
          },
          {
            "role": "user",
            "content": `1 Business description
            ?
            2 Target market
            ?
            3 Location
            ?
            4 Competitive advantage
            ?
            5 Financial projections
            ?
            6 Profitability
            ?`
          }
        ] 
    }),
  };

  try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options
      );
      const data = await response.json();
      console.log(data)
      let ret = formatBP(data.choices[0].message.content);
      res.send(ret);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error generating business plan content.');
    }
});

function formatBP(bp) {
  // let splitted = bp.split("\n");
  // let obj = {}
  // for (let i = 0; i < splitted.length; i += 2){
  //     obj[splitted[i]] = splitted[i+1];
  // }
  return bp;
}

console.log("server starting, port 8080")
http.createServer(app).listen(8080);