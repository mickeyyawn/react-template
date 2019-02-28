import React, { Component } from "react";
//import "./App.css";
import styled from "styled-components";

const NoMatchContainer = styled.div`
  /*background-color: red;*/
  color: rgb(85, 85, 85);
`;

class FourOhFour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NoMatchContainer>
        <h1> Crap 404. </h1>
      </NoMatchContainer>
    );
  }
}

export default FourOhFour;
