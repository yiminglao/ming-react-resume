import React from "react";
import {
  Container,
  TextField,
  createStyles,
  makeStyles,
  Theme,
  Button,
  Grid,
} from "@material-ui/core";
import Title from "../common/Title";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputField: {
      marginTop: 8,
      marginBottom: 8,
      fontSize: "12px",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const ContactFrom = () => {
  const classes = useStyles();
  return (
    <Grid item sm={10}>
      <Title value="Contact Me (WIP)" />
      <Container maxWidth="lg">
        <TextField
          disabled
          className={classes.inputField}
          fullWidth
          size="small"
          label="Name"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          disabled
          className={classes.inputField}
          fullWidth
          size="small"
          label="Email"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          disabled
          className={classes.inputField}
          fullWidth
          size="small"
          label="Subject"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          disabled
          className={classes.inputField}
          fullWidth
          size="small"
          label="Message"
          multiline
          rows="4"
          defaultValue=""
          variant="outlined"
        />
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Container>
    </Grid>
  );
};

export default ContactFrom;
