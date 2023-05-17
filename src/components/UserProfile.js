import React, { useState } from "react";
import { Avatar, Chip, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const UserProfile = ({ user }) => {
  const classes = useStyles();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Chip
        avatar={
          <Avatar
            alt="Anonymous"
            src="/images/user.png"
            className={classes.avatar}
            onClick={handleAvatarClick}
          />
        }
        label="User"
        variant="outlined"
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="info">
          This is an anonymous user.
        </Alert>
      </Snackbar>
    </>
  );
};

export default UserProfile;
