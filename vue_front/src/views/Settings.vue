<template>
  <div class="settings-outer">
    <div class="settings-left">
      <!-- If Logged Out -->
      <button @click="signInClicked = !signInClicked">SignIn</button>
      <button @click="signUpClicked = !signUpClicked">SignUp</button>
      <!-- If Logged In -->
      <!-- <button>SignOut</button>
      <button>Delete Account</button> -->
    </div>
    <TheSeparatorVue class="separator" />
    <div v-if="signInClicked" class="settings-SignIn"><SignInVue /></div>
    <div v-if="signUpClicked" class="settings-SignIn"><SignUpVue /></div>
    <!-- <div class="settings-SignOut">Hello</div>
    <div class="settings-Delete_Account">Hello</div> -->
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import SignInVue from "@/components/Authentication/SignIn.vue";
import SignUpVue from "../components/Authentication/SignUp.vue";
import TheSeparatorVue from "../components/TheSeparator.vue";

const signInClicked = ref(false);
const signUpClicked = ref(false);
</script>

<style lang="scss" scoped>
.settings-outer {
  z-index: 12;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding-left: 10%;
  padding-top: 8%;
  display: flex;
  justify-content: left;
}

.settings-left {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  button {
    margin-top: 5px;
  }
}

.separator {
  --width: 1px;
  --height: calc(100vh - 20%);
  --back-color: var(--heading-color);
  transition: 1s ease-in-out background-color;
  margin: 0px 10px;
}

.settings-SignIn {
  width: 88%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
