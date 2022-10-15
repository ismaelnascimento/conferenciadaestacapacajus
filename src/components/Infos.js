import React, { useState } from "react";

// css
import "../styles/infos.css";

// aspas

import aspas from "../assets/images/aspas.png";
import alder_uchtdorf from "../assets/images/elder-uchtdorf.jpg";

function Infos() {
  const buttons = [
    {
      link: "#--Antes--",
      title: "Antes",
    },
    {
      link: "#--Durante--",
      title: "Durante",
    },
    {
      link: "#--Depois--",
      title: "Depois",
    },
  ];
  const passosAntes = [
    {
      title: "Jejue e ore por revelação pessoal;",
    },
    {
      title: "Pense nas perguntas que você tem em mente e que o preocupam;",
    },
    {
      title:
        "Anote-as em algum local e depois ouça as respostas que o Senhor enviará a você por intermédio de Seus servos durante a conferência.",
    },
    {
      title:
        "Abra seu coração e sua mente para ouvir o Senhor. Além de responder às suas perguntas, o Senhor pode desejar falar outras coisas a você. Seja receptivo a qualquer mensagem que Ele possa ter para você;",
    },
    {
      title:
        "Use as mídias sociais para convidar os familiares e amigos para a Conferência Geral.",
    },
  ];
  const passosDurante = [
    {
      title:
        "Seja reverente. O GEE fala que reverência é uma atitude de profundo respeito pelas coisas sagradas;",
    },
    {
      title:
        "Se livre de qualquer distrações que possam lhe impedir de ouvir a voz mansa do Espírito(eletrônicos, redes sociais, conversas paralelas etc);",
    },
    {
      title: "Tenha uma oração em seu coração durante as orações e discursos;",
    },
    {
      title:
        "Tenha um bloco/caderno de anotações para registrar suas revelações pessoais. Lembre-se: o foco não deve ser o de anotar o que está sendo falado pelo orador, mas sim o que está sendo anotado nas tábuas de carne de seu coração através do Espírito Santo;",
    },
    {
      title:
        "Quando a inspiração aparecer, esteja atento e faça metas de como melhorar em várias áreas de sua vida.",
    },
  ];
  const passosDepois = [
    {
      title: "Reveja suas anotações;",
    },
    {
      title: "Pondere sobre cada revelação que você recebeu;",
    },
    {
      title: "Faça metas concretas de como mudar o que precisa ser mudado;",
    },
    {
      title:
        "Abra seu coração e sua mente para ouvir o Senhor. Além de responder às suas perguntas, o Senhor pode desejar falar outras coisas a você. Seja receptivo a qualquer mensagem que Ele possa ter para você;",
    },
    {
      title:
        "Aja com fé, acreditando que o Senhor estará ao seu lado em cada ação justa.",
    },
  ];
  const [activeButton, setActivaButton] = useState(0);

  return (
    <div className="app-infos">
      <p>
        <div></div>Como se preparar para a conferência da Estaca
      </p>

      <div className="app-infos--links">
        {buttons.map((item, i) => (
          <a
            style={{
              color: activeButton === i ? "#222" : "#777",
              fontWeight: activeButton === i ? "500" : "",
            }}
            onClick={() => setActivaButton(i)}
            href={item.link}
          >
            <div
              style={{
                background: activeButton === i ? "#333" : "",
                color: activeButton === i ? "#fff" : "",
              }}
            >
              {i + 1}
            </div>
            {item.title}
          </a>
        ))}
      </div>

      <div id="--Antes--" className="app-infos--content">
        <p>Antes da Conferência</p>

        <div>
          {passosAntes.map((item, i) => (
            <p>
              <div>{i + 1}</div>
              {item.title}
            </p>
          ))}
        </div>

        <section>
          <h5>Encontre Respostas para Suas Perguntas</h5>
          <iframe
            src="//players.brightcove.net/710874264001/default_default/index.html?videoId=4138080264001"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </section>

        <span>
          <div>
            <img src={alder_uchtdorf} alt="" />
          </div>
          <img src={aspas} alt="" />
          <span>
            <b>O élder Dieter F. Uchtdorf ensinou:</b> “As respostas para suas
            orações específicas podem vir diretamente de um discurso ou de uma
            frase em particular. Pode ser que as respostas lhes cheguem por meio
            de uma palavra, expressão ou hino, inexplicavelmente. Um coração
            pleno de gratidão pelas bênçãos da vida e um desejo sincero de ouvir
            e seguir as palavras de conselho prepararão o caminho para a
            revelação pessoal” (“Conferência geral: Bênção singular”, A Liahona,
            setembro de 2011, p. 4).
          </span>
        </span>
      </div>
      <div id="--Durante--" className="app-infos--content">
        <p>Durante a Conferência</p>

        <div>
          {passosDurante.map((item, i) => (
            <p>
              <div>{i + 1}</div>
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <div id="--Depois--" className="app-infos--content">
        <p>Depois da Conferência</p>

        <div>
          {passosDepois.map((item, i) => (
            <p>
              <div>{i + 1}</div>
              {item.title}
            </p>
          ))}
        </div>

        <section>
          <h5>OUVIR ⇾ IR ⇾ FAZER</h5>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FBAUjEMN_uI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </div>
    </div>
  );
}

export default Infos;
