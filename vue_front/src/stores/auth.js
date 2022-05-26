import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  id: "auth",
  state: () => ({
    accessToken: null,
    refreshToken: null,
    APIData: "",
  }),
  actions: {},
  getters: {},
});
