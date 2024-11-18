<template>
  <section class="wrapper bg-dark">
    <div class="swiper-container swiper-hero dots-over">
      <Swiper
        :space-between="0"
        :pagination="{ el: '.pagihero1', clickable: true }"
        :modules="[Pagination, Autoplay, Navigation]"
        :navigation="{
          prevEl: '.snbp13',
          nextEl: '.snbn13',
        }"
        :grab-cursor="true"
        :autoplay="{
          delay: 7000,
        }"
        :breakpoints="{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1200: { slidesPerView: 1 },
        }"
      >
        <SwiperSlide>
          <div
            class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style="background-image: url(/assets/img/photos/bg7.jpg)"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div
                  class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center"
                >
                  <h2
                    class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s"
                  >
                    Perfecting the Saints for Service
                  </h2>
                  <p
                    class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s"
                  >
                    Worship with us at RCCG City of David Parish, Calgary.
                  </p>
                  <div
                    class="animate__animated animate__slideInUp animate__delay-3s"
                  >
                    <router-link
                      to="/about"
                      class="btn btn-lg btn-outline-yellow rounded-pill"
                    >
                      Learn More
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
        <SwiperSlide>
          <div
            class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style="background-image: url(/assets/img/photos/bg8.jpg)"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div
                  class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center"
                >
                  <h2
                    class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s"
                  >
                    Perfecting the Saints for Service
                  </h2>
                  <p
                    class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s"
                  >
                    Worship with us at RCCG City of David Parish, Calgary.
                  </p>
                  <div
                    class="animate__animated animate__slideInUp animate__delay-3s"
                  >
                    <router-link
                      to="/about"
                      class="btn btn-lg btn-outline-yellow rounded-pill"
                    >
                      Learn More
                    </router-link>
                  </div>
                  <!-- <div
                    class="animate__animated animate__slideInUp animate__delay-3s"
                  >
                    <div
                      class="btn btn-circle btn-white btn-play ripple mx-auto mb-5 cursor-pointer"
                      @click="
                        () => {
                          modalOpen = true;
                        }
                      "
                    >
                      <i class="icn-caret-right"></i>
                    </div>
                  </div> -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/.container -->
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style="background-image: url(/assets/img/photos/bg9.jpg)"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div
                  class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center"
                >
                  <h2
                    class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s"
                  >
                    Perfecting the Saints for Service
                  </h2>
                  <p
                    class="lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s"
                  >
                    Worship with us at RCCG City of David Parish, Calgary.
                  </p>
                  <div
                    class="animate__animated animate__slideInUp animate__delay-3s"
                  >
                    <router-link
                      to="/about"
                      class="btn btn-lg btn-outline-yellow rounded-pill"
                    >
                      Learn More
                    </router-link>
                  </div>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/.container -->
          </div></SwiperSlide
        >
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
  <!-- <CommonModalVideo :modalOpen="modalOpen" @modalClose="modalClose" /> -->
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ref } from "vue";
const modalOpen = ref(false);
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
