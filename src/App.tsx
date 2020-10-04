import React, { useState } from "react";
import "./App.css";
import { Container, Grid, makeStyles, createStyles } from "@material-ui/core";
import MainMenu from "./components/MainMenu";
import PersonalCard from "./components/PersonalCard";
import MainContent from "./components/MainContent";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#f7f7f7",
      borderRadius: "5px",
      minWidth: 900,
      maxWidth: 1200,
    },
  })
);

const App = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("AboutMe");
  return (
    <div className="App">
      <Container maxWidth="lg" style={{ marginTop: "35px" }}>
        <Grid container direction="row" className={classes.root}>
          <Grid item>
            <PersonalCard />
          </Grid>
          <Grid item>
            <MainMenu setActiveTab={setActiveTab} />
          </Grid>
          <Grid item xs container>
            <MainContent activeTab={activeTab} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
