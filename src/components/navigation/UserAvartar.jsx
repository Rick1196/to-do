import React, { useState } from "react";
import { Avatar, Tooltip, Menu, MenuItem } from "@mui/material";
import useSessionData from "../../hooks/useSessionData";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

export default function UserAvatar() {
  const history = useHistory();
  const sessionData = useSessionData();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const logOut = async () => {
    try {
        handleClose();
      const auth = getAuth();
      await signOut(auth);
      history.push("/");
    } catch (error) {
      console.error("Error trying to logout", error);
    }
  };
  return (
    <>
      {sessionData ? (
        <Tooltip title={sessionData.displayName} onClick={handleAvatarClick}>
          <Avatar
            alt={sessionData.displayName}
            src={sessionData.photoURL}
          ></Avatar>
        </Tooltip>
      ) : null}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </>
  );
}
