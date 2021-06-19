import { ref } from "@vue/reactivity";
import { pjFirestore } from "../firebase/config";

const useCollections = (collection) => {
  const error = ref(null);
  const addDoc = async (doc) => {
    try {
      await pjFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Couldn/'t send the message";
    }
  };

  return { error, addDoc };
};

export default useCollections;
