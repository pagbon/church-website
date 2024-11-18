<template>
  <Icon
    :class="class"
    :icon="icon"
    :inline="inline"
    :width="width"
    :height="height"
    :horizontalFlip="horizontalFlip"
    :verticalFlip="verticalFlip"
    :flip="flip"
    :rotate="rotate"
    :color="color"
    :onLoad="onLoad"
  />
</template>

<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  inline: {
    type: Boolean,
    default: false,
    description: "Changes vertical alignment.",
  },
  class: {
    type: String,
    default: null,
  },
  width: {
    type: [String, Number],
    default: "1em",
    description: "Icon width.",
  },
  height: {
    type: [String, Number],
    default: "1em",
    description: "Icon height.",
  },
  horizontalFlip: {
    type: Boolean,
    default: false,
    description: "Flips icon horizontally.",
  },
  verticalFlip: {
    type: Boolean,
    default: false,
    description: "Flips icon vertically.",
  },
  flip: {
    type: String,
    default: null,
    description: "Alternative to horizontalFlip and verticalFlip.",
  },
  icon: {
    type: String,
    default: null,
    description: "Alternative to horizontalFlip and verticalFlip.",
  },
  rotate: {
    type: [Number, String],
    default: 0,
    description: "Rotates icon.",
  },
  color: {
    type: String,
    default: null,
    description: "Changes icon color.",
  },
  onLoad: {
    type: Function,
    default: null,
    description: "Callback when icon data has been loaded.",
  },
});
</script>

<style lang="scss" scoped></style>
