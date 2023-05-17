export const initialState = {
    searchTerm: "",
    searchHistory: [],
    isSubmitted: false,
    answer: "",
  };
  
  export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SET_IS_SUBMITTED: "SET_IS_SUBMITTED",
    SET_ANSWER: "SET_ANSWER",
    SET_SEARCH_HISTORY: "SET_SEARCH_HISTORY",
    CLEAR_SEARCH_HISTORY: "CLEAR_SEARCH_HISTORY",
  };

  export const searchReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      case actionTypes.SET_IS_SUBMITTED:
        return { ...state, isSubmitted: action.payload };
      case actionTypes.SET_ANSWER:
        return { ...state, answer: action.payload };
      case actionTypes.SET_SEARCH_HISTORY:
        const newSearchHistory = [action.payload, ...state.searchHistory.slice(0, 9)];
        return { ...state, searchHistory: newSearchHistory };
      case actionTypes.CLEAR_SEARCH_HISTORY:
        return { ...state, searchHistory: [] };
      default:
        return state;
    }
  };
  
  