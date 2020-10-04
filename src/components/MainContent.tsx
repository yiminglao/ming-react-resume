import React from "react";
import { Grid } from "@material-ui/core";
import AboutMe from "./content/AboutMe";
import ContactFrom from "./content/ContactFrom";
import GitInfo from "./content/GitInfo";
import WorkExperience from "./content/WorkExperience";
import Education from "./content/Education";

const MainContent = ({ activeTab }) => {
  return (
    <Grid container direction="row" justify="center">
      {activeTab === "AboutMe" && <AboutMe />}
      {activeTab === "ContactFrom" && <ContactFrom />}
      {activeTab === "GitInfo" && <GitInfo />}
      {activeTab === "WorkExperience" && <WorkExperience />}
      {activeTab === "Education" && <Education />}
    </Grid>
  );
};

export default MainContent;
