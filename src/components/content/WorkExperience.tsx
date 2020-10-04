import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Paper,
  Tab,
  Tabs,
  Box,
} from "@material-ui/core";
import Title from "../common/Title";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
    inline: {
      display: "inline",
    },
    block: {
      display: "block",
      margin: "5px 15px",
    },
    paper: {
      flexGrow: 1,
      marginTop: "15px",
    },
  })
);

const JobDetail = ({ desc }) => {
  const classes = useStyles();
  return (
    <Typography
      component="span"
      variant="body2"
      className={classes.block}
      color="textPrimary"
    >
      * {desc}
    </Typography>
  );
};

const WorkExperience = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item sm={12}>
      <Title value="Work Experience" />
      <Container maxWidth="lg" style={{ height: 300 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.paper}
        >
          <Tab label="Basecamp Franchising" />
          <Tab label="Full Service Web Design" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Basecamp Franchising, Software developer — Salt Lake City, UT"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    2/2019 - PRESENT
                  </Typography>

                  <JobDetail desc="Developed and Implemented features such as inventory, customer,  invoice, coupon, receipt printer integrate credit card payment for a point-of-sale application" />
                  <JobDetail desc="Identified the key problems, provided problem solution, writing unit, and integration test to ensured accuracy." />
                  <JobDetail desc="Re-designed and created reusable style components across the application." />
                  <JobDetail desc="Built Spring Boot microservices with GraphQL, Hibernate,  SQL function, native SQL queries and React front end by using Apollo Client" />
                  <JobDetail desc="Interacts with teammate for  code review and mentored junior-level developer to success" />
                </React.Fragment>
              }
            />
          </ListItem>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Full Service Web Design, PHP Web developer — Murray, UT​"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    3/2018 – 2/2019
                  </Typography>

                  <JobDetail desc="Gathered requirements from the product owner, convert design photo to HTML webpage, implement static web page to dynamic web page" />
                  <JobDetail desc="Created database table, SQL function base on application business needs" />
                  <JobDetail desc="Created WordPress plugin, add new functions for web application" />
                  <JobDetail desc="Fixed bugs and testing new features thoroughly to ensure they perform the correct task in all cases" />
                  <JobDetail
                    desc=" Primary technologies used include PHP, jQuery, JavaScript, HTML, Bootstrap, WordPress, Google
Chart"
                  />
                </React.Fragment>
              }
            />
          </ListItem>
        </TabPanel>
      </Container>
    </Grid>
  );
};

export default WorkExperience;
