let map = L.map('map', {
	zoomControl: false,
	crs: L.CRS.Simple,
	minZoom: -1,
	maxZoom: 0,
	attributionControl: false
}).setView([0, 0], 0);

// Disable double click
map.doubleClickZoom.disable(); 

// image size: 580px * 450px 
var airbnbImgages = ["img/airbnb/1.jpg", "img/airbnb/2.jpg", "img/airbnb/3.jpg", "img/airbnb/4.jpg", "img/airbnb/text.jpg"];
var airbnbCounter = 0;

var brickImgages = ["img/brick/1.jpg", "img/brick/2.jpg", "img/brick/3.jpg", "img/brick/4.jpg", "img/brick/text.jpg"];
var brickCounter = 0;

var cosietImgages = ["img/cosiet/1.jpg", "img/cosiet/2.jpg", "img/cosiet/text.jpg"];
var cosietCounter = 0;

var embossedImgages = ["img/embossed/1.jpg", "img/embossed/2.jpg", "img/embossed/3.jpg", "img/embossed/text.jpg"];
var embossedCounter = 0;

var remakeImgages = ["img/remake/text.jpg"];


// Create overlays
var imageOverlays = L.layerGroup();

// Start
var airbnb = airbnbImgages[0],
imageBounds = [[300, 200], [880, 650]];
let airbnbLayer = L.imageOverlay(airbnb, imageBounds, {interactive: true}).addTo(imageOverlays);

var brick = brickImgages[0],
imageBounds = [[800, -700], [1380, -250]];
let brickLayer = L.imageOverlay(brick, imageBounds, {interactive: true}).addTo(imageOverlays);

var cosiet = cosietImgages[0],
imageBounds = [[-400, -700], [180, -250]];
let cosietLayer = L.imageOverlay(cosiet, imageBounds, {interactive: true}).addTo(imageOverlays);

var embossed = embossedImgages[0],
imageBounds = [[400, -1600], [980, -1150]];
let embossedLayer = L.imageOverlay(embossed, imageBounds, {interactive: true}).addTo(imageOverlays);

// Display
imageOverlays.addTo(map);

// Next image
airbnbLayer.on('click', function(d) {
    airbnbCounter = airbnbCounter + 1;
    if (airbnbCounter < airbnbImgages.length){
        airbnbLayer.setUrl(airbnbImgages[airbnbCounter]);
    } else{
        airbnbCounter = 0;
        airbnbLayer.setUrl(airbnbImgages[airbnbCounter]);
    }
});

brickLayer.on('click', function(d) {
    brickCounter = brickCounter + 1;
    if (brickCounter < brickImgages.length){
        brickLayer.setUrl(brickImgages[brickCounter]);
    } else{
        brickCounter = 0;
        brickLayer.setUrl(brickImgages[brickCounter]);
    }
});

cosietLayer.on('click', function(d) {
    cosietCounter = cosietCounter + 1;
    if (cosietCounter < cosietImgages.length){
        cosietLayer.setUrl(cosietImgages[cosietCounter]);
    } else{
        cosietCounter = 0;
        cosietLayer.setUrl(cosietImgages[cosietCounter]);
    }
});

embossedLayer.on('click', function(d) {
    embossedCounter = embossedCounter + 1;
    if (embossedCounter < embossedImgages.length){
        embossedLayer.setUrl(embossedImgages[embossedCounter]);
    } else{
        embossedCounter = 0;
        embossedLayer.setUrl(embossedImgages[embossedCounter]);
    }
});