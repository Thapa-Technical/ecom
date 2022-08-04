import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  // we need to defined
  const [mainImage, setMainImage] = useState(imgs[0]);
  // console.log(
  //   "🚀 ~ file: MyImage.js ~ line 7 ~ MyImage ~ mainImage",
  //   mainImage
  // );
  // console.log(typeof imgs);

  return (
    <Wrapper>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
      <div className="grid grid-five-column">
        {imgs.map((curImg, index) => {
          return (
            <img
              src={curImg.url}
              alt={curImg.filename}
              key={index}
              onClick={() => setMainImage(curImg)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    width: 100%;
    height: 20rem;
    gap: 0.5rem;

    img {
      max-width: 100%;
      height: 8rem;
      background-size: contain;
      background-size: 100% 100%;
      object-fit: contain;
      cursor: pointer;
    }
  }

  .main-screen img {
    width: 100%;
    max-height: 60rem;
  }
`;

export default MyImage;
