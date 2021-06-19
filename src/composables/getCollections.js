import { ref } from "vue";
import { pjFirestore } from "../firebase/config";

const getCollections = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = pjFirestore.collection(collection).orderBy("createdAt");

  collectionRef.onSnapshot(
    (snap) => {
      let messages = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && messages.push({ ...doc.data(), id: doc.id });
      });
      documents.value = messages;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Couldn/'t fetch messages";
    }
  );

  // watchEffect((onInvalidate) => {
  //   onInvalidate(() => unsub());
  // });

  return { error, documents };
};

export default getCollections;
