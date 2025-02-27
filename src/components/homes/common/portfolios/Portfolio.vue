<template>
  <section id="snippet-4" class="wrapper bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Latest Projects</h2>
          <h3 class="display-4 mb-10">
            Check out some of our awesome projects with creative ideas and great
            design.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="container-fluid px-md-6">
      <div class="swiper-container blog grid-view mb-14 mb-md-16">
        <Swiper
          :space-between="30"
          :pagination="{ el: '.pagi4', clickable: true }"
          :modules="[Pagination, Navigation]"
          :navigation="{
            prevEl: '.snpb1',
            nextEl: '.snnb1',
          }"
          :breakpoints="{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }"
          :grab-cursor="true"
        >
          <SwiperSlide v-for="(elm, i) in projects3" :key="i">
            <figure class="rounded">
              <img style="object-fit: contain;" :src="elm.image.src" alt="photo" />
            </figure>
          </SwiperSlide>
        </Swiper>

        <div class="swiper-controls">
          <div class="swiper-navigation">
            <div class="swiper-button swiper-button-prev snpb1"></div>
            <div class="swiper-button swiper-button-next snnb1"></div>
          </div>
          <div
            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagi4"
          ></div>
        </div>
        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container-fluid -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { projects3 } from "@/data/projects";
</script>

<style lang="scss" scoped></style>
