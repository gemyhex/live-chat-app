import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChatRoom from "../views/ChatRoom.vue";
import { pjAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = pjAuth.currentUser;
  console.log("current user : ", user);
  if (!user) {
    next({ name: "Home" });
  } else {
    next();
  }
};

const requireNoAuth = (to , from , next) => {
  let user = pjAuth.currentUser
  if(user){
    next({ name: 'ChatRoom' })
  }
  else{
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireNoAuth
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
