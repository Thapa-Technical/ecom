import React, { useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaStarOfDavid } from "react-icons/fa";
import styled from "styled-components";

const Star = ({ stars, review }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {/* if 2.5 */}
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= numbers ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaStarOfDavid className="icon" />
        )}
      </span>
    );
  });
  // console.log(ratingStar);

  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>
          ({review} + {stars} customer reviews)
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;
