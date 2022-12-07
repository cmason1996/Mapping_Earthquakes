// Add console.log to check that our code is working
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Alternatively you could set the map center and zoom level this way
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Add a marker or a circle to the map for Los Angeles, CA
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
L.circle([34.0522, -118.2437], {
                radius:300,
                color: 'black',
                fillColor: 'yellow',
            }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// var marker = L.marker([51.5, -0.09]).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);