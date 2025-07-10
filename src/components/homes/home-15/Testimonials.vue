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
            <img style="object-fit: contain;"
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
              {{content.heading}}
            </h2>

            
            <PortableText :value="content.body" />
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
import { PortableText } from "@portabletext/vue";

defineProps({
  content: Object
})
</script>

<style lang="scss" scoped></style>
