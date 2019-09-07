import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  paper: {
    textAlign: "center"
  },
  title: {
    textDecoration: "underline"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#ff0000"
    }
  }
});

export default function DenseAppBar() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    releaseNumber: "",
    projectName: "",
    projectManagerEmail: "",
    requestorEmail: "",
    startDate: "",
    endDate: "",
    cartStatus: "New",
    cartID: "XXX-XXX-XXXX"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        {/* Cart Detasils Form */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            align="left"
            className={classes.title}
            gutterBottom="true"
          >
            Project Details
          </Typography>
        </Grid>
        <Paper className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off">
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="stretch"
            >
              <Grid item xs={4} margin="normal">
                <Typography gutterBottom="true">
                  Cart Status: {values.cartStatus}
                </Typography>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <Typography gutterBottom="true">
                  Cart ID: {values.cartID}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  required
                  id="releaseNumber"
                  label="Release/TEBR#"
                  className={classes.textField}
                  onChange={handleChange("releaseNumber")}
                  error={values.releaseNumber === ""}
                  helperText={values.releaseNumber === "" ? "Empty field!" : ""}
                  margin="dense"
                  variant="outlined"
                  placeholder="Release/TEBR#"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="projectName"
                  label="Project Name"
                  className={classes.textField}
                  onChange={handleChange("projectName")}
                  error={values.projectName === ""}
                  helperText={values.projectName === "" ? "Empty field!" : ""}
                  margin="dense"
                  variant="outlined"
                  placeholder="Project Name"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  type="email"
                  id="projectManagerEmail"
                  label="Project Manager Email"
                  className={classes.textField}
                  onChange={handleChange("projectManagerEmail")}
                  error={values.projectManagerEmail === ""}
                  helperText={
                    values.projectManagerEmail === "" ? "Empty field!" : ""
                  }
                  margin="dense"
                  variant="outlined"
                  placeholder="Project Manager Email"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  type="email"
                  id="requestorEmail"
                  label="Requestor Email"
                  className={classes.textField}
                  onChange={handleChange("requestorEmail")}
                  error={values.requestorEmail === ""}
                  helperText={
                    values.requestorEmail === "" ? "Empty field!" : ""
                  }
                  margin="dense"
                  variant="outlined"
                  placeholder="Requestor Email"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="startDate"
                  type="date"
                  label="Start Date"
                  className={classes.textField}
                  onChange={handleChange("startDate")}
                  error={values.startDate === ""}
                  helperText={values.startDate === "" ? "Empty field!" : ""}
                  margin="dense"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="endDate"
                  type="date"
                  label="End Date"
                  className={classes.textField}
                  onChange={handleChange("endDate")}
                  error={values.endDate === ""}
                  helperText={values.projectName === "" ? "Empty field!" : ""}
                  margin="dense"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
