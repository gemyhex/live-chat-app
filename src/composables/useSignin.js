import { ref } from "vue";
import { pjAuth } from "../firebase/config";

const error = ref(null);

const signin = async (email, password) => {
  error.value = null;
  try {
    const res = await pjAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.value);
    error.value = "Invalid login credentials";
  }
};

const useSignin = () => {
  return { error, signin };
};

export default useSignin;
