import React, { useState, useEffect } from "react";
import { removeFromFavorites } from "../../action/favoriteActions";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchProducts } from "../../api/Axiosproducts/Axiosproducts";
import "./Favorite.css";
import { NavLink } from "react-router-dom";
function FavoritePage() {
  const [favoriteProductIds, setFavoriteProductIds] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const dispatch = useDispatch();
  const handleBackToShop = () => {
    window.location.href = "/home"; // Chuyển hướng trang
  };
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteProductIds");
    if (storedFavorites) {
      setFavoriteProductIds(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        // Fetch favorite products using favoriteProductIds from localStorage
        const response = await fetchProducts();
        const favoriteProductData = response.data.filter((product) =>
          favoriteProductIds.includes(product.id)
        );
        setFavoriteProducts(favoriteProductData);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteProducts();
  }, [favoriteProductIds]);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));

    const updatedFavorites = favoriteProductIds.filter(
      (id) => id !== productId
    );
    setFavoriteProductIds(updatedFavorites);
    localStorage.setItem(
      "favoriteProductIds",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <div className="favorite-page">
      <h2 className="h2__fvr">Your Favorite Products</h2>
      <div className="favorite-products">
        {favoriteProducts.map((product) => (
          <NavLink
            style={{ textDecoration: "none", color: "#000" }}
            to={`/products/${product.id}`}
            key={product.id}
            className="favorite-product"
          >
            <img src={product.image} alt={product.name} />
            <NavLink className="favorite_icon">
              <FavoriteIcon style={{ color: "#000" }} />
            </NavLink>
            <div className="span__name">
              <p className="product__name">{product.name}</p>
              <div className="btn__fvr">
                <button
                  className="btn__remove"
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  Remove
                </button>
                <button onClick={handleBackToShop} className="btn__addcart">
                  Back Shop
                </button>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default FavoritePage;
