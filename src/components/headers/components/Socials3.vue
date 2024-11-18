<template>
  <a
    v-for="social in socialMedia"
    :key="social.id"
    :href="social.link"
    :class="social.buttonClass"
  >
    <i :class="social.iconClass"></i>
  </a>
</template>

<script setup>
const socialMedia = [
  {
    id: 1,
    link: "#",
    buttonClass: "btn btn-circle btn-sm btn-google",
    iconClass: "uil uil-google",
  },
  {
    id: 2,
    link: "#",
    buttonClass: "btn btn-circle btn-sm btn-facebook-f",
    iconClass: "uil uil-facebook-f",
  },
  {
    id: 3,
    link: "#",
    buttonClass: "btn btn-circle btn-sm btn-twitter",
    iconClass: "uil uil-twitter",
  },
];
</script>

<style scoped></style>
