<template>
  <section id="snippet-12" class="wrapper">
    <div class="container pb-10 pt-5 pb-md-15">
      <div class="row text-center">
        <div
          class="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative"
        >
          <img
            src="/assets/img/svg/doodle3.svg"
            class="h-11 position-absolute d-none d-lg-block"
            style="top: -20%; right: -12%"
            alt="image"
          />
          <img
            src="/assets/img/svg/doodle9.svg"
            class="h-17 position-absolute d-none d-lg-block"
            style="bottom: 5%; left: -17%"
            alt="image"
          />
          <h2 class="fs-16 text-muted mb-3 text-center">More About Us</h2>
          <h3 class="display-4 mb-12 text-center">
            A vibrant
            <span class="text-gradient text-purple gradient-5">
              community of believers</span
            >, committed to christ.
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row d-flex align-items-start">
        <div class="col-lg-6 position-lg-sticky" style="top: 8rem">
          <figure>
            <img
              src="/assets/img/photos/devices5.png"
              srcset="/assets/img/photos/devices5@2x.png 2x"
              alt="image"
              class="img-thumbnail shadow"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-5 ms-auto">
          <div
            v-for="(feature, index) in features3"
            :key="index"
            class="d-flex flex-row mb-1"
          >
            <div>
              <div :class="feature.svgBgClass">
                <img
                  :src="feature.icon"
                  class="icon-svg solid text-navy"
                  alt="photo"
                />
              </div>
            </div>
            <div>
              <h4 class="fs-20 fw-bolder text-purple">{{ feature.title }}</h4>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
  </section>
</template>

<script setup>
import { features3 } from "@/data/features";
</script>

<style lang="scss" scoped></style>
