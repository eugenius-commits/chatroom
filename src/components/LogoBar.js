import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserProfile from "./UserProfile";
import logoBarStyles from "../styles/logoBarStyles";

const Header = () => {
  const classes = logoBarStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoBar}>
        <img src="/images/logo.png" alt="logo" className={classes.logo} />

        <div className={classes.badgesContainer}>
          {/*<Badge badgeContent={3} color="primary" className={classes.badge}>
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={7} color="secondary" className={classes.badge}>
            <ShoppingCartIcon />
          </Badge>*/}
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;
