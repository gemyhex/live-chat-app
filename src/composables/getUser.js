import { ref } from "vue";
import { pjAuth } from "../firebase/config";

const user = ref(pjAuth.currentUser);

pjAuth.onAuthStateChanged((_user) => {
  console.log(_user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};
export default getUser;
