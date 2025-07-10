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
            style="top: -20%; right: -12%; object-fit: contain"
            alt="image"
          />
          <img
            src="/assets/img/svg/doodle9.svg"
            class="h-17 position-absolute d-none d-lg-block"
            style="bottom: 5%; left: -17%; object-fit: contain"
            alt="image"
          />
          <h2 class="fs-16 text-muted mb-3 text-center">
            {{ content?.sectionTitle }}
          </h2>
          <h3 class="display-4 mb-12 text-center">
            A {{ content.heading.slice(0, 9) }}
            <span class="text-gradient text-purple gradient-5">
              {{ content.heading.slice(9, 31) }}</span
            >{{ content.heading.slice(31) }}
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row d-flex align-items-start">
        <div class="col-lg-6 position-lg-sticky" style="top: 8rem">
          <figure>
            <img
              style="object-fit: contain"
              :src="content.image.asset.url"
              :alt="content.image.alt || 'image'"
              class="img-thumbnail shadow"
            />
          </figure>
        </div>
        <!-- /column -->
        <div class="col-lg-5 ms-auto">
          <div
            v-for="(feature, index) in content.details"
            :key="index"
            class="d-flex flex-row mb-1"
          >
            <div>
              <div :class="features3[index].svgBgClass">
                <img
                  style="object-fit: contain"
                  :src="features3[index].icon"
                  class="icon-svg solid text-navy"
                  alt="photo"
                />
              </div>
            </div>
            <div>
              <h4 class="fs-20 fw-bolder text-purple">{{ feature.title }}</h4>
              <PortableText :value="feature.description" />
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
import { PortableText } from "@portabletext/vue";
defineProps({
  content: Object,
});
</script>

<style lang="scss" scoped></style>
