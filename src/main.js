import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";
import Toast from "vue-toastification";
import VueChatScroll from 'vue-chat-scroll'
import "vue-toastification/dist/index.css";
import alertComp from "./components/Alert.vue";
import VuePageTransition from 'vue-page-transition';

Vue.config.productionTip = false;

const options = {
  // You can set your default options here
  timeout: 3500,
  draggable: true,
  closeOnClick: false
};

Vue.component("alert", alertComp);
Vue.use(VueChatScroll);
Vue.use(VuePageTransition);

Vue.use(Toast, options);
//Your web app's Firebase configuration
var firebaseConfig = {

};

new Vue({
  router,
  store,
  vuetify,
  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user);
      }
    });
    // this.$store.dispatch("loadedMessages").then(() => {
    //   // console.log(success);
    // }).catch(err => {
    //   console.log(err);
    // });
  },
  render: h => h(App)
}).$mount("#app");
