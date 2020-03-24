<script>
  import { goto } from "@sapper/app";
  // import PlaceAutocomplete from "../../../components/PlaceAutocomplete.svelte";
  // import MapSearch from "../../../components/map/search.svelte";
  import StyledInput from "@forms/styledInput.svelte";
  import TemplateBox from "@components/TemplateBox.svelte";
  import ErrorMessage from "@forms/errorMessage.svelte";
  import * as api from "@connections/fetch";

  let person_key;

  export async function preload(page, session) {
    person_key = session.person._key;
  }

  // FORM VARS
  let full_address,
    location_company_name,
    location_contact_name,
    location_contact_title,
    commercial_name,
    lada,
    location_phone,
    location_contact_mobile_phone,
    location_email,
    location_tax_id_type,
    location_tax_id_number,
    location_sells_supplies_to_public,
    location_has_dedicated_packaging_counter,
    location_is_franchise,
    location_fb_page_url,
    location_ig_account,
    bot_response;

    $: res = bot_response? bot_response + " 34": ""

  // ERROR AUX VARS
  let error = false;
  let error_message = "";
  let search_input = ""
  $: search_term = search_input.length > 3 ?  search_input : null
  $: search_results = []


  async function search() {
    if (search_term) {
          let  searchByTerm = await api.get(`skills/search?search_term=${search_term}`);
    
    if (searchByTerm) {
      search_results = searchByTerm._result
      console.log(searchByTerm._result)
    } else {
      error = true;
      error_message =
          "There has been a connection error, please try again later."
    }
      console.log('seraching ', search_term)

    }
  }

  function forceSearch() {
  search_term = search_input
  search()
}

function editTemplate(event) {
  console.log(edit, event)
}
function delTemplate(event) {
  console.log(del, event)
}



  async function submit(event) {
    const requestLocationData = {
      full_address,
      location_company_name,
      location_contact_name,
      location_contact_title,
      commercial_name,
      lada,
      location_phone,
      location_contact_mobile_phone,
      location_email,
      location_tax_id_type,
      location_tax_id_number,
      location_sells_supplies_to_public,
      location_has_dedicated_packaging_counter,
      location_is_franchise,
      location_fb_page_url,
      location_ig_account
    };

    let newRequest = await api.post(
      `requests?person_key=${person_key}`,
      requestLocationData
    );

    if (newRequest) {
      goto(`/profile`);
    } else {
      error = true;
      error_message =
        "There has been a connection error, please try again later.";
    }
  }
</script>
<style>
#mainInput {
  color: red;
}
</style>

<svelte:head>
  <title>Bot Trainer</title>
</svelte:head>

{#if error}
  <h3>{error_message}</h3>
{:else}
  <section class="md-section">
  <!-- <section class="md-section" style="background-color:#2a2c23"> -->
    <div class="container">

      <!-- post-03 -->
      <div class="post-03 post-03__reverse">
        <!-- <div class="post-03__media"><a target="blank" href="http://university.mitrol.net/"><img src="assets/img/services/Grafica-formación.png" alt="capacitacion contact center"></a></div> -->
        <div class="post-03__body">
          <!-- <h6 class="post-03__subTitle">BOT</h6> -->
          <h2 class="post-03__title">TRAINER</h2>
               <!-- <form> -->
            <!-- <fieldset> -->
             <!-- response -->
                  <StyledInput field={'bot_response'} humanized={""}>
                <textarea
                id="mainInput" 
                on:keyup={search}
                  bind:value={search_input}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <button on:click={forceSearch}> BUSCAR</button>
              </StyledInput>
              {#if search_term}
              {#if search_results}
              {#each search_results as { template_name, templates }, i}
              <h2>{i + 1} {template_name}</h2> 
                {#each templates as {template}, i}
                <TemplateBox template={template} order={i} />
                {/each}
              {/each}
              {:else}
              <p>No hay resultados.</p>
              {/if}
              {:else}
              <p>Insertar más caracteres por favor</p>
              {/if}
              <hr>

            <!-- </fieldset> -->
            <!-- </form> -->

          <!-- <div class="post-03__description">Train</div> -->
          <!-- <a class="post-03__link" target="blank" href="http://university.mitrol.net/">Ver más <i class="fa fa-angle-right" aria-hidden="true"></i></a> -->
        </div>
      </div>
      <!-- End / post-03 -->

    </div>
  </section>

{/if}
