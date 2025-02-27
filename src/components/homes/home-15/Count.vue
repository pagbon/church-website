<template>
  <section class="wrapper bg-soft-primary angled lower-start">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="row align-items-center counter-wrapper gy-6 text-center">
            <div v-for="(elm, i) in facts2" :key="i" class="col-md-3">
              <img style="object-fit: contain;"
                :src="elm.iconSrc"
                class="icon-svg icon-svg-lg text-primary mb-3"
                alt="photo"
              />
              <h3 class="counter">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="elm.counter"
                  :time="1500"
                />
                <!-- Component for counting number with intersetion observer from omponents>common>counter -->
              </h3>
              <p>{{ elm.description }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { facts2 } from "@/data/facts";
</script>

<style lang="scss" scoped></style>
