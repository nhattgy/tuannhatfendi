import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/Axiosproducts/Axiosproducts";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { NavLink } from "react-router-dom";

const popularSearches = ["Bag", "Dress", "Shoes", "Accessories", "Fendi"];

const ProductItem = React.memo(({ product }) => (
  <NavLink
    style={{ textDecoration: "none", color: "#000" }}
    className="search__result"
    key={product.id}
    to={`/products/${product.id}`}
  >
    <img src={product.image} alt={product.name} loading="lazy" />
    <div className="name__tilesearch">
      <h3 className="h3__search">{product.name}</h3>
      <span>{product.title}</span>
    </div>
  </NavLink>
));

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchProducts();

        if (searchTerm === "") {
          const initialResults = response.data.slice(0, 8); // Lấy 3 sản phẩm ban đầu
          setSearchResults(initialResults);
        } else {
          const filteredResults = response.data.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(filteredResults);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, [searchTerm]);

  return (
    <div className="search__container">
      <form className="form__serach">
        {" "}
        <label
          id="aa-search-input-label"
          htmlFor="aa-search-input"
          className="c-searchbar__form-label aa-searchbox__container__label"
        >
          Search for
        </label>
        <input
          className="input__serch"
          type="text"
          placeholder="Search For "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="popular__searches">
          <h3 className="popular__h3">Popular Searches</h3>

          {popularSearches.map((keyword) => (
            <span
              key={keyword}
              className="popular__keyword"
              onClick={() => setSearchTerm(keyword)}
            >
              <SearchIcon sx={{ fontSize: 17.6, marginRight: 4 }} />{" "}
              {/* Thêm biểu tượng */}
              {keyword}
            </span>
          ))}
        </div>
      </form>
      <h1 style={{ textAlign: "center" }}>You might also like</h1>
      <div className="img__results">
        {searchResults.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Search;
