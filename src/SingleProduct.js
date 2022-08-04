import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageNavigation from "./components/PageNavigation";
import { useGlobalContext } from "./context";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import MyImage from "./components/MyImage";

const API = "https://course-api.com/react-store-single-product";

const SingleProduct = () => {
  const {
    isSinglePageLoading: loading,
    getSingleProduct,
    singleProduct,
  } = useGlobalContext();

  // getting the id from the url to pass into url
  const { id } = useParams();

  // destructuring the singleProduct data
  const {
    id: alias,
    category,
    colors,
    company,
    description,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;

  // console.log(
  //   "🚀 ~ file: SingleProduct.js ~ line 38 ~ SingleProduct ~ singleProduct",
  //   singleProduct
  // );

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (loading) {
    return <div className="page_loading">Loading........</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Image  */}

          <div className="product-images">
            <MyImage imgs={images} />
          </div>

          {/* product side data  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star review={reviews} stars={stars} />
            <p className="product-data-price">
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-info ">
              <p>
                Available:
                <span> {stock > 0 ? " In stock" : " Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-price {
      font-weight: bold;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SingleProduct;
