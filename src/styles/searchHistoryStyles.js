import { makeStyles } from "@mui/styles";

const searchHistoryStyles = makeStyles((theme) => ({
  searchHistory: {
    margin: theme.spacing(2, 0),
  },
  listItem: {
    listStyleType: "none",
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
  },
}));

export default searchHistoryStyles;
