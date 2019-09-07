import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
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
    projectName: "",
    startDate: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        {/* Cart Detasils Form */}
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="projectName"
            label="Project Name"
            className={classes.textField}
            defaultValue="Project Name"
            onChange={handleChange("projectName")}
            error={(values.projectName === "")}
            helperText={values.projectName.valueof === "%20" ? "Empty field!" : " "}
            margin="normal"
            variant="outlined"
            placeholder="Project Name"
          />
          <TextField
            id="startDate"
            type="date"
            label="startDate"
            className={classes.textField}
            onChange={handleChange("startDate")}
            error={values.startDate === ""}
            margin="normal"
            variant="outlined"
            placeholder="Start Date"
          />

          <TextField
            id="projectName"
            label="Project Name"
            className={classes.textField}
            value={values.projectName}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
            placeholder="Project Name"
          />
        </form>
      </ThemeProvider>
    </div>
  );
}
