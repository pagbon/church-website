<template>
  <section class="wrapper">
    <div class="container pt-16 pb-14 pb-md-0">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-5 col-xl-4 d-md-flex position-relative">
          <div
            class="shape rounded-circle bg-pale-purple rellax w-21 h-21 d-md-none d-lg-block"
            data-rellax-speed="1"
            style="top: 7rem; left: 1rem"
          ></div>
          <figure>
            <img
              class="img-thumbnail rounded shadow-sm"
              src="/assets/img/photos/co1.jpg"
              srcset="/assets/img/photos/co1@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-md-7 col-lg-7 col-xl-8">
          <div class="my-10">
            <h2 class="display-6 mb-3 text-purple">
              Welcome to the City of David
            </h2>

            <p class="lead">
              This is a place of perfection established by divine mandate. The
              church had her first service on Sunday January 11, 2015 and has
              been growing from grace to grace since then. We believe that the
              name – City of David Parish trumpets the purpose of God for the
              city of Calgary and her inhabitants at this time in God’s grand
              agenda.
            </p>
            <p class="lead">
              The Word of God is true, infallible and everlasting. It is the
              final authority for the believer and it was written with the
              intent of making the believer complete, lacking nothing 2 Tim. 2:
              16-17. We shall look at the Word for the biblical significance of
              the City of David as a guide to God’s plan for His people.
            </p>
            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
