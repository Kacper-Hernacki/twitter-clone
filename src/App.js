import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      {/* <Widget />*/}
    </div>
  );
}

export default App;
