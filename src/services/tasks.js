import { collection, updateDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { collections } from "../constants";

export async function updateTask(taskData, teamUid, boardUid) {
    try {
        await updateDoc(
            doc(
                collection(
                    db,
                    `${collections.COLLECTION_NAME}`,
                    `${teamUid}/${collections.BOARDS_SUB_COLLECTION}/${boardUid}/${collections.TASKS_SUB_COLLECTION}`
                ),
                taskData.uid
            ),
            taskData
        )
    } catch (error) {
        console.error(error);
    }
}


export async function createBoardTask(teamUid, boardUid, taskData) {
    try {
      const newTask = await await addDoc(
        collection(
          db,
          `${collections.COLLECTION_NAME}`,
          `${teamUid}/${collections.BOARDS_SUB_COLLECTION}/${boardUid}/${collections.TASKS_SUB_COLLECTION}`
        ),
        taskData
      );
      console.log(newTask);
    } catch (error) {
      console.error(error);
    }
  }
  
  