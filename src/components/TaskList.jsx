import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";

//  ---------------------- CSS componen ListItem using useStyle hook -----------------------

const useStyles = makeStyles({
  root: {
    width: 200,
    padding: "10px",
    marginTop: "90px",
    backgroundColor: "rgb(156, 191, 238)",
    color: "rgb(240, 240, 240)",
    borderRadius: "10px",
  },
  selected: {},
});
const TaskList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem sx={{ padding: "15px" }} button>
        <ListItemText primary="Task 1" />
      </ListItem>
      <ListItem sx={{ padding: "15px" }} button>
        <ListItemText primary="Task 2" />
      </ListItem>
      <ListItem sx={{ padding: "15px" }} button>
        <ListItemText primary="Task 3" />
      </ListItem>
      <ListItem sx={{ padding: "15px" }} button>
        <ListItemText primary="Task 4" />
      </ListItem>
      <ListItem sx={{ padding: "15px" }} button>
        <ListItemText primary="Task 5" />
      </ListItem>
      <ListItem sx={{ padding: "15px" }} button>
        <ListItemText primary="Task 6" />
      </ListItem>
      <ListItem sx={{ padding: "15px" }} button>
        <ListItemText primary="Task 7" />
      </ListItem>
    </div>
  );
};

export default TaskList;