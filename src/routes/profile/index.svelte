<script>
  /**
   * FASCONLINE /profile
   */

  import * as api from "@connections/fetch";
  import RequestBox from "./_RequestBox.svelte";
  import NoRequests from "./_NoRequests.svelte";

  import { goto, stores } from "@sapper/app";
  const { session } = stores();

  $: isUser = $session && $session.user;
  $: person_key = $session && $session.person._key;
  $: requests = api.get(`requests?person_key=${person_key}`);
</script>

<svelte:head>
  <title>FASC Onboarding</title>
</svelte:head>

<div class="drawer section">
  <!-- DRAWER START -->
  <div
    class="fxg-drawer fxg-drawer--open at-element-marker"
    style="background-color: default;"
    data-color="#FAFAFA">
    <style>
      .fxg-drawer--open {
        max-height: none;
      }
    </style>
    <div class="fxg-wrapper container">
      {#await requests}
        <p>loading requests...</p>
      {:then rs}
        {#each rs as r}
          {#if r}
            <div class="featured_offer section">
            <div class="fxg-wrapper fxg-featured-offer-wrapper   fxg-mobile--hide">
            <div class="fxg-featured-offer fxg-featured-offer-layout-one layout1">
              <RequestBox request={r} />
            </div>

            </div>
            </div>
          {:else}
            <NoRequests {person_key} />
          {/if}
        {/each}
      {:catch error}
        <p>Error getting requests : {error}</p>
      {/await}

    </div>
  </div>
</div>
