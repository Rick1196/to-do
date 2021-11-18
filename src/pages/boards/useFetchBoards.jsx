import { useEffect, useState, useCallback } from "react";
import { db } from "../../firebase/firebaseConfig";
import { onSnapshot, collection, query } from "firebase/firestore";

const useFetchBoards = (teamUid) => {
  const [boards, setBoards] = useState([]);
  const queryBoards = useCallback((teamId) => {
    const boardsQuery = query(collection(db, `teams/${teamId}/boards`));
    const querySubscription = onSnapshot(boardsQuery, (querySnapshot) => {
      const boards = [];
      querySnapshot.forEach((doc) => {
        boards.push({ ...doc.data(), uid: doc.id });
      });
      setBoards(boards);
    });
    return querySubscription;
  }, []);

  useEffect(() => {
    if (teamUid) {
      const boardsSubscription = queryBoards(teamUid);
      return () => boardsSubscription();
    }
  }, [queryBoards, teamUid]);
  
  return boards;
};

export default useFetchBoards;
