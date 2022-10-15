import React, { useState, useEffect } from "react";

// ...
import Count from "../components/Count";
import Header from "../components/header";
import Footer from "../components/footer";
import Infos from "../components/Infos";

// icons
import { SiGithub } from "react-icons/si";

function Index() {
  const [top, setTop] = useState(false);
  const [positionScrool, setPositionScrool] = useState();

  useEffect(() => {
    var element = document.getElementById("content");

    const eventScrool = () => {
      if (positionScrool > 500) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    element.addEventListener("scroll", eventScrool);
    return () => {
      element.removeEventListener("scroll", eventScrool);
    };
  }, [positionScrool]);

  const scollPos = () => {
    var element = document.getElementById("content").scrollTop;
    setPositionScrool(element);
  };

  return (
    <div className="app">
      {/* CONTENT */}
      <div onScroll={() => scollPos()} id="content" className="app-content">
        <Header />
        <Count />
        <Footer />
        <Infos />
        <div className="app-footer">
          by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/maell_nascimento/"
          >
            Ismael Nascimento
          </a>{" "}
          <SiGithub
            color="#333"
            onClick={() =>
              window.open(
                "https://github.com/ismaelnascimento/conferenciadaestacapacajus"
              )
            }
          />
        </div>
      </div>

      <div
        onClick={() =>
          document
            .getElementById("content")
            .scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
        style={{ bottom: top ? "15px" : "-200px" }}
        className="app--button_top"
      >
        <svg
          width="29"
          height="29"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M11.7257 4.25L11.7257 19.25"
            stroke="#333"
            stroke-width="1.5"
            stroke-linecap="round"
            className="app--button_top-path"
            stroke-linejoin="round"
          />
          <path
            d="M5.70131 10.2998L11.7253 4.2498L17.7503 10.2998"
            stroke="#333"
            stroke-width="1.5"
            stroke-linecap="round"
            className="app--button_top-path"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Index;
