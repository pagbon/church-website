<template>
  <!-- Social media links using map -->
  <a
    v-for="(socialMedia, index) in socialMediaLinks"
    :key="index"
    target="_blank"
    :href="socialMedia.href"
    :class="socialMedia.class"
    
  >
    <i :class="socialMedia.iconClass" class="fs-30"></i>
  </a>
  <CommonScrolltop />
</template>

<script setup>
import CommonScrolltop from "@/components/common/Scrolltop.vue";
const socialMediaLinks = [
  {
    id: 1,
    href: "https://www.instagram.com/rccgcityofdavidcalgary_/p/DFk4xSNNwBc/",
    iconClass: "uil uil-instagram",
  },
  {
    id: 2,
    href: "https://www.facebook.com/RCCGCOD2015/",
    iconClass: "uil uil-facebook-f",
  },
  {
    id: 5,
    href: "https://www.youtube.com/@rccgcityofdavidcalgarycana1981",
    iconClass: "uil uil-youtube",
  },
];
</script>

<style scoped>
</style>
