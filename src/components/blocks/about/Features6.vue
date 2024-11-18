<template>
  <section id="snippet-13" class="wrapper">
    <div class="container py-10 py-md-15">
      <div
        class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12"
      >
        <div class="col-lg-6">
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded">
                <img
                  src="/assets/img/photos/g12.jpg"
                  srcset="/assets/img/photos/g12@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6 align-self-end">
              <figure class="rounded">
                <img
                  src="/assets/img/photos/g13.jpg"
                  srcset="/assets/img/photos/g13@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-12">
              <figure class="rounded mx-md-5">
                <img
                  src="/assets/img/photos/g11.jpg"
                  srcset="/assets/img/photos/g11@2x.jpg 2x"
                  alt="image"
                />
              </figure>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2
            class="fs-25 text-line text-gradient gradient-5 text-purple text-center"
          >
            Who Are We?
          </h2>
          <p class="mb-4 leading">
            We are a community of believers established by divine mandate, a
            place of perfection in God’s purpose. Since our first service on
            January 11, 2015, we have experienced continual growth, moving from
            grace to grace. Our name, City of David Parish, reflects God’s
            vision for the city of Calgary and its people in His grand plan.
          </p>

          <p class="my-4 leading">
            We believe the Word of God is infallible, everlasting, and the
            ultimate authority for the believer. Inspired by 2 Timothy 3:16-17,
            we hold that Scripture equips us fully, leaving nothing lacking.
            Guided by the biblical significance of the City of David, we look to
            God’s Word to reveal His plan for His people and this city.
          </p>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-7 mb-md-9">
        <div v-for="(item, index) in features4" :key="index" class="col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <div :class="item.iconClass">
                <span class="number fs-18">{{ index + 1 }}</span>
              </div>
            </div>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="mb-2">{{ item.description }}</p>
              <router-link
                v-if="item.link"
                class="fs-14 btn btn-sm btn-outline-purple rounded-pill"
                :to="item.link"
                >Read more</router-link
              >
            </div>
          </div>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
  </section>
</template>

<script setup>
import { features4 } from "@/data/features";
</script>

<style lang="scss" scoped></style>
