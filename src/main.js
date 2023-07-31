import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

const app = createApp(App);

app.mount("#app");
