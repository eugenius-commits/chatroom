import React, { useState, useReducer } from "react";
import SearchTextField from "./SearchTextField";
import searchFormStyles from "../../styles/searchFormStyles";
import useSearchOpenAI from "../../hooks/useSearchOpenAI";
import { initialState, actionTypes, searchReducer } from "../../reducers/searchReducer";
import SearchHistoryContainer from "../../containers/SearchForm/SearchHistoryContainer";
import SearchSnackBar from "./SearchSnackBar";

const SearchForm = () => {
  const classes = searchFormStyles();
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const [isLoading, setIsLoading] = useState(false); // Track loading state


  const handleChange = (event) => {
    dispatch({ type: actionTypes.SET_SEARCH_TERM, payload: event.target.value });
    dispatch({ type: actionTypes.SET_IS_SUBMITTED, payload: false });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading
    dispatch({ type: actionTypes.SET_SEARCH_HISTORY, payload: state.searchTerm });
    dispatch({ type: actionTypes.SET_IS_SUBMITTED, payload: true });
    console.log("Search term:", state.searchTerm);
    const response = await useSearchOpenAI(state.searchTerm);
    dispatch({ type: actionTypes.SET_ANSWER, payload: response });
    dispatch({ type: actionTypes.SET_SEARCH_HISTORY, payload: response });
    setIsLoading(false); // Stop loading
  };

  const handleClear = (event) => {
    event.preventDefault();
    dispatch({ type: actionTypes.SET_SEARCH_TERM, payload: "" });
    dispatch({ type: actionTypes.SET_ANSWER, payload: "" });
    dispatch({ type: actionTypes.CLEAR_SEARCH_HISTORY });
  };  

  return (
    <div>
      <SearchTextField
        searchTerm={state.searchTerm}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />
      <SearchHistoryContainer searchHistory={state.searchHistory} />
      <SearchSnackBar />
    </div>
  );
  
};

export default SearchForm;
