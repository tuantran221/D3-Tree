import React, { useState } from "react";
import Tree from "../components/D3";
import { makeStyles } from "@mui/styles";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import task1 from "../components/data/task1.json";
import task2 from "../components/data/task2.json";
import task3 from "../components/data/task3.json";
import Helmet from "../components/Helmet";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {Alert} from "@mui/material"
// ---------------- array all json data ----------------
const data = [task1, task2, task3];
console.log("data", data);
// console.log("task1", task1)

// --------------- using hook useStyles to style component ---------------

const useStyles = makeStyles({
  root: {
    width: 200,
    padding: "10px",
    marginTop: "90px",
    backgroundColor: "rgb(30, 30, 30)",
    color: "rgb(240, 240, 240)",
    borderRadius: "10px",
    // fontWeight: "1000px"
  },
  selected: {},
});

const Home = () => {

  const classes = useStyles();

  //  ------- Set state current task --------------
  const [randomTask, SetTask] = useState(task1);
  const [notice, Setnotice] = useState()
  // console.log("randomtask", randomTask);

  //  ------- function to handle data task --------------
  const mapping2 = () => {
    SetTask(task2);
    setOpen(true);
    Setnotice("2")
  };
  const mapping1 = () => {
    SetTask(task1);
    setOpen(true);
    Setnotice("1")
  };
  const mapping3 = () => {
    SetTask(task3);
    setOpen(true);
    Setnotice("3")
  };
  //----------- snackbar state ----------
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
//  ---------- custom button notice --------------
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <Helmet title="Home">
      <div style={{ display: "flex" }}>
        <div className={classes.root}>
          <ListItem
            sx={{ padding: "15px", borderRadius: "10px" }}
            button
            onClick={mapping1}
          >
            <ListItemText primary="Task 1" />
          </ListItem>
          <ListItem
            sx={{ padding: "15px", borderRadius: "10px" }}
            button
            onClick={mapping2}
          >
            <ListItemText primary="Task 2" />
          </ListItem>
          <ListItem
            sx={{ padding: "15px", borderRadius: "10px" }}
            button
            onClick={mapping3}
          >
            <ListItemText primary="Task 3" />
          </ListItem>
          <ListItem sx={{ padding: "15px", borderRadius: "10px" }} button>
            <ListItemText primary="Task 4" />
          </ListItem>
          <ListItem sx={{ padding: "15px" }} button>
            <ListItemText primary="Task 5" />
          </ListItem>
          <ListItem sx={{ padding: "15px", borderRadius: "10px" }} button>
            <ListItemText primary="Task 6" />
          </ListItem>
          <ListItem sx={{ padding: "15px", borderRadius: "10px" }} button>
            <ListItemText primary="Task 7" />
          </ListItem>
        </div>

        <Tree task={randomTask} />
        <Snackbar
              open={open}
              autoHideDuration={1000}
              onClose={handleClose}
              action={action}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ color: "green", width: "300px" }}
              >
                result for a task {notice}
              </Alert>
            </Snackbar>
      </div>
    </Helmet>
  );
};
export default Home;
