import React from "react";
import Styles from "./teams.styles";
import useFetchTeams from "./useFetchTeams";
import { addMemberTeam, createTeam } from "../../services/teams";
import TeamsList from "./teamsList";
import useSessionData from "../../hooks/useSessionData";
import ListSkeleton from "../../components/skeletons/listSkeleton";

export default function Teams() {
  const user = useSessionData();
  const teamsData = useFetchTeams(user);

  const addMember = async (teamData, userData) => {
    try {
      await addMemberTeam(teamData.uid, userData);
    } catch (error) {
      console.error(error);
    }
  };

  const registerTeam = async () => {
    try {
      const newTeam = await createTeam({
        name: "Team 3",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        owner: user.uid,
      });
      console.log(newTeam);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Styles.PageContainer>
      {teamsData.length ? (
        <TeamsList teamsList={teamsData} user={user} addMemberCB={addMember} />
      ) : (
        <ListSkeleton />
      )}
    </Styles.PageContainer>
  );
}
