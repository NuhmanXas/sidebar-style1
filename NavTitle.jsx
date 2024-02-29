import React from "react";
import styled from "styled-components";

function NavTitle({ text, className }) {
  return <StyledNavTitle className={className}>{text}</StyledNavTitle>;
}

export default NavTitle;

const StyledNavTitle = styled.h2`
  color: #d6d6d6;
  font-size: 10px;
  text-transform: uppercase;
  padding-left: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  letter-spacing: 1.2px;
  margin-top: 30px;
`;
