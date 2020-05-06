import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";


Vue.config.productionTip = false;

//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpAqtZAAE8BwQ2LDB8gnrVDI7_5ETdagk",
  authDomain: "firechat-a959e.firebaseapp.com",
  databaseURL: "https://firechat-a959e.firebaseio.com",
  projectId: "firechat-a959e",
  storageBucket: "firechat-a959e.appspot.com",
  messagingSenderId: "711327154657",
  appId: "1:711327154657:web:8758a26c72dbc02e9652a0"
};


new Vue({
  router,
  store,
  vuetify,
  created() {
    firebase.initializeApp(firebaseConfig);
  },
  render: h => h(App)
}).$mount("#app");
