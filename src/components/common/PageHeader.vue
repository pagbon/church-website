<template>
  <section class="wrapper bg-soft-grape shadow">
    <div class="container py-2 text-center">
      <div class="row">
        <div class="col-xl-8 mx-auto mb-6">
          <h1 class="display-1 mb-3 fw-bolder text-purple">{{ title }}</h1>
          <p v-if="description" class="lead mb-0 text-purple">
            {{ description }}
          </p>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container .-->
  </section>
</template>

<script setup>
defineProps(["title", "description"]);
</script>

<style lang="scss" scoped></style>
