import React from "react";
import TaskList from "../components/TaskList";
import Tree from "../components/D3"
import task1 from "../components/data/task1.json"
const Home = () => {
  return (
  <div style={{display: "flex"}}>
    <TaskList/>
    <Tree task={task1} />
  </div>
  );
};
export default Home;
