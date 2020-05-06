import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null
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
          id: user.user.uid,
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
        id: payload.uid,
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
