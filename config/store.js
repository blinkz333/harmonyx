import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const getDocument = async (id) => {
  const db = getFirestore(app);
  const docRef = doc(db, "todo", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().task;
  } else {
    // docSnap.data() will be undefined in this case
    return [];
  }
};

const InsertDocument = async (id, data) => {
  const db = getFirestore(app);
  const id_Ref = doc(db, "todo", id);
  const idSnap = await getDoc(id_Ref);

  if (idSnap.exists()) {
    // Case Update
    const clone_oldTask = [...idSnap.data().task]
    clone_oldTask.push(data)
    try {
      await setDoc(doc(db, "todo", id), { task: clone_oldTask });
    } catch (error) {
      return false
    } finally {
      return true
    }

  } else {
    // Case New
    const obj = [];
    obj.push(data);
    try {
      await setDoc(doc(db, "todo", id), { task: obj });
    } catch (error) {
      return false
    } finally {
      return true
    }
  }
};

const updateToDone = async (id , index) => {
  const db = getFirestore(app);
  const id_Ref = doc(db, "todo", id);
  const idSnap = await getDoc(id_Ref);

  const clone_oldTask = [...idSnap.data().task]
  clone_oldTask[index].priority = 0
    try {
      await setDoc(doc(db, "todo", id), { task: clone_oldTask });
    } catch (error) {
      return false
    } finally {
      return true
    }
 
}

export { getDocument, InsertDocument , updateToDone };
