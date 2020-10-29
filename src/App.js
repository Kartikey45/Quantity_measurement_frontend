import React from "react";
import "./App.css";
import Dashboard from "./component/DashboardMaterial/Dashboard";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import GetHistory from './component/History/GetHistory'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/getHistory" component={GetHistory} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
