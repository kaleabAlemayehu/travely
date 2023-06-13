import { createApp } from "vue";
import router from "./router";
import "../public/main.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
