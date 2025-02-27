<template>
  <!-- /.row -->
  <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    <div class="col-lg-6 order-lg-2">
      <div
        v-for="(item, index) in Services"
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
                    style="width: 30px;object-fit: contain;"
                  />
                  <!-- {{ item.number }} -->
                </span>
              </span>
            </div>
            <div>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
              <a target="_blank" :href="item.link">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
      <!--/.card -->
    </div>
    <!--/column -->
    <div class="col-lg-6">
      <h2 class="display-6 mb-3">Experience God in his fullness.</h2>

      <p class="lead fs-lg pe-lg-5">
        Join us for a transformative worship experience. Our services are
        designed to encourage spiritual growth, deepen your relationship with
        Christ, and empower you to live out your faith daily.
      </p>
      <p>
        Whether you're new to faith or seeking deeper spiritual growth, there's
        a place for you here.
      </p>
      <em>
        "For where two or three are gathered together in my name, I am there in
        the midst of them." - Matthew 18:20 (NKJV)
      </em>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { Services } from "@/data/process";
</script>

<style lang="scss" scoped></style>
