import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TodayIcon from "@mui/icons-material/Today";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RedeemIcon from "@mui/icons-material/Redeem";
import { fetchProducts } from "../../api/Axiosproducts/Axiosproducts"; // Đảm bảo đã import fetchProducts
import "./Product.css";
function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showImage2, setShowImage2] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchProducts();
        const product = response.data.find((item) => item.id === productId);
        setRelatedProducts(response.data);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchData();
  }, [productId]);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage2((prevShowImage2) => !prevShowImage2); // Chuyển đổi giữa true và false
    }, 3000);

    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="product-details">
        <div className="img__prd">
          <div className="product__img-container">
            <img
              className="product__img"
              src={showImage2 ? product.image2 : product.image}
              alt={product.name}
            />
            <div className="slider-container">
              <div className="slider"></div>
              <div className="slider"></div>
            </div>
          </div>
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <span className="product-title">{product.title}</span>
          <div style={{ marginTop: "2.5rem" }}>
            <h3 style={{ fontWeight: "400", fontSize: "15px" }}>
              Color: Light
            </h3>
            <div className="img__circle ">
              <img className="img__product" src={product.image} />
            </div>
            <div>
              <h5 className="product-description">
                <h3> Description Of The Product</h3>
                <span>{product.description}</span>
              </h5>
            </div>
          </div>
          <div className="service__product">
            <ul style={{ padding: "0" }}>
              <li>
                <div className="service-item">
                  <h4>
                    <TodayIcon /> Book An Appointment
                  </h4>
                  <span>
                    Receive one-on-one shopping assistance from our boutique
                    staff
                  </span>
                </div>
              </li>
              <li>
                <div className="service-item">
                  <h4>
                    <StorefrontIcon /> Find in Store
                  </h4>
                  Check if this item is available in one of our stores in your
                  selected size and colour.
                </div>
              </li>
              <li>
                <div className="service-item">
                  <h4>
                    <RedeemIcon /> Special Packaging
                  </h4>
                  All our items are elegantly wrapped in our signature Fendi
                  packaging, which is ideal also for gifting.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1>You might also like</h1>
      <div to={`/products/${product.id}`} className="also__like">
        {relatedProducts.slice(0, 9).map((relatedProduct) => (
          <img
            className="img__2product"
            key={relatedProduct.id}
            src={relatedProduct.image}
            alt={relatedProduct.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
