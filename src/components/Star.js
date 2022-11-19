import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import styled from "styled-components";

const Star = ({ stars, review }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    console.log("🚀 ~ file: Star.js ~ line 8 ~ ratingStar ~ index", index);
    // to get the idea about the half star
    let numbers = index + 0.5;
    // debugger;
    return (
      <span key={index}>
        {/* if 2.5 */}
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= numbers ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon empty-icon" />
        )}
      </span>
    );
  });
  // console.log(ratingStar);

  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>({review} customer reviews)</p>
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

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;
