<script>
 import { goto } from "@sapper/app";
  // import PlaceAutocomplete from "../../../components/PlaceAutocomplete.svelte";
  import MapSearch from "../../../components/map/search.svelte";
  import StyledInput from "../../../components/form/styledInput.svelte";
  import ErrorMessage from "../../../components/form/errorMessage.svelte";
  import * as F from "../../../components/th"
  import * as R from "../../../components/restHelpers"
  // import * as api from "../../../components/machich.js";
  // import * as api from `${components}/rest`;

  // FORM VARS
  let first_name = F.foo();
  let last_name = R.send();
  let personal_email = "";
  let personal_phone = "";

  let error_message = "";


  // async function submit(event) {
  //   const person = { first_name, last_name, personal_email, personal_phone };
  //   let insertion = await api.post(`api/v1/persons`, person);
  //   console.log(insertion);
  //   insertion
  //     ? goto("/public/profile")
  //     : (error_message =
  //         "There has been a connection error, please try again later.");
  // }


  </script>

  <svelte:head>
  <title>New FASC Profile</title>
</svelte:head>


<h1>test {first_name} { last_name}</h1>

