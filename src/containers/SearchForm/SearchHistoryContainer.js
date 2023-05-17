import React from "react";
import { Card, CardContent } from "@mui/material";
import searchFormStyles from "../../styles/searchFormStyles";
import SearchHistory from "../../components/SearchForm/SearchHistory";

const SearchHistoryContainer = ({ searchHistory }) => {
  const classes = searchFormStyles();

  const renderSearchHistory = () => {
    if (searchHistory.length > 0) {
      const reversedHistory = [...searchHistory].reverse();
      return (
        <Card>
          <CardContent>
            <SearchHistory history={reversedHistory} />
          </CardContent>
        </Card>
      );
    }
    return null;
  };

  return <div className={classes.searchHistoryContainer}>{renderSearchHistory()}</div>;
};

export default SearchHistoryContainer;