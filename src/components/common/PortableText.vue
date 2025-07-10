<script setup>
import { PortableText } from "@portabletext/vue";
import { h } from "vue"; // bring in the `h` helper to create VNodes

defineProps({
  value: Array, // the rich text block array
});


const myComponents = {
  block: {
    normal: ({ children }) =>
      h("p", { class: "text-gray-800 mb-2" }, children),
  }
};

</script>

<template>
  <PortableText :value="value" :components="myComponents" />
</template>
