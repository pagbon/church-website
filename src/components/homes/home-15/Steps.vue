<template>
  <!-- /.row -->
  <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    <div class="col-lg-6 order-lg-2">
      <div
        v-for="(item, index) in content.items"
        class="card"
        :class="{
          'me-lg-6': index === 0,
          'ms-lg-13': index === 1,
          'mx-lg-6': index === 2,
          'mt-6': index > 0,
        }"
        :key="index"
      >
        <div class="card-body p-3 shadow">
          <div class="d-flex flex-row">
            <div>
              <span
                class="icon btn btn-circle btn-lg btn-soft-grape pe-none me-4"
              >
                <span class="number">
                  <img
                    src="/assets/img/icons/lineal/list.svg"
                    class="icon-svg icon-svg-md"
                    alt="photo"
                    style="width: 30px; object-fit: contain"
                  />
                  <!-- {{ item.number }} -->
                </span>
              </span>
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
              <a target="_blank" :href="item?.linkUrl">{{ item?.linkText }}</a>
            </div>
          </div>
        </div>
      </div>
      <!--/.card -->
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h2 class="display-6 mb-3">{{ content.heading }}</h2>

      <PortableText :value="content.intro" />
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { Services } from "@/data/process";
import { PortableText } from "@portabletext/vue";

defineProps({
  content: Object,
});
</script>

<style lang="scss" scoped></style>
