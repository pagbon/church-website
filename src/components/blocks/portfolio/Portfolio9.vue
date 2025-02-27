<template>
  <section id="snippet-9" class="wrapper bg-light wrapper-border">
    <div class="container text-center">
      <!-- /.row -->
      <div class="grid grid-view projects-masonry mt-7">
        <div class="isotope-filter filter mb-10" data-aos="fade-up">
          <ul>
            <li
              v-for="filter in filters"
              @click="() => updateCategory(filter.value)"
              :key="filter.id"
            >
              <a
                :class="`filter-item ${
                  currentCategory == filter.value ? 'active' : ''
                }`"
                >{{ filter.label }}</a
              >
            </li>
          </ul>
        </div>
        <div
          class="row gx-md-6 gy-6 isotope"
          ref="isotopeContainer"
          data-aos="fade-up"
        >
          <div
            v-for="(project, i) in filteredItems"
            :key="project.id"
            :class="[
              'project',
              'item',
              `col-md-6`,
              `col-xl-4`,
              ...project.categories,
            ]"
          >
            <figure class="overlay overlay-1 rounded">
              <div
                class="cursor-pointer"
                @click="() => setActiveLightBox(true, i)"
              >
                <img style="object-fit: contain;" :src="project.image.src" alt="photo" />
                <span class="bg"></span>
              </div>
              <figcaption>
                <h5 class="from-top mb-0">{{ project.title }}</h5>
              </figcaption>
            </figure>
          </div>
          <!-- /.project -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /.container -->
    <div class="container pb-15 pb-md-17">
      <div class="card">
        <!-- <div class="card-footer border-0 position-relative">
          <a
            class="collapse-link collapsed stretched-link"
            data-bs-toggle="collapse"
            href="#collapse-snippet-173"
            >View example's code</a
          >
        </div> -->
        <!--/.card-footer -->
        <div
          id="collapse-snippet-173"
          class="card-footer bg-dark p-0 accordion-collapse collapse"
        >
          <div class="code-wrapper">
            <div class="code-wrapper-inner">
              <pre class="language-html"><code>&lt;template&gt;
  &lt;section id&#x3D;&quot;snippet-9&quot; class&#x3D;&quot;wrapper bg-light wrapper-border&quot;&gt;
    &lt;div class&#x3D;&quot;container pt-15 pt-md-17 pb-13 pb-md-15 text-center&quot;&gt;
      &lt;div class&#x3D;&quot;row&quot;&gt;
        &lt;div class&#x3D;&quot;col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8&quot;&gt;
          &lt;h2 class&#x3D;&quot;display-5 mb-3&quot;&gt;My Selected Shots&lt;&#x2F;h2&gt;
          &lt;p class&#x3D;&quot;lead fs-lg&quot;&gt;
            Photography is my passion and I love to turn ideas into beautiful
            things.
          &lt;&#x2F;p&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;column --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.row --&gt;
      &lt;div class&#x3D;&quot;grid grid-view projects-masonry&quot;&gt;
        &lt;div class&#x3D;&quot;isotope-filter filter mb-10&quot;&gt;
          &lt;ul&gt;
            &lt;li
              v-for&#x3D;&quot;filter in filters&quot;
              @click&#x3D;&quot;() &#x3D;&gt; updateCategory(filter.value)&quot;
              :key&#x3D;&quot;filter.id&quot;
            &gt;
              &lt;a
                :class&#x3D;&quot;&#x60;filter-item ${
                  currentCategory &#x3D;&#x3D; filter.value ? &#39;active&#39; : &#39;&#39;
                }&#x60;&quot;
                &gt;&lbrace;&lbrace; filter.label &rbrace;&rbrace;&lt;&#x2F;a
              &gt;
            &lt;&#x2F;li&gt;
          &lt;&#x2F;ul&gt;
        &lt;&#x2F;div&gt;
        &lt;div class&#x3D;&quot;row gx-md-6 gy-6 isotope&quot; ref&#x3D;&quot;isotopeContainer&quot;&gt;
          &lt;div
            v-for&#x3D;&quot;(project, i) in filteredItems&quot;
            :key&#x3D;&quot;project.id&quot;
            :class&#x3D;&quot;[
              &#39;project&#39;,
              &#39;item&#39;,
              &#x60;col-md-6&#x60;,
              &#x60;col-xl-4&#x60;,
              ...project.categories,
            ]&quot;
          &gt;
            &lt;figure class&#x3D;&quot;overlay overlay-1 rounded&quot;&gt;
              &lt;div
                class&#x3D;&quot;cursor-pointer&quot;
                @click&#x3D;&quot;() &#x3D;&gt; setActiveLightBox(true, i)&quot;
              &gt;
                &lt;img :src&#x3D;&quot;project.image.src&quot; alt&#x3D;&quot;&quot; &#x2F;&gt;
                &lt;span class&#x3D;&quot;bg&quot;&gt;&lt;&#x2F;span&gt;
              &lt;&#x2F;div&gt;
              &lt;figcaption&gt;
                &lt;h5 class&#x3D;&quot;from-top mb-0&quot;&gt;&lbrace;&lbrace; project.title &rbrace;&rbrace;&lt;&#x2F;h5&gt;
              &lt;&#x2F;figcaption&gt;
            &lt;&#x2F;figure&gt;
          &lt;&#x2F;div&gt;
          &lt;!-- &#x2F;.project --&gt;
        &lt;&#x2F;div&gt;
        &lt;!-- &#x2F;.row --&gt;
      &lt;&#x2F;div&gt;
      &lt;!-- &#x2F;.grid --&gt;
    &lt;&#x2F;div&gt;
    &lt;!-- &#x2F;.container --&gt;
   
    &lt;!-- &#x2F;.container --&gt;
  &lt;&#x2F;section&gt;
  &lt;Lightbox
    :images&#x3D;&quot;images&quot;
    :activeLightBox&#x3D;&quot;activeLightBox&quot;
    :firstSlideIndex&#x3D;&quot;currentSlideIndex&quot;
    @setActiveLightBox&#x3D;&quot;setActiveLightBox&quot;
  &#x2F;&gt;
  &lt;!-- Component for lightbox image slider  from omponents&gt;common&gt;Lightbox --&gt;
&lt;&#x2F;template&gt;

&lt;script setup&gt;
import imagesLoaded from 'imagesloaded';
import { projects7 } from &quot;~&#x2F;data&#x2F;projects&quot;;
const activeLightBox &#x3D; ref(false);
const currentSlideIndex &#x3D; ref(1);
const images &#x3D; ref([]);
onMounted(() &#x3D;&gt; {
  images.value &#x3D; projects7.map((elm) &#x3D;&gt; elm.fullImage);
});

const setActiveLightBox &#x3D; (val, i) &#x3D;&gt; {
  currentSlideIndex.value &#x3D; i;
  activeLightBox.value &#x3D; val;
};
import Lightbox from &quot;~&#x2F;components&#x2F;common&#x2F;Lightbox.vue&quot;;
const isotope &#x3D; ref();
const initIsotop &#x3D; async () &#x3D;&gt; {
  const Isotope &#x3D; (await import(&quot;isotope-layout&quot;)).default;
  &#x2F;&#x2F; Initialize Isotope in the mounted hook
  isotope.value &#x3D; new Isotope(isotopeContainer.value, {
    itemSelector: &quot;.item&quot;,
    layoutMode: &quot;masonry&quot;, &#x2F;&#x2F; or &#39;fitRows&#39;, depending on your layout needs
  });
  imagesLoaded(isotopeContainer.value).on(
    "progress",
    function (instance, image) {
      // Trigger Isotope layout
      isotope.value.layout();
    }
  );
};
const filters &#x3D; [
  { id: 1, label: &quot;All&quot;, value: &quot;*&quot; },
  { id: 2, label: &quot;Worship&quot;, value: &quot;worship&quot; },
  { id: 3, label: &quot;After Service&quot;, value: &quot;AfterService&quot; },
  { id: 4, label: &quot;During Sermon&quot;, value: &quot;sermon&quot; },
];
const currentCategory &#x3D; ref(&quot;*&quot;);
const filteredItems &#x3D; ref(projects7);
const updateCategory &#x3D; (val) &#x3D;&gt; {
  if (val &#x3D;&#x3D; &quot;*&quot;) {
    currentCategory.value &#x3D; &quot;*&quot;;
    &#x2F;&#x2F; filteredItems.value &#x3D; projects7;
  } else {
    currentCategory.value &#x3D; val;
    &#x2F;&#x2F; filteredItems.value &#x3D; [
    &#x2F;&#x2F;   ...projects7.filter((elm) &#x3D;&gt; elm.categories.includes(val)),
    &#x2F;&#x2F; ];
  }

  isotope.value.arrange({
    filter: currentCategory.value &#x3D;&#x3D; &quot;*&quot; ? &quot;*&quot; : &#x60;.${currentCategory.value}&#x60;,
  });
  &#x2F;&#x2F;   isotope.value.layout();
};

const isotopeContainer &#x3D; ref();


onMounted(() &#x3D;&gt; {
  initIsotop();

});
&lt;&#x2F;script&gt;

&lt;style lang&#x3D;&quot;scss&quot; scoped&gt;&lt;&#x2F;style&gt;</code></pre>
            </div>
            <!--/.code-wrapper-inner -->
          </div>
          <!--/.code-wrapper -->
        </div>
        <!--/.card-footer -->
      </div>
      <!--/.card -->
    </div>
    <!-- /.container -->
  </section>
  <Lightbox
    :images="images"
    :activeLightBox="activeLightBox"
    :firstSlideIndex="currentSlideIndex"
    @setActiveLightBox="setActiveLightBox"
  />
  <!-- Component for lightbox image slider  from omponents>common>Lightbox -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import imagesLoaded from "imagesloaded";
import { projects7 } from "@/data/projects";
const activeLightBox = ref(false);
const currentSlideIndex = ref();
const images = ref([]);

onMounted(() => {
  images.value = projects7.map((elm) => elm.fullImage);
});

const setActiveLightBox = (val, i) => {
  currentSlideIndex.value = i;
  activeLightBox.value = val;
};
import Lightbox from "@/components/common/Lightbox.vue";

const isotope = ref();
const initIsotop = async () => {
  const Isotope = (await import("isotope-layout")).default;
  // Initialize Isotope in the mounted hook
  isotope.value = new Isotope(isotopeContainer.value, {
    itemSelector: ".item",
    layoutMode: "masonry", // or 'fitRows', depending on your layout needs
  });
  imagesLoaded(isotopeContainer.value).on(
    "progress",
    function (instance, image) {
      // Trigger Isotope layout
      isotope.value.layout();
    }
  );
};
const filters = [
  { id: 1, label: "All", value: "*" },
  { id: 2, label: "Worship Moment", value: "worship" },
  { id: 3, label: "Sermon Moment", value: "Sermon" },
  { id: 4, label: "Prayer MOment", value: "Prayer" },
  /*   { id: 5, label: "After Service", value: "AfterService" },
   */
];
const currentCategory = ref("*");
const filteredItems = ref(projects7);
const updateCategory = (val) => {
  if (val == "*") {
    currentCategory.value = "*";
    // filteredItems.value = projects7;
  } else {
    currentCategory.value = val;
    // filteredItems.value = [
    //   ...projects7.filter((elm) => elm.categories.includes(val)),
    // ];
  }

  isotope.value.arrange({
    filter: currentCategory.value == "*" ? "*" : `.${currentCategory.value}`,
  });
  //   isotope.value.layout();
};

const isotopeContainer = ref();

onMounted(() => {
  initIsotop();
});
</script>

<style lang="scss" scoped></style>
