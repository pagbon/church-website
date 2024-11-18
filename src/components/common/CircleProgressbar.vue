<template>
  <svg
    ref="targetElement"
    viewBox="0 0 100 50"
    :style="{ display: 'block', width: '100%' }"
  >
    <path
      d="M 50,50 m -47,0 a 47,47 0 1 1 94,0"
      stroke="#eee"
      stroke-width="6"
      fill-opacity="0"
    ></path>
    <path
      d="M 50,50 m -47,0 a 47,47 0 1 1 94,0"
      stroke="#555"
      stroke-width="6"
      fill-opacity="0"
      :style="`stroke-dasharray: 147.708, 147.708; stroke-dashoffset: ${
        147.708 - (countedNumber * 147.708) / 100
      };`"
    ></path>
  </svg>
  <div
    class="progressbar-text"
    style="
      position: absolute;
      left: 50%;
      top: auto;
      padding: 0px;
      margin: 0px;
      transform: translate(-50%, 0px);
      color: rgb(85, 85, 85);
      bottom: 0px;
    "
  >
    {{ countedNumber }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const targetElement = ref();
const props = defineProps(["max"]);

const countedNumber = ref(0);
const startCountup = () => {
  const intervalId = setInterval(() => {
    countedNumber.value += 1;

    // Check if counted.value has reached a specific value (e.g., props.max)
    if (countedNumber.value >= props.max) {
      // Stop the interval if the condition is met
      clearInterval(intervalId);
    }
  }, 2000 / props.max);
};
onMounted(() => {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCountup();
        observer.unobserve(entry.target);
        // Do something when the observed element enters the viewport
      }
    });
  }

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin around the root
    threshold: 0.5, // Trigger when 50% of the observed element is visible
  };

  // Create an Intersection Observer and pass in the callback function and options
  const observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the target element

  observer.observe(targetElement.value);
});
</script>

<style lang="scss" scoped></style>
