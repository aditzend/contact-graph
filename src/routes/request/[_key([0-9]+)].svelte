
<script context="module">

/**
 * FASCONLINE request/_key
 */


  import * as api from "@connections/fetch"


let data, request, requestor

  export async function preload(page, session) {
    data = await api.get(`requests/${page.params._key}`)
    request = data.request
    requestor = data.requestor
  }
</script>


<svelte:head>
	<title>REQUEST #{request._key}</title>
</svelte:head>

<div class="drawer section">
  <!-- DRAWER START -->
  <div
    class="fxg-drawer fxg-drawer--open at-element-marker"
    style="background-color: default;"
    data-color="#FFFFFF">
    <style>
      .fxg-drawer--open {
        max-height: none;
      }
    </style>
    <div class="fxg-wrapper container">



<div class="title section">
    <h2 class="fxg-title fxg-title--default fxg-title--align-center fxg-title--mobile-align-center   ">REQUEST  #{request._key}</h2>
</div>


      <div>
        <div
          class="fxg-drawer-offer fxg-drawer-layout-one layout1"
          style="background-color: default;">
          <div
            class="fxg-drawer__detail"
            style="padding-top:0; padding-left:1%;">
         


<div class="row">

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="fxg-title">Requestor</h5>
        <p class="card-text">{requestor.first_name} {requestor.last_name}</p>
        <!-- <a href="#" class="fxg-link fxg-link--xs fxg-link--rounded_button">CONTACT</a> -->
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="fxg-title">Location</h5>
        <p class="card-text">{request.full_address}</p>
        <!-- <a href="#" class="fxg-link fxg-link--xs fxg-link--rounded_button">EDIT</a> -->
      </div>
    </div>
  </div>
</div>

          
          
          </div>
         
        </div>
      </div>
    </div>
  </div>

</div>

