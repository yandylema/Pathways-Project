var express = require('express');
var http = require('http');
let cors = require("cors");
const fetch = require("node-fetch");
require('dotenv').config()
var fs = require('fs');

var app = express();

app.use(cors());

app.use("/businesses", async (req, res) => {
  fs.writeFile('myjsonfile.json', json, 'utf8', callback);

    let businessType = req.query.type; //coffee
    let location = req.query.location; //47.602038,-122.333964
    let key = process.env.BING_MAPS_KEY;
    let url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=" + businessType + "&userLocation="+location+ "&key=" + key;
    const response = await fetch(url)
    const result = await response.json()
    let ret = [];
    
    // need start rating, reviews, how many ratings, images
    for(let business of result.resourceSets[0].resources) {
        await ret.push({
            name: business.name, //Storyville
            type: business.entityType, //Restaurant
            phone: business.PhoneNumber,
            website: business.Website,
            address: business.Address.formattedAddress,
            lat: business.geocodePoints[0].coordinates[0],
            long: business.geocodePoints[0].coordinates[1],
            images: await getImages(business.name)
        })
    }
    res.send(ret);
})

async function getImages(businessName) {
    const response = await fetch("https://api.bing.microsoft.com/v7.0/images/search?count=5&q=" + businessName, {
        headers: {
            "Ocp-Apim-Subscription-Key": process.env.BING_SEARCH_KEY
        }
    })
    const result = await response.json();
    
    console.log(result);
    const ret = []
    if (result.value) {
    
    for (let image of result.value){
        ret.push(image.contentUrl);
    }
    }
    return ret
}

app.use("/logo", async (req, res) => { 
    // let color = req.query.color; //red
    // let theme = req.query.theme; //vintage
    let businessType = req.query.businessType;
    let businessProduct = req.query.businessProduct;
    const promptValue = `Generate a simple logo for a business of type ${businessType} which sells ${businessProduct}`;
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
    let name = req.query.name; // business name
    let product = req.query.product;
    let location = req.query.location;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "gpt-4",
        "messages": [
            {
              "role": "system",
              "content": "You are a website generator for small businesses. Your job is to generate a one page website, complete with CSS styling. Use bright colors and make it look visually appealing."
            },
            {
              "role": "user",
              "content": `Generate a website for a business called ${name}. This business sells ${product}. It is located in ${location}.`
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
      }
})

//Social media generator endpoint
app.use("/social", async (req, res) => { 
  let businessName = req.query.businessName; // business name
  let product = req.query.product;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "model": "gpt-4",
      "messages": [
          {
            "role": "system",
            "content": "You are a website generator that mimics the design of a Facebook post. Your job is to generate a simple one-page website post based on the business and product details provided."
          },
          {
            "role": "user",
            "content": `Generate a Facebook-like post for a business named "${businessName}" that promotes the product "${product}".`
          } // use this image URL: https://www.measuringcupsoptional.com/wp-content/uploads/2016/12/Beef-Pho.jpg and include this image
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
      "model": "gpt-4",
      "messages": [
          {
            "role": "system",
            "content": "You are a business consultant. Your job is to generate a simple one paragraph response to a business question that can be understood by someone with a 9th grade reading level."
          },
          {
            "role": "user",
            "content": `Generate an explanation of what a "${documentName}" is and why it is important that my new business that will be called "${businessName}" that will sell "${product}" in "${location}" should have a "${documentName}".`
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
  let location = req.query.location; //47.602038,-122.333964
  let address = await getAddressFromCoordinates(location) //redmond-wa-98052
  // let key = process.env.BING_MAPS_KEY;
  let url = "https://api.apify.com/v2/acts/epctex~loopnet-scraper/run-sync-get-dataset-items?token=apify_api_w6xpWsyeODI2z6LNaBInYCHO87SWCq1qKutg"
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "startUrls": [`https://www.loopnet.com/search/commercial-real-estate/${address}/for-lease/`],
      "maxItems": 3
    },
    body: JSON.stringify({
      "startUrls": [`https://www.loopnet.com/search/commercial-real-estate/${address}/for-lease/`],
      "maxItems": 3
    }),
  };

  const response = await fetch(url, options)
  const result = await response.json()
  console.log(result)

  let ret = [];
  
  for(let property of result) {
      let coords = await getCoordinatesFromAddress(property.address);
      console.log(coords)
      ret.push({
          title: property.title, 
          type: property.type,
          url: property.url,
          phone: property.contactPhone,
          address: property.address,
          images: property.images,
          size: property.buildingSize,
          year: property.yearBuiltRenovated,
          floorSize: property.typicalFloorSize,
          lat: coords[0],
          long: coords[1]
      })
  }
  res.send(ret);
})

async function getCoordinatesFromAddress(address) {
  let response = await fetch(`http://dev.virtualearth.net/REST/v1/Locations?q=${address}&key=${process.env.BING_MAPS_KEY}`);
  let responseJson = await response.json();
  return responseJson.resourceSets[0].resources[0].point.coordinates;
}

async function getAddressFromCoordinates(location) {
  console.log(location)
  let response = await fetch(`http://dev.virtualearth.net/REST/v1/Locations/${location}?includeEntityTypes=Address&key=${process.env.BING_MAPS_KEY}`);
  let responseJson = await response.json();
  let address = responseJson.resourceSets[0].resources[0].address;
  console.log(address)
  return `${address.locality.toLowerCase()}-${address.adminDistrict.toLowerCase()}-${address.postalCode}`;
}


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
            "content": `You are a business consultant for a ${businessType} business called ${businessName} based in ${businessLocation}. Your client will give you a text input with headers: your job is to replace the question marks with simple paragraphs.`
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
  let splitted = bp.split("\n");
  let obj = {}
  for (let i = 0; i < splitted.length; i += 2){
      obj[splitted[i]] = splitted[i+1];
  }
  return obj;
}


console.log("server starting, port 8080")
http.createServer(app).listen(8080);