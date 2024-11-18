<template>
  <section class="wrapper bg-light wrapper-border">
    <div class="container py-5">
      <div class="row mb-3">
        <div class="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
          <Icon
            icon="clarity:image-gallery-solid"
            width="3rem"
            height="3rem"
            class="text-yellow"
          />
          <h2 class="display-4 mb-3 px-lg-14 text-purple">Media Gallery</h2>
          <p class="lead">
            Explore a vibrant collection of photos that capture the spirit of
            our church community, worship services, and special events.
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: 0.5rem; right: -1.7rem"
        ></div>
        <div
          class="shape rounded-circle bg-line yellow rellax w-16 h-16"
          data-rellax-speed="1"
          style="top: 0.5rem; left: -1.7rem"
        ></div>
        <div class="swiper-container dots-closer mb-6">
          <Swiper
            auto-play
            :space-between="1"
            :pagination="{ el: '.spb1', clickable: true }"
            :modules="[Pagination, Autoplay]"
            :grab-cursor="true"
            :breakpoints="{
              500: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4.5 },
              1200: { slidesPerView: 4.5 },
            }"
          >
            <SwiperSlide v-for="(item, i) in 20" :key="i">
              <div class="item-inner">
                <img
                  style="height: 350px; object-fit: cover"
                  class="img-fluid rounded"
                  :src="`/assets/img/gallery/${i + 1}.jpg`"
                  alt="photo"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-controls">
            <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb1"
            ></div>
          </div>

          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
</script>

<style lang="scss" scoped></style>
