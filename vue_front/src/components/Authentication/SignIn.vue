<template>
  <div class="outer-login">
    <div class="form">
      <h1>Sign In</h1>
      <form v-on:submit.prevent="login" class="login-form">
        <input
          type="text"
          name="username"
          id="user"
          v-model="Auth.username"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          id="pass"
          v-model="Auth.password"
          placeholder="password"
        />
        <button>login</button>
        <!-- <p v-if="incorrectAuth">Incorrect Username or Password</p> -->
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "@/stores/auth";
import { ref } from "@vue/reactivity";

const Auth = useAuth();
Auth.username = ref("");
Auth.password = ref("");

function login() {
  console.log(Auth.username);
  console.log(Auth.password);
  Auth.userLogin();
}
</script>

<style lang="scss" scoped>
.outer-login {
  padding: 0 0 10% 0;
}
.form {
  height: 350px;
  width: 400px;
  position: relative;
  z-index: 1;
  padding: 0 0 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    transition: 1s ease-in-out color;
    color: var(--heading-color);
    padding-left: 2%;
  }
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  transition: 1s ease-in-out background-color;
  background-color: var(--secondary-color);
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  border: 0;
  padding: 15px;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
</style>
