import React from "react";
import { Col } from "react-bootstrap";
import "./RecipeTile.css";

function RecipeTile ({key, id, title, ingredients, imgUrl, link}) {
    return (
        <Col size={12} sm={6} md={4}>
          <div className="proj-imgbx">
            <img src={imgUrl} />
            <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="proj-txtx">
              <h6>{title}</h6>
              <span>{ingredients}</span>
            </div>
            </a>
          </div>
        </Col>
      )
}

export default RecipeTile;
