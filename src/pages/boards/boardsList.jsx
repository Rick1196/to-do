import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListSubheader,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
} from "@mui/material";
import Dashboard from "@mui/icons-material/Dashboard";
import PropTypes from "prop-types";

function BoardsList({ boards = [], teamUid }) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Boards
        </ListSubheader>
      }
    >
      {boards.map((board) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Dashboard />
              </Avatar>
            </ListItemAvatar>
            <Link to={`/teams/${teamUid}/boards/${board.uid}/tasks`}>
              <ListItemText primary={board.name} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  teamUid: PropTypes.string.isRequired,
};

export default BoardsList;
