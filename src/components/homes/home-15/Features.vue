<template>
  <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
    <div class="col-lg-6 position-relative order-lg-2">
      <div
        class="shape bg-dot yellow rellax w-20 h-20"
        data-rellax-speed="1"
        style="top: 3rem; left: 5.5rem"
      ></div>
      <div class="overlap-grid overlap-grid-2">
        <div class="item">
          <figure class="rounded shadow">
            <img
              style="object-fit: contain"
              :src="content.images[0].asset.url"
              srcset="/assets/img/photos/about2@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <div class="item">
          <figure class="rounded shadow">
            <img
              style="object-fit: contain"
              :src="content.images[1].asset.url"
              srcset="/assets/img/photos/about3@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
      </div>
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <img
        style="object-fit: contain"
        src="/assets/img/icons/lineal/megaphone.svg"
        class="icon-svg icon-svg-md mb-4"
        alt="photo"
      />
      <h2 class="display-4 mb-3 text-purple">{{ content.heading }}</h2>

      <PortableText :value="content.body" />

      <div class="my-1">
        <router-link
          :to="content.ctaRoute"
          class="btn btn-lg btn-purple rounded-pill"
        >
          {{ content.ctaText }}
        </router-link>
      </div>
      <!--/.row -->
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { PortableText } from "@portabletext/vue";
defineProps({
  content: Object,
});
</script>

<style lang="scss" scoped></style>
