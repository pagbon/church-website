<template>
  <div
    @click="scrollToTop"
    :class="`progress-wrap ${showScrollTop ? 'active-progress' : ''}`"
  >
    <svg
      class="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        :style="`
          transition: stroke-dashoffset 10ms linear 0s;
          stroke-dasharray: 307.919, 307.919;
          stroke-dashoffset: ${scrolledPart};`"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const showScrollTop = ref(false);

const scrolled = ref(0);
const scrollHeight = ref(500);
const scrolledPart = computed(
  () => 307.919 - (scrolled.value / scrollHeight.value) * 307.919
);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // You can use 'auto' or 'instant' as well
  });
};
const handleScroll = () => {
  scrolled.value =
    document.body.scrollTop || document.documentElement.scrollTop;
  showScrollTop.value = window.scrollY >= window.innerHeight;
  scrollHeight.value =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
