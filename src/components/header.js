import React from "react";

// css
import "../styles/header.css";

// icon
import PersonIcon from "../assets/icons/person.svg";

// back
import back from "../assets/images/back_2022.png";

//
import image_elder from "../assets/images/elder lira.png";

function header() {
  return (
    <div className="app-header">
      <div className="app-header__banner">
        <img src={back} alt="" />
        <div className="app-header__banner--text-top">
          <section />
          <p>12&13</p>
          <h5>NOV</h5>
          <span>2022</span>
        </div>
        <div className="app-header__banner--text">
          <p>
            Achegai-vos a mim e achegar-<br></br>me-ei a vós(..)
          </p>
          <section />
          <h5>Doutrina e Convênios 88:63</h5>
        </div>
      </div>

      <div className="app-header__content">
        <p>CONFERÊNCIA SEMESTRAL</p>
        <h5>ESTACA PACAJUS BRASIL</h5>

        <div>
          <img src={image_elder} alt="Image_Elder" />
          <section>
            <p>Presidida pelo Elder Lira</p>
            <h5>Dos Setenta</h5>
          </section>
        </div>
      </div>
    </div>
  );
}

export default header;
