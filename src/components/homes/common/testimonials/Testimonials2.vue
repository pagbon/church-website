<template>
  <section class="wrapper bg-light">
    <div class="container">
      <div class="row text-white text-center">
        <div class="col-xl-10 mx-auto mb-14 mb-lg-n6">
          <div
            class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400"
            style="background-image: url('/assets/img/photos/bg2.jpg')"
          >
            <div class="card-body p-9 p-xl-12">
              <div class="row gx-0">
                <div class="col-xxl-9 mx-auto">
                  <div class="swiper-container dots-light dots-closer mb-6">
                    <Swiper
                      :space-between="30"
                      :pagination="{ el: '.spb11', clickable: true }"
                      :modules="[Pagination]"
                      :grab-cursor="true"
                      :breakpoints="{
                        500: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                        1200: { slidesPerView: 1 },
                      }"
                    >
                      <SwiperSlide v-for="(elm, i) in testimonials3" :key="i">
                        <span class="ratings five mb-3"></span>
                        <blockquote class="border-0 fs-lg mb-2">
                          <p>{{ elm.quote }}</p>
                          <div
                            class="blockquote-details justify-content-center text-center"
                          >
                            <div class="info ps-0">
                              <h5 class="mb-1 text-white">{{ elm.name }}</h5>
                              <p class="mb-0">{{ elm.role }}</p>
                            </div>
                          </div>
                        </blockquote></SwiperSlide
                      >
                    </Swiper>
                    <div class="swiper-controls">
                      <div
                        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb11"
                      ></div>
                    </div>

                    <!-- /.swiper -->
                  </div>
                  <!-- /.swiper-container -->
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials3 } from "@/data/testimonials";
</script>

<style lang="scss" scoped></style>
