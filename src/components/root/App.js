import React, { Component } from "react";
import Content from "../content/content";
import SideBar from "../sidebar/sidebar";
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
