import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  Theme,
  createStyles,
} from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "80px",
      backgroundColor: theme.palette.background.paper,
      paddingTop: 0,
      paddingBottom: 0,
    },
    iconColor: {
      color: "black",
      fontSize: "50px",
    },
    button: {
      height: "80px",
      width: "80px",
    },
    listItemIcon: {
      minWidth: "50px",
    },
  })
);

const NavMenu = ({ onClick, icon, color }) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      className={classes.button}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
    </ListItem>
  );
};

const MainMenu = ({ setActiveTab }) => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root}>
      <NavMenu
        onClick={() => setActiveTab("AboutMe")}
        icon={<AssignmentIndIcon className={classes.iconColor} />}
        color="#438945"
      />
      <NavMenu
        onClick={() => setActiveTab("WorkExperience")}
        icon={<WorkOutlineRoundedIcon className={classes.iconColor} />}
        color="#3CBCC3"
      />
      <NavMenu
        onClick={() => setActiveTab("Education")}
        icon={<SchoolRoundedIcon className={classes.iconColor} />}
        color="#EBA63F"
      />
      <NavMenu
        onClick={() => setActiveTab("GitInfo")}
        icon={<GitHubIcon className={classes.iconColor} />}
        color="#F7F4E9"
      />
      <NavMenu
        onClick={() => setActiveTab("ContactFrom")}
        icon={<MailOutlineRoundedIcon className={classes.iconColor} />}
        color="#FEDBC4"
      />
    </List>
  );
};

export default MainMenu;
