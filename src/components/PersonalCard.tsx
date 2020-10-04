import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  Link,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 260,
      height: 400,
    },
    content: {
      padding: 0,
    },
    listItem: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  })
);

const PersonalCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="./images/pic.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Yiming Lao (Ming) " />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="yiming.mp@gmail.com" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <PhoneAndroidIcon />
            </ListItemIcon>
            <ListItemText primary="1(801)668-9330" />
          </ListItem>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="https://www.linkedin.com/in/yiming-lao/" color="inherit">
          <LinkedInIcon fontSize="large" style={{ color: "#0073b1" }} />
        </Link>
        <Link href="https://github.com/yiminglao" color="inherit">
          <GitHubIcon style={{ color: "#0073b1", fontSize: "26.25" }} />
        </Link>
      </CardActions>
    </Card>
  );
};

export default PersonalCard;
