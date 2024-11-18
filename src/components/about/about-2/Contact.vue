<template>
  <section class="wrapper bg-light">
    <div class="container py-10 py-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7">
          <figure>
            <img
              class="w-auto"
              src="/assets/img/illustrations/i5.jpg"
              srcset="/assets/img/illustrations/i5@2x.jpg 2x"
              alt="photo"
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2
            class="fs-25 text-line text-gradient gradient-5 text-purple text-center"
          >
            Get In Touch
          </h2>
          <h3 class="display-5 mb-7">
            Got any questions? Don't hesitate to get in touch.
          </h3>
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
              <a v-if="item.mail" :href="`mailto:${item.mail}`" class="link-body">{{
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
