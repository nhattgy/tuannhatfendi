import React, { useState, useEffect } from "react";
import { removeFromFavorites } from "../../action/favoriteActions";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchProducts } from "../../api/Axiosproducts/Axiosproducts";
import "./Favorite.css";
function FavoritePage() {
  const [favoriteProductIds, setFavoriteProductIds] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const dispatch = useDispatch();

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
          <div key={product.id} className="favorite-product">
            <img src={product.image} alt={product.name} />
            <div className="favorite_icon">
              <FavoriteIcon />
            </div>
            <div className="span__name">
              <p className="product__name">{product.name}</p>
              <div className="btn__fvr">
                <button
                  className="btn__remove"
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  Remove
                </button>
                <button className="btn__addcart">Back Shop</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritePage;
