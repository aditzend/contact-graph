<script>
  /**
   * FASCONLINE Local component RequestBox
   */

  export let request;
</script>

{#if request}
  <div class="row">
    <!-- 3 Columns -->
    <div class="fxg-col fxg-col--mt20 fxg-col--mb20 col-sm-3 ">
      <div class="column_control section">
        <!-- COLUMN CONTROL START -->
        <div class="row">
          <!-- 2 Columns -->
          <div class="fxg-col col-sm-3 ">
            <div class="image parbase section">
              <!-- CHANGE: VMLNAFEDEXW-826 Added drag and drop in Pods -->
              <!-- Improved this component -->
              <!-- <div class="fxg-image-component    fxg-mobile--hide">
	<div class="fxg-image-component__image">
            <a href="https://www.fedex.com/en-us/email.html" data-analytics="img|email icon" target="_self" class="fxg-image-link">
                    <img class="fxg-img" src="https://storage.cloud.google.com/orans_location_pics/storefront-demo.jpeg" data-rendition="/content/dam/fedex-com/brand-icons/purple/email.svg/_jcr_content/renditions/cq5dam.web.727.463.svg" alt="email icon" style="height:100%;width:110%;">
            </a>
	</div>
</div> -->
            </div>
            <div class="image parbase section">
              <!-- CHANGE: VMLNAFEDEXW-826 Added drag and drop in Pods -->
              <!-- Improved this component -->
              <div
                class="fxg-image-component fxg-desktop--hide fxg-tablet--hide ">
                <div class="fxg-image-component__image">
                  <img
                    class="fxg-img"
                    src="/content/dam/fedex-com/brand-icons/purple/email.svg"
                    data-rendition="/content/dam/fedex-com/brand-icons/purple/email.svg/_jcr_content/renditions/cq5dam.web.727.463.svg"
                    alt="email icon"
                    style="height:100%;width:25%;" />
                </div>
              </div>
            </div>
            <div class="spacer section">
              <div
                class="fxg-spacer"
                style="height:13px;background-color:default;" />
            </div>
          </div>
          <div class="fxg-col col-sm-9 ">
            <div class="richtext parbase section">
              <!-- CHANGE: VMLNAFEDEXW-356 Added expressions to deal with Viewport Settings -->
              <input id="justifyRteRtl" type="hidden" value="false" />
              <div
                class="fxg-rte fxg-rte--align-left fxg-rte--mobile-align-center "
                style="color:default;"
                data-emptytext="Rich Text">
                <p>
                  <span class="fxg-font-size-18">
                    <b>Stay Informed With FedEx Emails&nbsp;</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- COLUMN CONTROL END -->
      </div>
    </div>
    <div class="fxg-col fxg-col--mt20 fxg-col--mb20 col-sm-6 ">
      <div class="richtext parbase section">
        <!-- CHANGE: VMLNAFEDEXW-356 Added expressions to deal with Viewport Settings -->
        <input id="justifyRteRtl" type="hidden" value="false" />
        <div
          class="fxg-rte fxg-rte--align-left fxg-rte--mobile-align-center "
          style="color:default;"
          data-emptytext="Rich Text">
          <p>
            <span class="fxg-font-size-16">
              <span class="fxg-font-size-18">
                Keep up with the latest FedEx offers and learn how to make
                shipping and printing easier with timely email updates.
              </span>
            </span>
            <br />
          </p>
        </div>
      </div>
    </div>
    <div class="fxg-col fxg-col--mt20 fxg-col--mb20 col-sm-3 ">
      <div class="link section">
        <div class="link">
          <!-- Link in not using New FDL and Using Target  -->
          <!-- Link in not using New FDL and Not Using Target  -->
          <a
            href="https://www.fedex.com/en-us/email.html"
            target="_blank"
            class="fxg-link js-fxgc-init fxg-link--lg fxg-link--rounded_button
            fxg-link--align-center fxg-link--mobile-align-center "
            data-analytics="link|Sign up"
            style="color:inherit;">
            Sign up
          </a>
        </div>
      </div>
    </div>
  </div>
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
  <div
    class="fxg-featured-offer__detail-image "
    data-mobile-image="/content/dam/fedex/us-united-states/International/images/2019/Q4/b_408323765_V3_20170627_MK_B48I5771_11921173_727x463_208680221.jpg"
    data-mobile-alt="A woman unboxing package with a backpack inside"
    data-main-image="/content/dam/fedex/us-united-states/International/images/2019/Q4/b_408323765_V3_20170627_MK_B48I5771_11921173_727x463_208680221.jpg"
    data-main-alt="A woman unboxing package with a backpack inside">
    <img
      src="https://storage.cloud.google.com/orans_location_pics/storefront-demo.jpeg"
      class="fxg-image"
      style="width: 100%; height: 100%;"
      alt="Storefront" />
  </div>
{/if}
