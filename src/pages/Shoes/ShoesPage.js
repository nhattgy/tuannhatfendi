import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/Axiosproducts/Axiosproducts";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../action/favoriteActions";

function Shoes() {
  const [products, setProducts] = useState([]);
  const [numToShow, setNumToShow] = useState(12);
  const productsToShow = products.slice(0, numToShow);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [startIndex, setStartIndex] = useState(40);
  const dispatch = useDispatch();

  const [favoriteProductIds, setFavoriteProductIds] = useState([]);

  const handleAddToFavorite = (product) => {
    if (!favoriteProductIds.includes(product.id)) {
      const updatedFavorites = [...favoriteProductIds, product.id];
      setFavoriteProductIds(updatedFavorites);
      localStorage.setItem(
        "favoriteProductIds",
        JSON.stringify(updatedFavorites)
      );
      setFavoriteCount(updatedFavorites.length); // Cập nhật số lượng yêu thích
      dispatch(addToFavorites(product));
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  const [activeCategory, setActiveCategory] = useState("New In");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    if (activeCategory === "New In") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.category.toLowerCase() === activeCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory, products]);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
    setStartIndex(0); // Reset to start from the beginning
    setNumToShow(12);
  };

  const buttonLabels = [
    "New In",
    "Bags",
    "Ready to Wear",
    "Shoes",
    "Accessories",
    "Small leather goods",
    "Fashion Jewelry",
  ];

  const handleViewMoreClick = () => {
    setStartIndex(startIndex + 2);
    setNumToShow(numToShow + 2);
  };

  return (
    <div className="main-content">
      <div className="separator "></div>
      <div className="btn__link">
        <div className="ul__link">
          {buttonLabels.map((label) => (
            <button
              key={label}
              className={`li__link ${label === activeCategory ? "active" : ""}`}
              onClick={() => handleButtonClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="text__content">
        <h1 className="h1__contentwomen">New Arrivals for Women</h1>
        <div className="seo__content">
          The very essence of Fendi—craftsmanship and creativity—is expressed in
          new arrivals, including the Fendi C’mon, new iterations of the iconic
          Peekaboo, ready-to-wear and accessories.
        </div>
      </div>
      <div className="main-content">
        <div className="main__product">
          <div className="map__method">
            {filteredProducts
              .slice(startIndex, startIndex + numToShow)
              .map((product, index) => (
                <div key={product.id} className="product__item">
                  <div className="img__products">
                    <div className="img__container">
                      <div className="image__wrapper">
                        <NavLink to={`/products/${product.id}`}>
                          <img
                            className="img__women"
                            src={product.image}
                            alt={product.name}
                          />
                        </NavLink>
                        <div className="span__nameproduct">
                          <span className="name__product">{product.name}</span>
                          <div className="span__text">
                            <span className="span__product">
                              {product.title}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="image__wrapper">
                        <NavLink to={`/products/${product.id}`}>
                          <img
                            className="img__women2"
                            src={product.image2}
                            alt={product.name}
                          />
                        </NavLink>
                        <div className="favorite-icon-container">
                          {favoriteProductIds.includes(product.id) ? ( // Check if the product is favorited
                            <FavoriteIcon className="favorite__icon" />
                          ) : (
                            <FavoriteBorderIcon
                              className="favorite__icon"
                              onClick={() => handleAddToFavorite(product)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="center-button-container">
            {numToShow < filteredProducts.length && (
              <button
                className="view-more-button"
                onClick={handleViewMoreClick}
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoes;
