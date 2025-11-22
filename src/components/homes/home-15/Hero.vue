<template>
  <section class="wrapper bg-dark">

    <!-- ⭐ TOP BANNER IMAGE -->
    <div 
      v-if="
        content &&
        content.topBannerImage &&
        content.topBannerImage.asset &&
        content.topBannerImage.asset.url
      "
      class="hero-top-banner"
    >
      <img
        :src="content.topBannerImage.asset.url"
        alt="Top Banner"
        class="hero-top-banner-img"
      />
    </div>

    <!-- ⭐ ORIGINAL HERO SLIDER -->
    <div class="swiper-container swiper-hero dots-over">
      <Swiper
        :space-between="0"
        :pagination="{ el: '.pagihero1', clickable: true }"
        :modules="[Pagination, Autoplay, Navigation]"
        :navigation="{ prevEl: '.snbp13', nextEl: '.snbn13' }"
        :grab-cursor="true"
        :autoplay="{ delay: 7000 }"
        :breakpoints="{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1200: { slidesPerView: 1 }
        }"
      >
        <!-- SLIDE 1 -->
        <SwiperSlide v-if="content?.slides?.[0]?.asset?.url">
          <div
            class="swiper-slide bg-dark bg-image"
            :style="{ backgroundImage: `url(${content.slides[0].asset.url})` }"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center align-self-center">
                  <h2 class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    {{ content.heroText }}
                  </h2>
                  <p class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    {{ content.subtitle }}
                  </p>
                  <div class="animate__animated animate__slideInUp animate__delay-3s">
                    <router-link :to="content.ctaRoute" class="btn btn-lg btn-outline-yellow rounded-pill">
                      {{ content.ctaText }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- SLIDE 2 -->
        <SwiperSlide v-if="content?.slides?.[1]?.asset?.url">
          <div
            class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            :style="{ backgroundImage: `url(${content.slides[1].asset.url})` }"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center align-self-center">
                  <h2 class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    {{ content.heroText }}
                  </h2>
                  <p class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    {{ content.subtitle }}
                  </p>
                  <div class="animate__animated animate__slideInUp animate__delay-3s">
                    <router-link :to="content.ctaRoute" class="btn btn-lg btn-outline-yellow rounded-pill">
                      {{ content.ctaText }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- SLIDE 3 -->
        <SwiperSlide v-if="content?.slides?.[2]?.asset?.url">
          <div
            class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            :style="{ backgroundImage: `url(${content.slides[2].asset.url})` }"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center align-self-center">
                  <h2 class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Perfecting the Saints for Service
                  </h2>
                  <p class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    Worship with us at RCCG City of David Parish, Calgary.
                  </p>
                  <div class="animate__animated animate__slideInUp animate__delay-3s">
                    <router-link to="/about" class="btn btn-lg btn-outline-yellow rounded-pill">
                      Learn More
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- SECOND TEXT BLOCK (your original duplicate) -->
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center align-self-center">
                  <h2 class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    {{ content.heroText }}
                  </h2>
                  <p class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    {{ content.subtitle }}
                  </p>
                  <div class="animate__animated animate__slideInUp animate__delay-3s">
                    <router-link :to="content.ctaRoute" class="btn btn-lg btn-outline-yellow rounded-pill">
                      {{ content.ctaText }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>

      <!-- SWIPER NAV + PAGINATION -->
      <div class="swiper-controls">
        <div class="swiper-navigation">
          <div class="swiper-button swiper-button-prev snbp13"></div>
          <div class="swiper-button swiper-button-next snbn13"></div>
        </div>
        <div class="swiper-pagination pagihero1"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.hero-top-banner-img {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  display: block;
}
</style>


