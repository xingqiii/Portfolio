<template>
  <div class="outer-login">
    <div class="form">
      <h1>Sign Up</h1>
      <form class="login-form">
        <input type="email" placeholder="E-Mail" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="repeat password" />
        <button>login</button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

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
