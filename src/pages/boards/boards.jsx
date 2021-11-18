import React from "react";
import { useParams } from "react-router-dom";
import { createBoardTeam } from "../../services/teams";
import Styles from "./boards.styles";
import useFetchBoards from "./useFetchBoards";
import ListSkeleton from "../../components/skeletons/listSkeleton";
import BoardsList from "./boardsList";

export default function Boards() {
  const { teamUid } = useParams();
  const boards = useFetchBoards(teamUid);

  const createBoard = async (teamData, userData) => {
    try {
      const boardData = {
        name: "Board 1",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        owner: {
          displayName: userData.displayName,
          email: userData.email,
          avatar: userData.photoURL,
        },
      };
      await createBoardTeam(teamData.uid, boardData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Styles.PageContainer>
      {boards.length ? (
        <BoardsList boards={boards} teamUid={teamUid} />
      ) : (
        <ListSkeleton />
      )}
    </Styles.PageContainer>
  );
}
