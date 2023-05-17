import { makeStyles } from "@mui/styles";

const searchFormStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  textField: {
    marginRight: theme.spacing(2),
    width: "100%",
    flexGrow: 1,
  },
  list: {
    listStyle: "disc",
    paddingLeft: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
  },
  answerBar: {
    backgroundColor: "#f0f0f0",
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  searchButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default searchFormStyles;