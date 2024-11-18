<template>
  <section id="snippet-1" class="wrapper bg-light">
    <div class="container">
      <div class="row gx-lg-0 gy-10 align-items-center">
        <div class="col-lg-6 order-lg-2 offset-lg-1 grid">
          <div
            class="row gx-md-5 gy-3 align-items-center counter-wrapper isotope"
          >
            <div
              class="item col-md-6"
              v-for="(item, index) in facts1"
              :key="index"
            >
              <div class="card shadow-lg">
                <div class="card-body">
                  <div class="d-flex d-lg-block d-xl-flex flex-row">
                    <div>
                      <div
                        :class="[
                          'icon',
                          'btn',
                          'btn-circle',
                          'btn-lg',
                          item.iconClass,
                          'pe-none',
                          'mx-auto',
                          'me-4',
                          'mb-lg-3',
                          'mb-xl-0',
                        ]"
                      >
                        <i :class="item.icon"></i>
                      </div>
                    </div>
                    <div>
                      <h3 class="counter mb-1">
                        <CommonCounter
                          parentClass=""
                          :min="0"
                          :max="item.counter"
                          :time="1500"
                        />
                        <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                      </h3>
                      <p class="mb-0">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="display-4 mb-3">Join Our Community</h2>
          <p class="lead fs-lg">
            We have considered our business solutions to support you on every
            stage of your growth.
          </p>
          <p class="mb-0">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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
import { facts1 } from "@/data/facts";
</script>

<style lang="scss" scoped></style>
