<template>
  <div class="chatwindow container">
    <h2>CHAT APP</h2>

    <chat-window></chat-window>

    <div class="messageSend">
      <textarea
        name="messageSender"
        placeholder="Enter to send message"
        @keypress.enter.prevent="handleSubmit"
        v-model="message"
      ></textarea>
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import useCollections from "../composables/useCollections";
import { timestamp } from "../firebase/config";
import ChatWindow from "./ChatWindow.vue";
export default {
  components: { ChatWindow },
  setup() {
    let { user } = getUser();
    const username = user.value.displayName;
    const message = ref("");
    let { error, addDoc } = useCollections("messages");

    const handleSubmit = async () => {
      const chat = {
        sender: username,
        messageContent: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };
    return { username, handleSubmit, message, error };
  },
};
</script>

<style lang="scss">
.chatwindow {
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
    max-width: 300px;
    height: 40px;
    color: white;
    margin: 10px auto;
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

  .messageSend {
    border-top: 1px solid #ddd;
    padding-top: 0px;
    textarea {
      width: 50%;
      max-height: 200px;
      max-width: 100%;
      background: transparent;
      border: 0;
      padding: 10px 15px;
    }
  }
}
</style>
