<template>
  <div id="app">
    <div class="row">
      <my-button>登录</my-button>
      <my-button type="primary">primary按钮</my-button>
      <my-input v-model="username"></my-input>
    </div>
  </div>
</template>

<script>
import MyButton from "./components/button.vue";
import MyDialog from "./components/dialog.vue";
import MyInput from "./components/input.vue"

export default {
  name: "App",
  components: {
    MyButton,
    MyDialog,
    MyInput
  },
  data() {
    return {
      visible:true,
      username:"nihao"
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
