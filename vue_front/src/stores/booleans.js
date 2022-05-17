import { defineStore } from "pinia";

export const useBooleanStore = defineStore("booleans", {
  id: "booleans",
  state: () => ({
    navShown: false,
  }),
  actions: {
    navSwitch() {
      this.navShown = !this.navShown;
    },
    navClose() {
      this.navShown = false;
    },
  },
  getters: {},
});
