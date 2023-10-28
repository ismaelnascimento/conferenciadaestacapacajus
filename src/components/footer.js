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
            <p>Sábado 11 de novembro</p>
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
            <div className="footer-progamation">
              <p>15h</p>{" "}
              <div>
                <p>Reunião de Liderança da Estaca:</p>
                <a
                  href="https://www.google.com/url?q=http%3A%2F%2Fmaps.apple.com%2F%3Fq%3DRua%2520Professora%2520Herminia%2520Mendon%25C3%25A7a%2520157%2C%2520Bairro%2520Centro%2C%252062870%2520000%2520Pacajus%2520-%2520CE%2C%2520Brazil%2C&sa=D&sntz=1&usg=AOvVaw30EqlBH0ntkXl5P3ZI3tv6"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Sede da Estaca em Pacajus
                </a>
              </div>
            </div>
            <div className="footer-progamation">
              <p>17h15min</p>{" "}
              <div>
                <p>Sessão de Sábado à noite:</p>
                <a
                  href="https://www.google.com/url?q=http%3A%2F%2Fmaps.apple.com%2F%3Fq%3DRua%2520Professora%2520Herminia%2520Mendon%25C3%25A7a%2520157%2C%2520Bairro%2520Centro%2C%252062870%2520000%2520Pacajus%2520-%2520CE%2C%2520Brazil%2C&sa=D&sntz=1&usg=AOvVaw30EqlBH0ntkXl5P3ZI3tv6"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Sede da Estaca em Pacajus
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <section /> */}
        <div className="footer-2">
          <header>
            <p>Domingo 12 de novembro</p>
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
            <div className="footer-progamation">
              <p>9h</p>{" "}
              <div>
                <p>Sessão Geral em Aracati:</p>
                <a
                  href="https://www.google.com/url?q=http%3A%2F%2Fmaps.apple.com%2F%3Fq%3DRua%2520Drag%25C3%25A3o%2520do%2520Mar%2C%2520828%2C%2520Centro%2C%2520Centro%2C%252062800-000%2520Aracati%2520-%2520CE%2C%2520Brazil%2C&sa=D&sntz=1&usg=AOvVaw0a6B1VeSlAACGIq2tWSGX9"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Capela de Aracati
                </a>
              </div>
            </div>
            <div className="footer-progamation">
              <p>16h</p>{" "}
              <div>
                <p>Sessão Geral em Pacajus:</p>
                <a
                  href="https://www.google.com/url?q=http%3A%2F%2Fmaps.apple.com%2F%3Fq%3DRua%2520Professora%2520Herminia%2520Mendon%25C3%25A7a%2520157%2C%2520Bairro%2520Centro%2C%252062870%2520000%2520Pacajus%2520-%2520CE%2C%2520Brazil%2C&sa=D&sntz=1&usg=AOvVaw30EqlBH0ntkXl5P3ZI3tv6"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Sede da Estaca em Pacajus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
