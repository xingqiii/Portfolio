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
    userLogin(usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post("/api-token/", {
            username: "sameul",
            password: "H19710967",
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  getters: {},
});
