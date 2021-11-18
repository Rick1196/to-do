import { Component } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import PropTypes from "prop-types";
import Task from "@mui/icons-material/Task";

class TasksList extends Component {
  manageTaskCompleted = (task) => {
    this.props.markAsCompleteCB(task);
  };

  render() {
    return (
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            To-do's
          </ListSubheader>
        }
      >
        {this.props.tasks.map((task) => {
          return (
            <ListItem key={`${this.props.name}-${task.uid}`}>
              <ListItemButton onClick={() => this.manageTaskCompleted(task)}>
                <ListItemAvatar>
                  <Avatar>
                    <Task />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={task.taskTitle} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  markAsCompleteCB: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default TasksList;
