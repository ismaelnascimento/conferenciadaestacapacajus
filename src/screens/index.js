import React from "react";

// ...
import Count from "../components/Count";
import Header from "../components/header";
import Footer from "../components/footer";

// icons
import { SiGithub } from "react-icons/si";

function index() {
  return (
    <div className="app">
      {/* CONTENT */}
      <div className="app-content">
        <Header />
        <Count />
        <Footer />
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
                "https://github.com/ismaelnascimento/Conferencia-Semestral-da-Estaca-Pacajus-Brasil-de-Siao"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default index;
