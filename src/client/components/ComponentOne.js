import React, { Component } from "react";
//import "./App.css";
import styled from "styled-components";

const MyDiv = styled.div`
  background-color: blue;
  color: white;
`;

class ComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <MyDiv>
        <h1> This is my new component! </h1>
        <h2>This is my name: {this.props.name}.</h2>
      </MyDiv>
    );
  }
}

export default ComponentOne;
