<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="Type Username (Dispaly Name)"
        required
        v-model="username"
      />
      <input
        type="password"
        placeholder="Type Password"
        required
        v-model="password"
      />
      <input type="email" placeholder="Type Email" required v-model="email" />
      <button>Sign Up</button>
      <div class="error" v-if="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();
    const username = ref("");
    const password = ref("");
    const email = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, username.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { username, password, email, handleSubmit, error };
  },
};
</script>

<style lang="scss" scoped>
.signup {
  text-align: center;

  .error {
    width: 60%;
    border: 2px dashed red;
    padding: 10px 40px;
    margin: 15px auto;
    font-weight: bold;
    border-radius: 10px;
    background: #eee;
  }
  h2 {
    text-transform: uppercase;
    position: relative;
    max-width: 250px;
    height: 40px;
    color: white;
    margin: 0 auto;
    &:before {
      content: "";
      position: absolute;
      left: -30px;
      width: 100%;
      height: 100%;
      background: deepskyblue;
      z-index: -1;
      transform: rotateZ(-2deg);
    }
  }

  form {
    width: 600px;
    margin: 20px auto;
    padding: 20px 0;
    border: 1px dashed #ddd;
    input {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 15px auto;
      width: 60%;
      padding: 10px 15px;
      border: 2px solid transparent;
      background: #eee;
      &::placeholder {
        color: dodgerblue;
      }
      &:focus {
        border-bottom: 2px solid dodgerblue;
      }
    }

    button {
      max-width: 150px;
      height: 50px;
      color: white;
      background: dodgerblue;
      border: 0;
      padding: 8px 30px;
      font-size: 1rem;
    }
  }
}
</style>
