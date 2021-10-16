import React, { useEffect } from "react";

// css
import "../styles/footer.css";

// icons
import icon_zoom from "../assets/icons/zoom-icon.png";
import icon_youtube from "../assets/icons/youtube-icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-1" style={{ marginRight: 15 }}>
        <header>
          <p>Sábado</p>
          <img
            onClick={() => window.open("https://www.zoom.us/")}
            src={icon_zoom}
            alt="icon zoom"
          />
          <img
            onClick={() =>
              window.open("https://www.youtube.com/user/MormonMessagesPOR")
            }
            src={icon_youtube}
            alt="icon youtube"
          />
        </header>
        <div>
          <p>Sessão de Liderança</p>
          <p>Sessão dos Adultos</p>
        </div>
      </div>

      <div className="footer-2" style={{ marginLeft: 15 }}>
        <header>
          <p>Domingo</p>
          <img
            onClick={() => window.open("https://www.zoom.us/")}
            src={icon_zoom}
            alt="icon zoom"
          />
          <img
            onClick={() =>
              window.open("https://www.youtube.com/user/MormonMessagesPOR")
            }
            src={icon_youtube}
            alt="icon youtube"
          />
        </header>
        <div>
          <p>Sessão Geral - Aracati</p>
          <p>Sessão Geral - Pacajus</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
