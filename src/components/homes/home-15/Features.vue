<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
    <div class="col-lg-6 position-relative order-lg-2">
      <div
        class="shape bg-dot yellow rellax w-20 h-20"
        data-rellax-speed="1"
        style="top: 3rem; left: 5.5rem"
      ></div>
      <div class="overlap-grid overlap-grid-2">
        <div class="item">
          <figure class="rounded shadow">
            <img
              src="/assets/img/photos/about2.jpg"
              srcset="/assets/img/photos/about2@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <div class="item">
          <figure class="rounded shadow">
            <img
              src="/assets/img/photos/about3.jpg"
              srcset="/assets/img/photos/about3@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
      </div>
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <img
        src="/assets/img/icons/lineal/megaphone.svg"
        class="icon-svg icon-svg-md mb-4"
        alt="photo"
      />
      <h2 class="display-4 mb-3 text-purple">Who Are We?</h2>
      <p class="lead fs-lg">
        We are a parish of the Redeemed Christain Church of God in North East,
        Calgary.
      </p>
      <p class="mb-6">
        This is a place of perfection established by divine mandate. The church
        had her first service on Sunday January 11, 2015 and has been growing
        from grace to grace since then. We believe that the name – City of David
        Parish trumpets the purpose of God for the city of Calgary and her
        inhabitants at this time in God’s grand agenda.
      </p>

      <div class="my-1">
        <router-link
          to="/about"
          class="btn btn-lg btn-purple rounded-pill"
        >
          Learn More
        </router-link>
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
