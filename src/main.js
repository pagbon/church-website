import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { globalRegisTrationComponents } from "./components";
const app = createApp(App);

app.use(router);
globalRegisTrationComponents(app);

app.mount("#app");
