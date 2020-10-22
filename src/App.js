import React from "react";
import "./App.css";
import Dashboard from "./component/DashboardMaterial/Dashboard";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Dashboard/> */}
        <Route path="/" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
