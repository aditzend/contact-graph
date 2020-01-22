<script>
  import { onMount } from "svelte";
  import styles from "./styles";

  let place, placeSearch, autocomplete, geolocate;
  let componentForm = {
    street_number: "short_name",
    route: "long_name",
    locality: "long_name",
    administrative_area_level_1: "short_name",
    country: "long_name",
    postal_code: "short_name"
  };

//   function getCountry(results)
//     {
//         for (var i = 0; i < results[0].address_components.length; i++)
//         {
//         var shortname = results[0].address_components[i].short_name;
//         var longname = results[0].address_components[i].long_name;
//         var type = results[0].address_components[i].types;
//         if (type.indexOf("country") != -1)
//         {
//             if (!isNullOrWhitespace(shortname))
//             {
//                 return shortname;
//             }
//             else
//             {
//                 return longname;
//             }
//         }
//     }

//     function isNullOrWhitespace(text) {
//     if (text == null) {
//         return true;
//     }
//     return text.replace(/\s/gi, '').length < 1;
// }

  

//   onMount(() => {
//     const script = document.createElement("script");
//     // script.type = "text/javascript";
//     // const API_KEY = "AIzaSyAkRfXrAl9lwmNenWv8aYVGv4j0COoW_oI";
//     // script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;

//     // script.onload = () => {
//        const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -33.8688, lng: 151.2195 },
//         zoom: 13,
//          styles: styles.dark
//       });

//       const geocoder = new google.maps.Geocoder()



//       const input = document.getElementById("autocomplete");

//       let autocomplete = new google.maps.places.Autocomplete(input);

//       autocomplete.setFields(["address_components"]);

//       let infowindow = new google.maps.InfoWindow();
//       let infowindowContent = document.getElementById("infowindow-content");
//       infowindow.setContent(infowindowContent);
//          let marker = new google.maps.Marker({
//         map: map,
//         anchorPoint: new google.maps.Point(0, -29)
//       });

//     geolocate = function () {
//   if (window.navigator.geolocation) {
//     window.navigator.geolocation.getCurrentPosition(function(position) {
//       let geolocation = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       console.log('your location is : ', geolocation)

//     });
//   }
// }
    // }; // onload

    // document.head.appendChild(script);
  // }); // onMount
</script>

<style>


  #infowindow-content .title {
    font-weight: bold;
  }

  #infowindow-content {
    display: none;
  }
  /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
  #map {
    height: 100%;
  }
  /* Optional: Makes the sample page fill the window. */
  #autocomplete {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 99%;
  }

  #locationField {
    height: 20px;
    margin-bottom: 2px;
  }
</style>

<h1>map search</h1>

<div id="locationField">
  <input
    
    id="autocomplete"
    placeholder="Enter your address"
    type="text" />
</div>

<div id="infowindow-content">
  <img src="" width="16" height="16" id="place-icon" alt='mapa'/>
  <span id="place-name" class="title" />
  <br />
  <span id="place-address" />
</div>

<div id="map" />


<h1>------------------------</h1>
