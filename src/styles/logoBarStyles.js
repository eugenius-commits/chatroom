import { makeStyles } from "@mui/styles";


const logoBarStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    logoBar: {
      height: "5vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(5),
      background: `url('/images/logo.png')`,
      backgroundPosition: "left top",
    },
    logo: {
      width: "200px",
    },
    badgesContainer: {
      position: "absolute",
      top: 0,
      right: 0,
      marginRight: theme.spacing(3),
      marginTop: theme.spacing(2),
      display: "flex",
      alignItems: "center",
    },
    badge: {
      margin: theme.spacing(0, 1),
    },
  }));
  
  export default logoBarStyles;