<template>
  <div class="error" v-if="error">
    {{ error }}
  </div>
  <div class="nav container">
    <div class="logo">
      <h3>Chat Room</h3>
    </div>
    <div class="dropdown" v-if="user">
      <a
        class="btn dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ user.displayName }}
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <p class="dropdown-item" aria-disabled="true">{{ user.email }}</p>
        </li>
        <li>
          <a class="dropdown-item logout" @click="handleLogout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
        router.push("/");
      }
    };

    return { handleLogout, error, user };
  },
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;

  .dropdown {
    .dropdown-menu {
      text-align: center;
      .logout {
        width: 60%;
        background: dodgerblue;
        padding: 8px 15px;
        color: white;
        margin: 5px auto;
        cursor: pointer;
      }
    }
  }
}
</style>
