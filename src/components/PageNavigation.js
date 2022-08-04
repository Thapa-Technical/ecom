import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styles/Container";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <Container>
        <NavLink to="/"> Home </NavLink> / {title}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;

  a {
    font-size: 3.2rem;
  }
`;

export default PageNavigation;