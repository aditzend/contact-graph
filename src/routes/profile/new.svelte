<script>
  import { goto } from "@sapper/app";
  // import PlaceAutocomplete from "../../../components/PlaceAutocomplete.svelte";
  // import MapSearch from "../../../components/map/search.svelte";
  import StyledInput from "@forms/styledInput.svelte";
  import ErrorMessage from "@forms/errorMessage.svelte";
  import * as api from "@connections/fetch"

  

  // FORM VARS
  let first_name = "";
  let last_name = "";
  let personal_email = "";
  let personal_phone = "";
  let error = false;
  let error_message = "";

  async function submit(event) {

    const person = { first_name, last_name, personal_email, personal_phone };
    console.log(person)
    let  insertion = await api.post(`persons`, person);
    
    if (insertion) {
      goto(`/profile/${insertion._key}`)
    } else {
      error = true;
      error_message =
          "There has been a connection error, please try again later."
    }

  }

</script>

<svelte:head>
  <title>New FASC Profile</title>
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
            Let's create your profile.
          </h1>
          <h2
            class="fxg-address_heading fxg-heading--small fxg-heading--centered">
            
            <br />
            Enter your contact information to get started.
          </h2>
          <form>
            <fieldset>
              <StyledInput field={'first_name'} humanized={'First Name'}>
                <textarea
                  bind:value={first_name}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={'Your first name is required'} />
              </StyledInput>
              <StyledInput field={'last_name'} humanized={'Last Name'}>
                <textarea
                  bind:value={last_name}
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
                <ErrorMessage text={'Your last name is required'} />
              </StyledInput>
                  <StyledInput field={'personal_phone'} humanized={'Personal Phone'}>
                <textarea
                  bind:value={personal_phone}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={'Your phone number is required'} />
              </StyledInput>
                  <StyledInput field={'personal_email'} humanized={'Personal Email'}>
                <textarea
                  bind:value={personal_email}
                  aria-required="true"
                  autogrow=""
                  maxlength="99"
                  class="fxg-field__input-text ng-untouched ng-pristine
                  ng-invalid"
                  rows="1"
                  aria-invalid="false"
                  spellcheck="false" />
                  <ErrorMessage text={'Your email is required'} />
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
