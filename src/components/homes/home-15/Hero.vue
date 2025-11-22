<template>
  <section class="wrapper bg-dark">
    <!-- Optional top banner image -->
    <div v-if="content?.topBannerImage?.asset?.url" class="hero-top-banner">
      <img
        :src="content.topBannerImage.asset.url"
        class="w-100"
        style="max-height: 220px; object-fit: cover;"
         alt="Hero top banner"
      />
    </div>
    
    <!-- Only render Swiper if we have at least one slide -->
    <div
      v-if="content?.slides && content.slides.length"
      class="swiper-container swiper-hero dots-over"
    > 
      <Swiper
        :space-between="0"
        :pagination="{ el: '.pagihero1', clickable: true }"
        :modules="swiperModules"
        :navigation="swiperNavigation"
        :grab-cursor="true"
        :autoplay="swiperAutoplay"
        :breakpoints="swiperBreakpoints"
      >
        <SwiperSlide
          v-for="(slide, index) in content.slides"
          :key="slide._key || index"
        >
          <div
            class="swiper-slide bg-dark bg-image"
            :class="{ 'bg-overlay bg-overlay-400': index > 0 }"
            :style="{
              backgroundImage: slide.asset?.url
                ? `url(${slide.asset.url})`
                : 'none',
            }"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div
                  class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center"
                >
                  <h2
                    class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s"
                  >
                    {{ content?.heroText }}
                  </h2>
                  <p
                    class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s"
                  >
                    {{ content?.subtitle }}
                  </p>
                  <div
                    class="animate__animated animate__slideInUp animate__delay-3s"
                  >
                    <router-link
                      :to="content?.ctaRoute || '/'"
                      class="btn btn-lg btn-outline-yellow rounded-pill"
                    >
                      {{ content?.ctaText || 'Learn More' }}
                    </router-link>
                  </div>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/.container -->
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="swiper-controls">
        <div class="swiper-navigation">
          <div class="swiper-button swiper-button-prev snbp13"></div>
          <div class="swiper-button swiper-button-next snbn13"></div>
        </div>
        <div
          class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal pagihero1"
        ></div>
      </div>
      <!-- /.swiper -->
    </div>
    <!-- /.swiper-container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const swiperModules = [Pagination, Autoplay, Navigation];
const swiperNavigation = {
  prevEl: ".snbp13",
  nextEl: ".snbn13",
};
const swiperAutoplay = {
  delay: 7000,
};
const swiperBreakpoints = {
  500: { slidesPerView: 1 },
  768: { slidesPerView: 1 },
  1024: { slidesPerView: 1 },
  1200: { slidesPerView: 1 },
};

defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>

        
