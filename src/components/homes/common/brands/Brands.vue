<template>
  <div class="px-lg-5 mb-14 mb-md-17">
    <div class="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
      <div
        v-for="(elm, i) in clients1.slice(0, 6)"
        :key="i"
        class="col-4 col-md-2"
      >
        <figure class="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
          <img style="object-fit: contain;" :src="elm.src" alt="photo" />
        </figure>
      </div>

      <!--/column -->
    </div>
    <!--/.row -->
  </div>
</template>

<script setup>
import { clients1 } from "@/data/clients";
</script>

<style lang="scss" scoped></style>
