import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Redirector from "../views/Redirector";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/:linkId",
    name: "Redirector",
    component: Redirector,
    meta: {
      public: true
    },
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
