<template>
  <div class="content-wrapper">
    <HeadersHeader1 />
    <PageHeader
      title="Ministries"
      description="Welcome to RCCG City of David, Calgary"
    />
  </div>

  <section id="snippet-3" class="wrapper bg-light wrapper-border">
    <div class="container py-15 text-center">
      <!-- /.row -->
      <div class="position-relative">
        <div
          class="shape rounded-circle bg-soft-blue rellax w-16 h-16"
          data-rellax-speed="1"
          style="bottom: -0.5rem; right: -2.2rem; z-index: 0"
        ></div>
        <div
          class="shape bg-dot purple rellax w-16 h-17"
          data-rellax-speed="1"
          style="top: -0.5rem; left: -2.5rem; z-index: 0"
        ></div>
        <div class="row gx-md-5 gy-5">
          <div
            v-for="service in services"
            :key="service.id"
            class="col-md-6 col-xl-6 d-flex align-items-stretch"
          >
            <div class="card shadow-lg">
              <div class="card-body">
                <img
                  :src="service.iconSrc"
                  class="icon-svg icon-svg-md"
                  :class="service.iconColorClass"
                  alt=""
                />
                <h4 class="text-purple fw-bolder fs-22">{{ service.title }}</h4>
                <p class="mb-2 fs-13">{{ service.description }}</p>
                <p v-if="service.description2" class="mb-2 fs-13 fw-bolder text-black">
                  {{ service.description2 }}
                </p>
                <p v-if="service.description3" class="mb-2 fs-13 fw-bolder text-black">
                  {{ service.description3 }}
                </p>
                <p v-if="service.description4" class="mb-2 fs-13 fw-bolder text-black">
                  {{ service.description4 }}
                </p>
                <p class="mb-2 fs-13">{{ service.description5 }}</p>
                <!-- Skipping link property -->
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
  <FootersFooter25 />
</template>

<script setup>
import { services } from "@/data/features";
</script>

<style lang="scss" scoped></style>
