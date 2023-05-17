import React from "react";
import { Typography, Chip } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import searchHistoryStyles from "../../styles/searchHistoryStyles";

const SearchHistory = ({ history }) => {
  const classes = searchHistoryStyles();

  const handleDelete = (index) => {
    console.log('delete ' + index);
    // Implement the logic to delete the history item at the specified index
    // For example: dispatch({ type: actionTypes.DELETE_SEARCH_HISTORY, payload: index });
  };

  return (
    <div className={classes.searchHistory}>
      <ul className={classes.list}>
        {history.map((searchTerm, index) => (
          <li key={index} className={classes.listItem}>
            <Typography>{searchTerm}</Typography>
            <Chip
              icon={<DeleteIcon />}
              label="Delete"
              onDelete={() => handleDelete(index)}
              className={classes.deleteButton}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
