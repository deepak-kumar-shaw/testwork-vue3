/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import { createPinia } from "pinia";

import { createRouter, createMemoryHistory } from "vue-router";
import Login from "../components/Login.vue";
import Appointments from "../components/Appointments.vue";
import MyAppointments from "../components/MyAppointments.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/appointments", component: Appointments },
  { path: "/myappointments", component: MyAppointments },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export function registerPlugins(app) {
  app.use(createPinia());
  app.use(router);
  app.use(vuetify);
}
