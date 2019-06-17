import React, { Component } from "react";
import Content from "../content/Content";
import SideBar from "../sidebar/Sidebar1";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <SideBar />
        <Content />
      </>
    );
  }
}

export default App;
