import React, { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

const SearchSnackBar = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSnackbarOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Snackbar
      open={snackbarOpen}
      onClose={() => setSnackbarOpen(false)}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Alert severity="info" onClose={() => setSnackbarOpen(false)}>
        Start chatting with AI!
      </Alert>
    </Snackbar>
  );
};

export default SearchSnackBar;
