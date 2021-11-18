import React from "react";
import { useParams } from "react-router-dom";
import useSessionData from "../../hooks/useSessionData";
import { createBoardTask } from "../../services/tasks";
import Styles from "./tasks.styles";
import ListSkeleton from "../../components/skeletons/listSkeleton";
import TasksList from "./tasksList";
import useFetchTasks from "./useFetchTasks";
import { tasksStatus } from "../../constants";
import { updateTask } from "../../services/tasks";

export default function Tasks() {
  const { boardUid, teamUid } = useParams();
  const userData = useSessionData();
  const tasks = useFetchTasks(boardUid, teamUid);

  const markAsComplete = async (task) => {
    try {
      const updatedTask = {
        ...task,
        updatedAt: new Date().getTime(),
      };
      await updateTask(updatedTask, teamUid, boardUid);
    } catch (error) {
      console.error(error);
    }
  };

  const createTasks = async (teamId, boardId, taskData, userData) => {
    try {
      // const task = {
      //   taskTitle: "Task with status",
      //   taskDescription: "Description about the task",
      //   createdAt: new Date().getTime(),
      //   updatedAt: new Date().getTime(),
      //   status: tasksStatus.todo,
      //   owner: {
      //     displayName: userData.displayName,
      //     email: userData.email,
      //     avatar: userData.photoURL,
      //   },
      // };
      await createBoardTask(teamId, boardId, taskData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Styles.PageContainer>
      {tasks.length ? (
        <TasksList
          tasks={tasks}
          markAsCompleteCB={markAsComplete}
          name="todos"
        />
      ) : (
        <ListSkeleton />
      )}
    </Styles.PageContainer>
  );
}
