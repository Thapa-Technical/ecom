import React from "react";
import styled from "styled-components";
import Nav from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <MainHeader id="header">
      <NavLink to="/">
        <img src="./images/logo.png" alt="our main logo" className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;

export default Header;
