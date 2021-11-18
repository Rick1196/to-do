import { useState, useEffect, useCallback } from "react";
import { query, collection, onSnapshot, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { tasksStatus } from "../../constants";

export default function useFetchTasks(boardUid, teamUid) {
  const [tasks, setTasks] = useState([]);

  const queryTasks = useCallback((boardId, teamId) => {
    const tasksQuery = query(
      collection(db, `teams/${teamId}/boards/${boardId}/tasks`),
      where("status", "==", tasksStatus.todo)
    );
    const querySubscription = onSnapshot(tasksQuery, (querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), uid: doc.id });
      });
      console.log(tasks);
      setTasks(tasks);
    });
    return querySubscription;
  }, []);

  useEffect(() => {
    console.log(boardUid, teamUid);
    if (boardUid && teamUid) {
      const tasksSubscription = queryTasks(boardUid, teamUid);
      return () => tasksSubscription();
    }
  }, [boardUid, teamUid, queryTasks]);
  return tasks;
}
