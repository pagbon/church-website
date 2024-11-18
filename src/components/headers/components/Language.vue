<template>
  <a
    class="nav-link dropdown-item dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    >{{ cureentLaguage }}</a
  >
  <ul class="dropdown-menu">
    <li
      class="nav-item"
      v-for="(elm, i) in languages"
      :key="i"
      @click="
        () => {
          cureentLaguage = elm;
        }
      "
    >
      <span class="dropdown-item cursor-pointer">{{ elm }}</span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const languages = ["En", "De", "Es"];
const cureentLaguage = ref("En");
</script>

<style lang="scss" scoped></style>
