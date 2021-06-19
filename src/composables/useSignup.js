import { ref } from "vue";
import { pjAuth } from "../firebase/config";

const error = ref(null);
const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await pjAuth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("you couldn't signup try again");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    console.log(res.user);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
