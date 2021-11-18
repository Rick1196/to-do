import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const usersRef = collection(db, "users");

export async function registerUserData(user) {
  try {
    console.log(user);
    const userData = await getUserData(user);
    if (userData) {
      console.log("User already registered");
    } else {
      await setDoc(doc(usersRef, user.uid), {
        displayName: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getUserData(user) {
  try {
    console.log(user);
    const docRef = doc(db, "users", user.uid);
    const userSnap = await (await getDoc(docRef)).data();
    console.log(userSnap);
    return userSnap;
  } catch (error) {
    console.error(error);
  }
}
