import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes/Routes";
import MenuList from "./components/MenuList";

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <div className="container">
              <div className="main" >
                <MenuList/>
                <Routes />
              </div>
            </div>
          </div>
        )}
      ></Route>
    </BrowserRouter>
  );
};

export default App;