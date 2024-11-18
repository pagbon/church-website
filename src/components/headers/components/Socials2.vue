<template>
  <!-- Social media links using map -->
  <a
    v-for="(socialMedia, index) in socialMediaLinks"
    :key="index"
    class="headerSocials2"
    :href="socialMedia.href"
  >
    <i :class="socialMedia.iconClass"></i>
  </a>
</template>

<script setup>
const socialMediaLinks = [
  { id: 1, href: "#", iconClass: "uil uil-twitter" },
  { id: 2, href: "#", iconClass: "uil uil-facebook-f" },
  { id: 3, href: "#", iconClass: "uil uil-dribbble" },
  { id: 4, href: "#", iconClass: "uil uil-instagram" },
];
</script>

<style scoped>
/* Add any additional styling here */
</style>
