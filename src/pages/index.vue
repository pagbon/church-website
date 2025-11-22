<script setup>
import { ref, onMounted } from "vue";
import { homePageQuery } from "@/sanity/queries/homePageQuery";
import { client } from "@/sanity/sanityClient";

const homeContent = ref([]);

onMounted(async () => {
  const data = await client.fetch(homePageQuery);
  console.log("homePage data:", data);
  homeContent.value = data?.Sections || [];   // 👈 MUST be Sections
});

const getSection = (type) =>
  homeContent.value?.find((section) => section._type === type);
</script>

