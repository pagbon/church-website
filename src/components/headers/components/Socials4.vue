<template>
  <a v-for="social in socialMedia" :key="social.id" :href="social.link">
    <i :class="social.iconClass"></i>
  </a>
</template>

<script setup>
const socialMedia = [
  {
    id: 2,
    link: "#",

    iconClass: "uil uil-facebook-f",
  },
  {
    id: 3,
    link: "#",

    iconClass: "uil uil-twitter",
  },
  {
    id: 1,
    link: "#",

    iconClass: "uil uil-instagram",
  },
];
</script>

<style scoped></style>
