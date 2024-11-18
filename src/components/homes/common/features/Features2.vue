<template>
  <section class="wrapper bg-light">
    <div class="container pt-14 pt-md-23 pb-14 pb-md-17">
      <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
        <div class="col-lg-6 position-relative">
          <div
            class="shape bg-dot primary rellax w-17 h-18"
            data-rellax-speed="1"
            style="bottom: -2rem; left: -0.7rem"
          ></div>
          <figure class="rounded mb-0">
            <img
              src="/assets/img/photos/se3.jpg"
              srcset="/assets/img/photos/se3@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h3 class="display-4 mb-4">Package Design</h3>
          <p class="mb-5">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas sed
            diam eget risus varius.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 2)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(2, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <a href="#" class="btn btn-soft-leaf rounded-pill mt-6 mb-0"
            >More Details</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 order-lg-2 position-relative">
          <div
            class="shape rounded-circle bg-soft-primary rellax w-18 h-18"
            data-rellax-speed="1"
            style="bottom: -2.5rem; right: -1.5rem"
          ></div>
          <figure class="rounded mb-0">
            <img
              src="/assets/img/photos/se4.jpg"
              srcset="/assets/img/photos/se4@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h3 class="display-4 mb-4">Corporate Design</h3>
          <p class="mb-5">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(0, 2)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
            <div class="col-xl-6">
              <ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
                <li
                  v-for="(item, index) in checklistItems.slice(2, 4)"
                  :key="index"
                  :class="{ 'mt-3': index > 0 }"
                >
                  <span><i class="uil uil-check"></i></span>
                  <span>{{ item.text }}</span>
                </li>
              </ul>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <a href="#" class="btn btn-soft-leaf rounded-pill mt-6 mb-0"
            >More Details</a
          >
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { checklistItems } from "@/data/features";
</script>

<style lang="scss" scoped></style>
