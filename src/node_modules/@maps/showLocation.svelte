<script>
  import { onMount } from "svelte";
  import keys from "../../secret/keys"
    import * as api from "googleMapsApi.js";

  let lat, lng

  // async function reverseGeocode(lat, lng) {
  //   let locations = await api.get(`geocode/json?latlng=${lat},${lng}&key=${keys.GOOGLE_MAPS_PLACE_API_KEY}`)
  //   if (locations.result) {
  //     if (locations.result[0]) {
  //       console.log('rg', 'chuchii' )
  //       // return locations.result[0].address_components
  //       return 'chuchii' 
  //     }
  //   } else {
  //     return locations
  //   }
  // }

  // onMount(() => {


  //     if (window.navigator.geolocation) {
  //       window.navigator.geolocation.getCurrentPosition(async function(position) {
  //         const geolocation = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         };
  //         lat = geolocation.lat
  //         lng = geolocation.lng
  //         let rg = await reverseGeocode(lat,lng)
  //         console.log('rg2', rg)
          
  //       });
  //     }
  // });
</script>

<h1>{#if lat} lat : {lat} {/if}</h1>
<h1>{#if lng} lng : {lng} {/if}</h1>


 