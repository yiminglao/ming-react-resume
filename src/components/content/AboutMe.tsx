import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import Title from "../common/Title";

const AboutMe = () => {
  return (
    <Grid item>
      <Title value="About Me" subTitle="Software developer" />
      <Container maxWidth="lg" style={{ height: 300 }}>
        <Typography variant="body1" component="p" align="left">
          I am a software developer with experienced working in multiple
          programming languages, tools, technologies such as ASP.NET, Java,
          Android, C#, HTML, JavaScript, jQuery, PHP, SQL, Perl, MS Visual
          Studio, Android Studio, GitHub and Adobe Photoshop. Extensive
          knowledge of modern Mobile, Window platform, and Web techniques.
          Implementing, and adopting new technologies to maximize development
          efficiency and produce innovative applications.
        </Typography>
      </Container>
    </Grid>
  );
};

export default AboutMe;
