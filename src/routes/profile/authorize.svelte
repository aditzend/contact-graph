<script>
  /**
   * ORANS  /profile/authorize
   */

  import * as api from "@connections/fetch";
  import AuthorizeBox from "./_AuthorizeBox.svelte";
  import NoRequests from "./_NoRequests.svelte";

  import { goto, stores } from "@sapper/app";
  const { session } = stores();

  $: isUser = $session && $session.user;
  $: person_key = $session && $session.person._key;
  $: requests = api.get(`requests`);
</script>

<svelte:head>
  <title>ORANS</title>
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
    <h1> Incoming Requests </h1>
      {#await requests}
        <p>loading requests...</p>
      {:then rs}
       <div class="featured_offer section">
            <div class="fxg-wrapper fxg-featured-offer-wrapper   fxg-mobile--hide">
            <div class="fxg-featured-offer fxg-featured-offer-layout-one layout1">
                 <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Location Company Name</th>
      <th scope="col">Commercial Name</th>
      <th scope="col">Full Address</th>
      <th scope="col">Assigned To</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    {#each rs as r}
          {#if r}
          
               <tr>
      <th scope="row"><a href="/request/{r._key}">{r._key} </a></th>
      <td>{r.location_company_name}</td>
      <td>{r.commercial_name}</td>
      <td>{r.full_address}</td>
      <td>best.agent@fedex.com</td>
      <td>INBOUND</td>
    </tr>
   
          {/if}
        {/each}
   
  </tbody>
</table>
   </div>

            </div>
            </div>
      
      
      {:catch error}
        <p>Error getting requests : {error}</p>
      {/await}

    </div>
  </div>
</div>
