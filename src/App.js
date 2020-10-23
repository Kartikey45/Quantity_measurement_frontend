import React from "react";
import "./App.css";
import Dashboard from "./component/DashboardMaterial/Dashboard";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          {/* <Dashboard/> */}
          <Route path="/" component={Dashboard} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
