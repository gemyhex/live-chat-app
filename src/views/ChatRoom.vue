<template>
  <navbar></navbar>
  <chat-messages></chat-messages>
</template>

<script>
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import ChatMessages from "../components/ChatMessages.vue";
export default {
  components: {
    Navbar,
    ChatMessages,
  },

  setup() {
    let { user } = getUser();
    let router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style></style>
