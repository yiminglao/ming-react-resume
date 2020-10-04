import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import Title from "../common/Title";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
    inline: {
      display: "inline",
    },
  })
);

const Education = () => {
  const classes = useStyles();
  return (
    <Grid item sm={12}>
      <Title value="EDUCATION" />
      <Grid container style={{ height: 300 }}>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="./images/weber_logo.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Weber State University"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Bachelor in Computer Science
                  </Typography>
                  {" — 08/2015 - 12/2018"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="./images/weber_logo.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Weber State University"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    2 years Interior Design
                  </Typography>
                  {" — 08/2010 - 12/2013"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="udemy" src="./images/udemy_logo.png" />
            </ListItemAvatar>

            <ListItemText primary="udemy" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Pluralsight" src="./images/Pluralsight-logo.png" />
            </ListItemAvatar>
            <ListItemText primary="Pluralsight" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Education;
