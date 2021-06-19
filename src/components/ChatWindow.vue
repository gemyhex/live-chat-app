<template>
  <div class="messagesWrap">
    <div class="error" v-if="error"></div>
    <div class="chats" v-if="documents" ref="messages">
      <div class="single" v-for="doc in foramttedDocs" :key="doc.id">
        <span class="date">{{ doc.createdAt }} ago</span>
        <span class="sender">{{ doc.sender }} : </span>
        <span class="message">{{ doc.messageContent }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollections from "../composables/getCollections";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";
export default {
  setup() {
    let { error, documents } = getCollections("messages");
    const foramttedDocs = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, foramttedDocs, messages };
  },
};
</script>

<style lang="scss">
.chats {
  height: 700px;
  overflow-y: scroll;
  .single {
    padding: 8px 0;
    border-bottom: 1px dashed #ddd;
    .date {
      font-size: 0.8rem;
      font-weight: 700;
      display: block;
    }
    .sender {
      color: deepskyblue;
      width: fit-content;
      margin-right: 5px;
    }
    .message {
      font-weight: 600;
    }
  }
}
</style>
