import React, { Component } from "react";
//import "./App.css";
import styled from "styled-components";

const MyDiv = styled.div`
  background-color: white;
  color: rgb(84, 84, 84);
`;

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <MyDiv>
        <h1> Hello, World! </h1>
      </MyDiv>
    );
  }
}

export default Root;
