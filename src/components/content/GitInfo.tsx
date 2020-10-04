import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Grid,
  Link,
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

const GitInfo = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Title value="Projects" />
      <Container maxWidth="lg" style={{ height: 300 }}>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Student Track"
              secondary={
                <React.Fragment>
                  <Link
                    href="https://github.com/yiminglao/studentTrack"
                    color="inherit"
                  >
                    https://github.com/yiminglao/studentTrack
                  </Link>
                  {" — C# WPF SQLite"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Random Pick"
              secondary={
                <React.Fragment>
                  <Link
                    href="https://github.com/yiminglao/RandomPick"
                    color="inherit"
                  >
                    https://github.com/yiminglao/RandomPick
                  </Link>
                  {" — Java Andriod Firebase"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Mah Jong"
              secondary={
                <React.Fragment>
                  <Link
                    href="https://github.com/yiminglao/MahJong"
                    color="inherit"
                  >
                    https://github.com/yiminglao/MahJong
                  </Link>
                  {" — Java Window Game"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
    </Grid>
  );
};

export default GitInfo;
