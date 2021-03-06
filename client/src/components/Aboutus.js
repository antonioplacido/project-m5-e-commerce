import React from "react";
import styled from "styled-components";

export default function Aboutus() {
  return (
    <Wrapper>
      <Label>About Us:</Label>
      <Content>
        Pygmy Wearables prides itself in being known as one of the premier
        online stores to purchase all your clothing needs. Started in 2020, we
        offer a simple and quick shopping experience. We offer clothing from all
        over the World. Founded by four students in Concordia’s bootcamp, we
        help make everyone’s shopping experience as streamlined as possible.{" "}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.h3`
  align-self: auto;
  justify-content: center;
`;

const Label = styled.h1`
  color: black;
  font-family: "Handlee", cursive;
  font-size: 24px;
  align-items: center;
  margin-top: 50px;
`;

const Content = styled.p`
  color: black;
  font-family: "Handlee", cursive;
  font-size: 24px;
`;
