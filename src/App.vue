<script setup>
import { onMounted, ref, watch } from "vue";
import AOS from "aos";
import initClipboard from "@/utlis/initClipboard";
import initPrism from "@/utlis/initPrism";
import initPlayer from "@/utlis/initVideoplayer";
import { useRoute } from "vue-router";
import { injectSvg } from "./utlis/injextSvg";
// Get the current route
const route = useRoute();

// Define a reactive variable to store the current route path

onMounted(() => {
  // Check if the window object is defined
  if (typeof window !== "undefined") {
    // Import the script only on the client side
    import("bootstrap/dist/js/bootstrap.esm").then((module) => {
      // Module is imported, you can access any exported functionality if
    });
  }

  AOS.init({
    duration: 1400,
    // once: true,
  });
});

watch(
  () => route.path,
  () => {
    setTimeout(() => {
      initPlayer();
      initPrism();
      initClipboard();
      injectSvg();
    });
  }
);

import "aos/dist/aos.css"; // Import the AOS CSS
import "swiper/css/autoplay";
</script>

<template><RouterView /></template>

<style lang="css">
@import "../public/assets/css/plugins.css";
@import "../public/assets/css/colors/colors.css";
@import "../public/assets/css/style.css";
@import "../public/assets/css/custom.css";
</style>
