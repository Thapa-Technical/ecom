import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Error = () => {
  return (
    <Wrapper>
      <main>
        <div class="container">
          <div>
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <NavLink to="/">
              <Button> HOME</Button>
            </NavLink>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h1 {
      font-size: 10rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default Error;
