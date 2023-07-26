var express = require('express');
var http = require('http');
require('dotenv').config()

var app = express();



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
console.log("server starting, port 80")
http.createServer(app).listen(80);