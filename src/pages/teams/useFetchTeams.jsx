import { useState, useCallback, useEffect } from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const useFetchTeams = (userData) => {
  const [teamsList, setTeamList] = useState([]);
  const queryTeams = useCallback((userData) => {
    const q = query(
      collection(db, "teams"),
      where("owner", "==", userData.uid)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const teams = [];
      querySnapshot.forEach((doc) => {
        teams.push({ ...doc.data(), uid: doc.id });
      });
      console.log(teams);
      setTeamList(teams);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (userData) {
      const removeTeamsSubscription = queryTeams(userData);
      return () => {
        removeTeamsSubscription();
      };
    }
  }, [userData, queryTeams]);
  return teamsList;
};

export default useFetchTeams;
