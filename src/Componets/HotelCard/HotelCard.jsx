import React from "react";
import "./style.css";
import { MoveRight, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

const HotelCard = () => {
  return (
    <div className="hotl-card-container">
      <div className="hotel-card">
        <div className="hotel-card-pic">
          <img
            src="https://washington.org/sites/default/files/styles/generic_hero_banner_1440_x_600/public/2023-07/Untitled%20design%20%2812%29.jpg.webp?itok=JKUukSPd"
            alt=""
          />
        </div>
        <div className="hotel-card-name-price">
          <h2>Restaurants 1</h2>
          <h2>
            $30<span>/start</span>
          </h2>
        </div>
        <div className="rating-star">
          {Array(5)
            .fill()
            .map((item, i) => (
              <Star color="yellow" fill="yellow" />
            ))}
          <span>(800)</span>
        </div>
        <NavLink
          to={"/hoteldetail"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <div className="detail-btn">
            <span>View</span>
            <MoveRight />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default HotelCard;
