var express = require('express');
var http = require('http');
let cors = require("cors");

require('dotenv').config()

var app = express();

app.use(cors());

app.use("/businesses", async (req, res) => {
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
    let color = req.query.color; //red
    let theme = req.query.theme; //vintage
    const promptValue = `Generate a logo for a Vietnamese restaurant with ${color} color and a ${theme} theme, without any text`;
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
        data?.data.forEach((imageObject) => {
            ret.push(imageObject.url)
        });
        res.send(ret);
      } catch (error) {
        console.error(error);
      }
})

app.use("/website", async (req, res) => { 
    let name = req.query.name; // business name
    let product = req.query.product;
    let location = req.query.location;
    let details = req.query.details;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY_2}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
              "role": "system",
              "content": "You are a website generator for small businesses. Your job is to generate a one page website, complete with CSS styling. Use bright colors and make it look visually appealing."
            },
            {
              "role": "user",
              "content": `Generate a website for a business called ${name}. This business sells ${product}. It is located in ${location}. Some extra details you should include in the website are that it ${details}. Use the image url https://th.bing.com/th/id/OIP.BwxQLgo0-hVHbzOtFqsxDQHaFj?pid=ImgDet&rs=1 and include this image.`
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
        res.send(data.choices[0].message.content);
      } catch (error) {
        console.error(error);
      }
})


console.log("server starting, port 80")
http.createServer(app).listen(80);