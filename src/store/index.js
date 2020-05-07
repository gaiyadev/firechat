import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    messages: {
      id: null,
      name: null,
      message: null,
      timestamp: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    isLoading(state, payload) {
      state.loading = payload
    },
    isError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setMessage(state, payload) {
      state.messages = payload;
    }
  },
  actions: {
    signUpUsers({ commit }, payload) {
      commit("isLoading", true);
      commit("clearError");
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        commit("isLoading", false);
        const newUser = {
          id: user.user.uid
        };
        commit("setUser", newUser);
      }).catch(error => {
        commit("isLoading", false);
        commit("isError", error);
        console.log(error);
      });
    },
    signInUser({ commit }, payload) {
      commit("isLoading", true);
      commit("clearError");
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
        commit("isLoading", false);
        const newUser = {
          id: user.user.uid
        };
        commit("setUser", newUser);
      }).catch(error => {
        commit("isLoading", false);
        commit("isError", error);
        console.log(error);
      });
    },
    autoLoginUser({ commit }, payload) {
      commit("setUser", {
        id: payload.uid
      });
    },
    logoutUser({ commit }) {
      firebase.auth().signOut().then(() => {
        commit("setUser", null);
      }).catch(error => console.log(error));
    },
    clearError({ commit }) {
      commit("clearError");
    },
    startChat({ commit }, payload) {
      commit("isLoading", true);
      firebase.firestore().collection("messages").add({
        name: payload.name,
        message: payload.message,
        timestamp: new Date().toISOString().substr(0, 1000)
      }).then(data => {
        commit("isLoading", false);
        const newMessage = {
          id: data.id,
          name: data.name,
          message: data.message,
          timestamp: data.timestamp
        };
        commit("setMessage", newMessage);
        console.log(data);
      }).catch(error => {
        commit("isLoading", false);
        console.log(error);
      });
    }
  },

  modules: {},
  getters: {
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    }
  }
});
