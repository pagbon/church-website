<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      title="Our Beliefs"
      description="Our beliefs align with the Redeemed Christian Church of God (RCCG) mandate. The Redeemed Christian Church of God is a Pentecostal megachurch and denomination in Lagos, Nigeria. Enoch Adeboye has been the General Overseer since 1981. "
    />
  </div>

  <section id="snippet-2" class="wrapper wrapper-border">
    <div class="container py-15">
      <!-- /.row -->
      <div class="row gx-md-8 gy-8">
        <div
          v-for="feature in features5"
          :key="feature.id"
          class="col-md-6 col-lg-6"
        >
          <div :class="feature.iconClass">
            <i :class="feature.icon"></i>
          </div>
          <h4 class="text-purple fs-25 fw-bolder text-capitalize">
            {{ feature.title }}
          </h4>
          <p class="my-0 fs-15">{{ feature.description }}</p>
          <p v-if="feature.description2" class="mt-1 mb-0 fs-15">
            1. {{ feature.description2 }}
          </p>
          <p v-if="feature.description3" class="my-0 fs-15">
            2. {{ feature.description3 }}
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
  <FootersFooter25 />
</template>

<script setup>
import { features5 } from "@/data/features";
</script>

<style lang="scss" scoped></style>
