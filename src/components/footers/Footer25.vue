<template>
  <footer class="bg-black">
    <div class="container pt-8 pt-md-10 pb-7">
      <div class="row gx-lg-0 gy-6">
        <div class="col-lg-4">
          <div class="widget">
            <router-link to="/">
              <img style="object-fit: contain;"
                class="logo-dark img-fluid shadow"
                src="/assets/img/logo.png"
                srcset="/assets/img/logo@2x.png 2x"
                alt="photo"
              />
            </router-link>
            <p class="fs-14 lead my-2">
              This is a place of perfection established by divine mandate. The
              church had her first service on Sunday January 11, 2015 and has
              been growing from grace to grace since then...
            </p>
            <router-link
              to="/about"
              class="btn btn-sm btn-outline-yellow rounded-pill mt-1"
            >
              Read more
            </router-link>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-lg-4 offset-lg-1">
          <div class="widget">
            <div class="d-flex flex-row mb-1">
              <div>
                <div class="icon text-yellow fs-25 me-4 mt-n1">
                  <i class="uil uil-phone-volume"></i>
                </div>
              </div>
              <div>
                <h6 class="mb-1 text-yellow">Phone</h6>
                <p class="mb-1 fs-13">1-403-401-5671</p>
              </div>
            </div>
            <div class="d-flex flex-row my-1">
              <div>
                <div class="icon text-yellow fs-25 me-4 mt-n1">
                  <i class="uil uil-envelope"></i>
                </div>
              </div>
              <div>
                <h6 class="mb-1 text-yellow">Email</h6>
                <p class="mb-1 fs-13">info@rccgcityofdavidcalgary.com</p>
              </div>
            </div>
            <div class="d-flex flex-row my-1">
              <div>
                <div class="icon text-yellow fs-25 me-4 mt-n1">
                  <i class="uil uil-location-pin-alt"></i>
                </div>
              </div>
              <div>
                <h6 class="mb-1 text-yellow">Address</h6>
                <address class="mb-1 fs-13">
                  Thorncliffe Greenview Community Association 5600 Centre Street
                  North, Calgary, AB T2K 0T3
                </address>
              </div>
            </div>
            <!--/div -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-lg-3">
          <div class="widget">
            <div class="d-flex flex-row">
              <div class="align-self-start justify-content-start">
                <h6 class="mb-1 text-yellow">Quick Links</h6>
                <router-link
                  class="d-block fs-15 text-secondary my-1 quick-links"
                  to="/about"
                  >About</router-link
                >
                <router-link
                  class="d-inline-block fs-15 text-secondary my-1 quick-links"
                  to="/contact"
                  >Contact</router-link
                >
                <router-link
                  class="d-block fs-15 text-secondary my-1 quick-links"
                  to="/media"
                  >Media</router-link
                >
              </div>
            </div>
            <!--/div -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
      </div>
      <!--/.row -->
      <hr class="mt-10 mt-md-10 mb-3" />

      <div class="d-md-flex align-items-center justify-content-between">
        <p class="mb-2 mb-lg-0 fs-13">
          © {{ new Date().getFullYear() }} RCCG City of David, Calgary. All
          rights reserved.
        </p>
        <nav class="nav social social-muted mb-0 text-md-end">
          <FootersComponentsSocials />
        </nav>
        <!-- /.social -->
      </div>
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup>
import CommonScrolltop from "@/components/common/Scrolltop.vue";
import FootersComponentsSocials from "@/components/footers/components/Socials.vue";
</script>

<style scoped>
.quick-links:hover {
  color: #c79c66 !important;
}
</style>
