<script>
  import { goto } from "@sapper/app";
  // import PlaceAutocomplete from "../../../components/PlaceAutocomplete.svelte";
  // import MapSearch from "../../../components/map/search.svelte";
  import StyledInput from "@forms/styledInput.svelte";
  import ErrorMessage from "@forms/errorMessage.svelte";
  import * as api from "@connections/fetch"

  let person_key

   export async function preload(page, session) {
    person_key  = session.person._key
  }

  // FORM VARS
  let full_address
      ,location_company_name
      ,location_contact_name
      ,location_contact_title
      ,commercial_name
      ,lada
      ,location_phone
      ,location_contact_mobile_phone
      ,location_email
      ,location_tax_id_type
      ,location_tax_id_number
      ,location_sells_supplies_to_public
      ,location_has_dedicated_packaging_counter
      ,location_is_franchise
      ,location_fb_page_url
      ,location_ig_account

  // ERROR AUX VARS
  let error = false;
  let error_message = "";

  async function submit(event) {

    const requestLocationData = { 
full_address
      ,location_company_name
      ,location_contact_name
      ,location_contact_title
      ,commercial_name
      ,lada
      ,location_phone
      ,location_contact_mobile_phone
      ,location_email
      ,location_tax_id_type
      ,location_tax_id_number
      ,location_sells_supplies_to_public
      ,location_has_dedicated_packaging_counter
      ,location_is_franchise
      ,location_fb_page_url
      ,location_ig_account
       };

    let  newRequest = await api.post(`requests?person_key=${person_key}`, requestLocationData);
    
    if (newRequest) {
      goto(`/profile`)
    } else {
      error = true;
      error_message =
          "There has been a connection error, please try again later."
    }

  }

</script>

<svelte:head>
  <title>New FASC Request</title>
</svelte:head>

{#if error } 
<h3> {error_message}</h3>
{:else}
<div class="fxg-main-content" style="margin-top: 55px;">
  <div class="fxg-genericpage-content">
    <div class="fxg-column-100">
      <div class="fxg-content fxg-wrapper">
        <div class="fxg-form">
          <h1 class="fxg-heading fxg-heading--centered fxg-heading--large">
            About your location
          </h1>
          <h2
            class="fxg-address_heading fxg-heading--small fxg-heading--centered">
            
            <br />
            <!-- Enter your contact information to get started. -->
          </h2>
          <form>
            <fieldset>
            <!-- <p>What is your location address? </p> -->
              <StyledInput field={'full_address'} humanized={'Full Address'}>
                <textarea
                  bind:value={full_address}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={'Your full address is required'} />
              </StyledInput>
              <StyledInput field={'location_company_name'} humanized={"Location's Company Name"}>
                <textarea
                  bind:value={location_company_name}
                  aria-required="true"
                  autogrow=""
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  maxlength="99"
                  rows="1"
                  required=""
                  validate-onblur=""
                  style="resize: none; overflow: hidden; height: 60px;"
                  aria-invalid="false"
                  spellcheck="false" />
                <ErrorMessage text={"Your Location's Company Name is required"} />
              </StyledInput>
                  <StyledInput field={'commercial_name'} humanized={'Commercial Name'}>
                <textarea
                  bind:value={commercial_name}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={'The Commercial Name is required'} />
              </StyledInput>
                  <StyledInput field={'location_contact_name'} humanized={"Contact Name at Location"}>
                <textarea
                  bind:value={location_contact_name}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={'Contact Name at Location is required'} />
              </StyledInput>

              <!-- location_contact_title -->
                  <StyledInput field={'location_contact_title'} humanized={"Location's Contact Title"}>
                <textarea
                  bind:value={location_contact_title}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={"Location's Contact Title is required"} />
              </StyledInput>

              <!-- lada -->
                  <StyledInput field={'lada'} humanized={"LADA"}>
                <textarea
                  bind:value={lada}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={"LADA is required"} />
              </StyledInput>

              <!-- location_phone -->

                  <StyledInput field={'location_phone'} humanized={"Location's Phone"}>
                <textarea
                  bind:value={location_phone}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={"Location's Phone is required"} />
              </StyledInput>

<!-- location_contact_mobile_phone -->
                  <StyledInput field={'location_contact_mobile_phone'} humanized={"Location's Contact Mobile Phone"}>
                <textarea
                  bind:value={location_contact_mobile_phone}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={"Location's Contact Mobile Phone is required"} />
              </StyledInput>
              
<!-- location_email -->
                  <StyledInput field={'location_email'} humanized={"Location's email"}>
                <textarea
                  bind:value={location_email}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={"Location's email is required"} />
              </StyledInput>

<!-- location_tax_id_type -->
                  <StyledInput field={'location_tax_id_type'} humanized={"Location's Tax Id Type"}>
                <textarea
                  bind:value={location_tax_id_type}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={"Location's Tax Id Type is required"} />
              </StyledInput>
              
              <!-- location_tax_id_number -->
                  <StyledInput field={'location_tax_id_number'} humanized={"Location's Tax Id Number"}>
                <textarea
                  bind:value={location_tax_id_number}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={"Location's Tax Id Number is required"} />
              </StyledInput>

              <!-- location_fb_page_url -->
                  <StyledInput field={'location_fb_page_url'} humanized={"Location's Facebook Page URL (Optional)"}>
                <textarea
                  bind:value={location_fb_page_url}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
              </StyledInput>

              <!-- location_ig_account -->
                  <StyledInput field={'location_ig_account'} humanized={"Location's Instagram Account (Optional)"}>
                <textarea
                  bind:value={location_ig_account}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
              </StyledInput>

             
              <div
                class="fxg-form__row fxg-field fxg-field--full"
                style="margin-top:45px">
                <div class="show">
                  <p class="text-center">
                    <button
                    on:click={submit}
                      class="fxg-button fxg-button--orange"
                      type="button"
                      ui-sref="register.security">
                      submit
                    </button>
                  </p>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
{/if}
