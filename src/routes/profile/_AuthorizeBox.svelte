<script>
  /**
   * FASCONLINE Local component RequestBox
   */

  export let request;
</script>

{#if request}

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
   
  </tbody>
</table>

  <div class="spacer section">
    <div class="fxg-spacer" style="height:13px;background-color:default;" />
  </div>
  <div class="fxg-featured-offer__detail" style="background-color:#eee;">
    <div class="title section">
      <h2 class="fxg-title fxg-title--default ">#{request._key}</h2>
    </div>
    <div class="richtext parbase section">
      <div class="fxg-rte">
        <p>This request is in process.</p>
      </div>
    </div>
    <a href="/" target="_blank" class="fxg-link fxg-link--rounded_button ">
      Go to request view
    </a>
  </div>
  
{/if}
