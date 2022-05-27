import { getAPI } from "@/axios-api";
import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  id: "auth",
  state: () => ({
    username: "",
    password: "",

    accessToken: null,
    refreshToken: null,
    APIData: "",
  }),
  mutations: {
    updateStorage(state, { access, refresh }) {
      this.accessToken = access;
      this.refreshToken = refresh;
    },
  },
  actions: {
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post("/api-token/", {
            username: usercredentials.username,
            password: usercredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              access: response.data.access,
              refresh: response.data.refresh,
            });
            resolve();
          })
          .catch((err) => {
            reject("sdfserf");
          });
      });
    },
  },
  getters: {},
});
