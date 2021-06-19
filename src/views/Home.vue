<template>
  <div class="home">
    <div class="login" v-if="show">
      <login @login="enterChat"></login>
      <p>
        Don't have an account? <button @click="show = false">Sign Up</button>
      </p>
    </div>
    <div class="signup" v-else>
      <sign-up @login="enterChat"></sign-up>
      <p>Do you have an account? <button @click="show = true">Login</button></p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
// @ is an alias to /src
import { useRouter } from "vue-router";
export default {
  name: "Home",
  components: {
    SignUp,
    Login,
  },
  setup() {
    const show = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "ChatRoom" });
    };
    return { show, enterChat };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px 0;
  text-align: center;
  p {
    button {
      background: transparent;
      border: none;
      font-weight: bold;
      &:hover {
        color: dodgerblue;
      }
    }
  }
}
</style>
