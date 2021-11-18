import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListSubheader,
  ListItemText,
  IconButton,
  Avatar,
  ListItemAvatar,
  ListItem,
} from "@mui/material";
import GroupAdd from "@mui/icons-material/GroupAdd";
import PeopleAlt from "@mui/icons-material/PeopleAlt";

export default function TeamsList({ teamsList = [], addMemberCB, user }) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Teams you are realted to
        </ListSubheader>
      }
    >
      {teamsList.map((team) => {
        return (
          <ListItem
            secondaryAction={
              <IconButton
                onClick={() => addMemberCB(team, user)}
                edge="end"
                aria-label="delete"
              >
                <GroupAdd />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <PeopleAlt />
              </Avatar>
            </ListItemAvatar>
            <Link to={`/teams/${team.uid}`}>
              <ListItemText primary={team.name} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

TeamsList.propTypes = {
  teamsList: propTypes.arrayOf(propTypes.object).isRequired,
  addMemberCB: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
};
