import React from "react";
import { TextField, IconButton, Box } from "@mui/material";
import searchFormStyles from "../../styles/searchFormStyles";
import { Clear as ClearIcon, Send as SendIcon } from "@mui/icons-material";

const SearchTextField = ({ searchTerm, onChange, onSubmit, onClear }) => {
  const classes = searchFormStyles();

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (typeof onSubmit === "function") {
        onSubmit(event);
      }
    }
  };

  return (
    <form>
      <Box className={classes.container}>
        <TextField
          className={classes.textField}
          label="Chat with AI"
          value={searchTerm}
          onChange={onChange}
          variant="outlined"
          multiline
          rows={3}
          helperText="Start exploring by typing your question or topic here"
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <Box display="table" alignItems="end">
                <IconButton type="button" className={classes.iconButton} disabled={!searchTerm} onClick={onSubmit}>
                  <SendIcon />
                </IconButton>
                {searchTerm && (
                  <IconButton variant="contained" onClick={onClear}>
                    <ClearIcon />
                  </IconButton>
                )}
              </Box>
            ),
          }}
        />
      </Box>
    </form>
  );
};

export default SearchTextField;
