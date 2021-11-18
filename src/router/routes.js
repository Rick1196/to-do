import { lazy } from "react";
const loginPage = lazy(() => import("../pages/authentication/login"));
const teamsPage = lazy(() => import("../pages/teams/teams"));
const boardsPage = lazy(() => import("../pages/boards/boards"));
const tasksPage = lazy(() => import("../pages/tasks/tasks"));
const teamsModule = lazy(() => import("../pages/teams"))

const teamsSubroutes = [
  {
    path: '/teams',
    component: teamsPage,
    key: 'teams',
    exact: true
  },
  {
    path: "/teams/:teamUid",
    component: boardsPage,
    key: "boards",
    exact: true
  },
  {
    path: "/teams/:teamUid/boards/:boardUid/tasks",
    component: tasksPage,
    key: "tasks",
    exact: true
  },
];

const routes = [
  {
    path: "/",
    component: loginPage,
    key: "login",
    exact: true
  },
  {
    path: "/teams/",
    component: teamsModule,
    key: "teams-module",
    routes: teamsSubroutes,
  },
];



export default routes;
