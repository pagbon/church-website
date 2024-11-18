<template>
  <ul>
    <!-- Navigation links using map -->
    <li v-for="(link, index) in navigationLinks" :key="index">
      <router-link :to="link.href">{{ link.text }}</router-link>
    </li>
  </ul>
</template>

<script setup>
const navigationLinks = [
  { id: 1, href: "/blog", text: "Our Story" },
  { id: 2, href: "/terms", text: "Terms of Use" },
  { id: 3, href: "/terms", text: "Privacy Policy" },
  { id: 4, href: "/contact", text: "Contact Us" },
];
</script>

<style scoped>
/* Add any additional styling here */
</style>
