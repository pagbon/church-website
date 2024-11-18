<template>
  <section class="wrapper bg-light mt-12">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
        <div
          class="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative"
        >
          <div
            class="shape bg-dot primary rellax w-17 h-21"
            data-rellax-speed="1"
            style="top: -2rem; left: -1.4rem"
          ></div>
          <figure class="rounded">
            <img
              src="/assets/img/photos/about4.jpg"
              srcset="/assets/img/photos/about4@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <img
            src="/assets/img/icons/lineal/telemarketer.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-8">
            Convinced yet? Let's make something great together.
          </h2>
          <div
            v-for="item in contactInfo"
            :key="item.id"
            class="d-flex flex-row"
          >
            <div>
              <div class="icon text-primary fs-28 me-6 mt-n1">
                <i :class="item.iconClass"></i>
              </div>
            </div>
            <div>
              <h5 class="mb-1">{{ item.title }}</h5>

              <address v-if="item.address">
                {{ item.address.line1 }}<br class="d-none d-md-block" />{{
                  item.address.line2
                }}
              </address>

              <p v-if="item.content">{{ item.content }}</p>
              <a v-if="item.mail" :href="item.mail" class="link-body">{{
                item.mail
              }}</a>
            </div>
          </div>
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
import { contactInfo } from "@/data/contact";
</script>

<style lang="scss" scoped></style>
