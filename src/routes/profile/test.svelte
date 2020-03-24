<script>
 import { goto } from "@sapper/app";
  // import PlaceAutocomplete from "../../../components/PlaceAutocomplete.svelte";
  import MapSearch from "@maps/search.svelte";
  import StyledInput from "@forms/styledInput.svelte";
  import ErrorMessage from "@forms/errorMessage.svelte";
  import { get } from "@connections/rest"

  // import * as api from "../../../components/machich.js";
  // import * as api from `${components}/rest`;

  // FORM VARS
  let first_name = get();
  let last_name = 'k';
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

