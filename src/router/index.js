import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();

  window.scrollTo({
    top: 0,
    behavior: "instant", // You can use 'auto' or 'instant' as well
  });
});

export default router;
