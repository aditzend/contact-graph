
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
      <div class="fxg-drawer__title-wrapper">
        <h2 class="fxg-title" style="text-align:left;color:default;">
          Save on shipping.
          <br />
          Open a new FedEx account.
        </h2>
        <a
          aria-label="Woman celebrating with FedEx packages and content"
          class="fxg-drawer__button fxg-link--carrot"
          data-analytics="FXS-PEAK-XT-USSW-DiscountOffers|Direct16|USHM|Drawer"
          name="&amp;lid=FXS-PEAK-XT-USSW-DiscountOffers|Direct16|USHM|Drawer"
          href="/public/profile/new"
          onclick="FDX.DTM.pushLinkInfo(this)"
          style="text-align:left;">
          Create An Account
        </a>
      </div>
      <div>
        <!-- LAYOUT 1: IMAGE ON RIGHT -->
        <div
          class="fxg-drawer-offer fxg-drawer-layout-one layout1"
          style="background-color: default;">
          <!-- Mobile only image -->
          <div
            class="fxg-drawer__detail"
            style="padding-top:0; padding-left:1%;">
            <h2 class="fxg-title" style="color:default; margin:0; padding:0;">
              Upgrade your business.
              <br />
              Become a FedEx Authorized Shipping Center.
            </h2>
            <!-- CHANGE: VMLNAFEDEXW-356 Added expressions to deal with Viewport Settings -->
            <input id="justifyRteRtl" type="hidden" value="false" />
            <div class="fxg-rte " data-emptytext="Rich Text">
              <p style="padding:0; margin:1.5em 0 0;">
                Once you become a FASC you will :
              </p>
              <ul style="margin:1.5em 0;">
                <li>Have benefit 1</li>
                <li>Have benefit 2</li>
                <li>Have benefit 3</li>
              </ul>
            </div>
            <a
              class="fxg-link fxg-link--lg fxg-link--rounded_button"
              href="/public/profile/new"
              target="_self">
              Create An Account
            </a>
          </div>
          <div class="fxg-drawer__detail-image">
            <img
              alt="Woman celebrating with FedEx packages and content"
              style="width: 100%; height: 100%!important;"
              src="https://www.fedex.com/content/dam/fedex/us-united-states/Testing/images/2020/Q2/20180722_MK_33959_190760893.jpg" />
          </div>
        </div>
      </div>
    </div>
    <!-- DRAWER END -->
  </div>

</div>
