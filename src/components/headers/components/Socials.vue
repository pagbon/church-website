<template>
  <!-- Social media links using map -->
  <a
    v-for="(socialMedia, index) in socialMediaLinks"
    :key="index"
    target="_blank"
    :href="socialMedia.href"
  >
    <i :class="socialMedia.iconClass"></i>
  </a>
</template>

<script setup>
const socialMediaLinks = [
  {
    id: 1,
    href: "https://twitter.com/cityofdavidcalgary",
    iconClass: "uil uil-twitter",
  },
  {
    id: 2,
    href: "https://www.facebook.com/RCCG-City-of-David-Calgary-846062358788035/",
    iconClass: "uil uil-facebook-f",
  },
  {
    id: 5,
    href: "https://www.youtube.com/@rccgcityofdavidcalgarycana1981",
    iconClass: "uil uil-youtube",
  },
];
</script>

<style scoped></style>
