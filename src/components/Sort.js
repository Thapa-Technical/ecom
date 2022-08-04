import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    sort,
    sortUpdate,
  } = useFilterContext();

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd number of products  */}
      <div>
        <p>{filter_products.length} total products.</p>
      </div>
      {/* NOTE: 3rd sorting */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            value={sort}
            onChange={sortUpdate}>
            <option
              className="sort-select--option"
              value="price-lowest"
              style={{
                fonWeight: "bold",
                color: "#09C",
              }}>
              Price(lowest)
            </option>
            <option className="sort-select--option" value="" disabled></option>
            <option className="sort-select--option" value="price-highest">
              Price(highest)
            </option>
            <option className="sort-select--option" value="" disabled></option>
            <option className="sort-select--option" value="name-a">
              Price(a-z)
            </option>
            <option className="sort-select--option" value="" disabled></option>
            <option className="sort-select--option" value="name-z">
              Price(z-a)
            </option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.2rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
