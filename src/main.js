import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"; // screens routing
import Vuex from "vuex"; // vue state management
import VueFeather from "vue-feather"; // vue feather icons
import VueToast from "vue-toast-notification"; // for side notifications
import VueApexCharts from "vue-apexcharts"; // for graphs
import ToggleButton from "vue-js-toggle-button";

// importing vue-notification default theme
import "vue-toast-notification/dist/theme-default.css";

// for bootstrap
import "./customBootstrapTheme.scss";
import BootstrapVue from "bootstrap-vue";
import VueTheMask from "vue-the-mask";
import VueConfetti from "vue-confetti";

Vue.use(VueConfetti);
Vue.use(VueTheMask);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(VueFeather);
Vue.use(VueToast);
Vue.use(VueApexCharts);
Vue.use(ToggleButton);

Vue.component("apexchart", VueApexCharts);

//importing all screens
// import Login from './views/Login.vue'
// import AdminDashboard from "./views/AdminDashboard.vue";
// import RegistrationForm from "./views/RegistrationForm.vue";
// import LandingPage from "./views/LandingPage.vue";
// import CheckStatus from "./views/CheckStatus.vue";
import Error from "./views/Error.vue";
import Home from "./views/Home.vue";

const routes = [
  // { path: '/', name: 'Login', component: Login },
  // { path: '/AdminDashboard', name: 'AdminDashboard', component: AdminDashboard },
  // { path: '/RegistrationForm', name: 'RegistrationForm', component: RegistrationForm },
  { path: "/", name: "Home", component: Home },
  // { path: '/LandingPage', name: 'LandingPage', component: LandingPage },
  // { path: '/CheckStatus', name: 'CheckStatus', component: CheckStatus },
  // error page
  { path: "/404", name: "Error", component: Error },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  { path: "*", redirect: "404" },
];

const router = new VueRouter({ routes, mode: "history" });

Vue.config.productionTip = false; // so app is in development mode
Vue.directive("uppercase", {
  update(el) {
    el.value = el.value.toUpperCase();
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
