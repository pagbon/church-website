<template>
  <section class="wrapper bg-light">
    <div class="container py-10 py-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10">
        <div class="col-lg-4">
          <h2
            class="fs-25 text-line text-gradient gradient-5 text-purple text-center"
          >
            Meet the Leaders
          </h2>
          <p class="leading my-3">
            At RCCG City of David, we believe that we are better together. Our
            staff has a blast serving Jesus, His people, and each other. Let us
            know how we can help you grow in your relationships, develop your
            gifts, and find success in your life.
          </p>
          <router-link
            to="/about/leadership"
            class="btn btn-sm btn-purple rounded-pill mt-3"
            >See All Leaders</router-link
          >
        </div>
        <!--/column -->
        <div class="col-lg-8">
          <div
            class="swiper-container text-center mb-6"
            data-margin="30"
            data-dots="true"
            data-items-xl="3"
            data-items-md="2"
            data-items-xs="1"
          >
            <Swiper
              :space-between="30"
              :pagination="{ el: '.spb2', clickable: true }"
              :modules="[Pagination]"
              :grab-cursor="true"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }"
            >
              <SwiperSlide v-for="(elm, i) in teamMembers3" :key="i">
                <img
                  class="rounded-circle w-20 mx-auto mb-4"
                  :src="elm.avatarSrc"
                  alt="photo"
                />
                <h4 class="mb-1">{{ elm.name }}</h4>
                <p class="meta my-1">{{ elm.position }}</p>
                <nav class="nav social justify-content-center text-center my-0">
                  <a class="fs-11 d-flex align-items-center gap-1"
                    v-for="(elm2, i2) in elm.socialLinks"
                    :key="i2"
                    :href="`mailto:${elm2.link}`"
                    >{{ elm2.link }}</a
                  >
                </nav>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-controls">
              <div
                class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal spb2"
              ></div>
            </div>

            <!-- /.swiper -->
          </div>
          <!-- /.swiper-container -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { teamMembers3 } from "@/data/team";
</script>

<style lang="scss" scoped></style>
