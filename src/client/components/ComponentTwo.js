import React, { Component } from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  background-color: green;
  color: white;
`;

class ComponentTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerDiv>
        <h1> This is component #2! </h1>
      </ContainerDiv>
    );
  }
}

export default ComponentTwo;
