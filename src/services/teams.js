import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { collections } from "../constants";

export async function createTeam(teamData) {
  try {
    console.log(teamData);
    const newTeamRef = await addDoc(collection(db, collections.COLLECTION_NAME), teamData);
    console.log(newTeamRef);
    return newTeamRef;
  } catch (error) {
    console.error(error);
  }
}

export async function addMemberTeam(teamUid, userData) {
  try {
    const modifiedTeam = await setDoc(
      doc(
        collection(
          db,
          `${collections.COLLECTION_NAME}`,
          `${teamUid}/${collections.MEMBERS_SUB_COLLECTION}`
        ),
        userData.uid
      ),
      {
        displayName: userData.displayName,
        email: userData.email,
        avatar: userData.photoURL,
      }
    );
    console.log(modifiedTeam);
  } catch (error) {
    console.error(error);
  }
}

export async function createBoardTeam(teamUid, boardData) {
  try {
    const newBoard = await addDoc(
      collection(
        db,
        `${collections.COLLECTION_NAME}`,
        `${teamUid}/${collections.BOARDS_SUB_COLLECTION}`
      ),
      boardData
    );
    console.log(newBoard);
  } catch (error) {
    console.error(error);
  }
}
