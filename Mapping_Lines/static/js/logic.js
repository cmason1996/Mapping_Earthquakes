// Add console.log to check that our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6872, -97.3301], 5);
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Alternatively you could set the map center and zoom level this way
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Get data from the cities.js file
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: (city.population - 20000)/100000,
//         color: 'orange'
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    });

// Coordinated for each point to be used in the polyline below
let line = [
    [37.6214, -122.3790],
    [38.9542, -121.0806],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: "5, 10"
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// var marker = L.marker([51.5, -0.09]).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);