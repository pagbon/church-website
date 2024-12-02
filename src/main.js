import { createApp } from "vue";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.vue";
import router from "./router";
import { globalRegisTrationComponents } from "./components";
const app = createApp(App);

app.use(router).use(AOS);
globalRegisTrationComponents(app);

app.mount("#app");
