import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Modules from "vite-plugin-use-modules";
import VueRouter from "unplugin-vue-router/vite";

export default defineConfig({
  plugins: [
    /**
     * 文件型路由 (vue-router 官方)
     * @link https://github.com/posva/unplugin-vue-router
     */
    VueRouter(),
    Vue({
      script: {
        defineModel: true,
      },
    }),
    UnoCSS(),
    /**
     * 自动加载 vue 插件
     * @link https://github.com/dishait/vite-plugin-use-modules
     */
    Modules({
      auto: true,
      target: "src/plugins",
    }),
  ],
});
