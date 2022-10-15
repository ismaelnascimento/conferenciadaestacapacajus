import React, { useEffect } from "react";

// css
import "../styles/footer.css";

// icons
import icon_zoom from "../assets/icons/zoom-icon.png";
import icon_youtube from "../assets/icons/youtube-icon.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-1" style={{ marginRight: 15 }}>
          <header>
            <p>Sábado 12 de novembro</p>
            {/* <img
            onClick={() =>
              window.open(
                "https://zoom.us/j/96657395179?pwd=bGxIdmVCVysxUkp3eWFDVEVxcVBRQT09"
              )
            }
            src={icon_zoom}
            alt="icon zoom"
          /> */}
          </header>
          <div>
            <p>
              Reunião de Liderança da Estaca: <b>16h00min</b>
            </p>
            <span style={{ fontSize: 12 }}>
              Todo o conselho da Estaca e Alas/Ramos/Grupos
            </span>
          </div>
        </div>
        <section></section>
        <div className="footer-2" style={{ marginLeft: 15 }}>
          <header>
            <p>Sábado 12 de novembro</p>
            {/* <img
            onClick={() =>
              window.open(
                "https://zoom.us/j/96657395179?pwd=bGxIdmVCVysxUkp3eWFDVEVxcVBRQT09"
              )
            }
            src={icon_zoom}
            alt="icon zoom"
          /> */}
          </header>
          <div>
            <p>
              Sessão de Sábado à noite: <b>19h00min</b>
            </p>
            <span style={{ fontSize: 12 }}>
              Todos os membros adultos da Estaca
            </span>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-1" style={{ marginRight: 15 }}>
          <header>
            <p>Domingo 13 de novembro</p>
            {/* <img
            onClick={() =>
              window.open(
                "https://zoom.us/j/96657395179?pwd=bGxIdmVCVysxUkp3eWFDVEVxcVBRQT09"
              )
            }
            src={icon_zoom}
            alt="icon zoom"
          /> */}
          </header>
          <div>
            <p>
              Sessão Geral em Aracati: <b>10h00min</b>
            </p>
            <a
              href="https://www.google.com/url?q=http%3A%2F%2Fmaps.apple.com%2F%3Fq%3DRua%2520Drag%25C3%25A3o%2520do%2520Mar%2C%2520828%2C%2520Centro%2C%2520Centro%2C%252062800-000%2520Aracati%2520-%2520CE%2C%2520Brazil%2C&sa=D&sntz=1&usg=AOvVaw0a6B1VeSlAACGIq2tWSGX9"
              rel="noreferrer"
              target={"_blank"}
            >
              Em Aracati
            </a>
          </div>
        </div>
        <section></section>
        <div className="footer-2" style={{ marginLeft: 15 }}>
          <header>
            <p>Domingo 13 de novembro</p>
            {/* <img
            onClick={() =>
              window.open(
                "https://zoom.us/j/94087406652?pwd=NVVqV1lMNkRJVUNROHExYjAxa0x2dz09"
              )
            }
            src={icon_zoom}
            alt="icon zoom"
          /> */}
          </header>
          <div>
            <p>
              Sessão Geral em Pacajus: <b>16h00min</b>
            </p>
            <a
              href="https://www.google.com/url?q=http%3A%2F%2Fmaps.apple.com%2F%3Fq%3DRua%2520Professora%2520Herminia%2520Mendon%25C3%25A7a%2520157%2C%2520Bairro%2520Centro%2C%252062870%2520000%2520Pacajus%2520-%2520CE%2C%2520Brazil%2C&sa=D&sntz=1&usg=AOvVaw30EqlBH0ntkXl5P3ZI3tv6"
              rel="noreferrer"
              target={"_blank"}
            >
              Na sede da Estaca Pacajus
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
