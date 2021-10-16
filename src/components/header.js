import React from "react";

// css
import "../styles/header.css";

// icon
import PersonIcon from "../assets/icons/person.svg";

// back
import image_elder from "../assets/images/Elder.png";

function header() {
  return (
    <div className="app-header">
      <div className="app-header__banner"></div>

      <div className="app-header__content">
        <p>CONFERÊNCIA SEMESTRAL</p>
        <h5>ESTACA PACAJUS BRASIL</h5>

        <div>
          <img src={image_elder} alt="Image_Elder" />
          <section>
            <p>Presidida pelo Élder Luiz C. D. Queiroz</p>
            <h5>Dos Setenta</h5>
          </section>
        </div>
      </div>
    </div>
  );
}

export default header;
