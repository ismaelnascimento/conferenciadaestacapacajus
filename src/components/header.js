import React, { useEffect, useRef, useState } from "react";

// css
import "../styles/header.css";

// back
import back from "../assets/images/banner2023/BannerCristo.png";

//
import image_elder from "../assets/images/banner2023/Foto Elder Cabral.png";

function Header() {
  const [viewVideo, setViewVideo] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef();
  const video =
    "https://firebasestorage.googleapis.com/v0/b/conferenciadaestacapacajus.appspot.com/o/Vinde%20A%20Cristo_1min.mp4?alt=media&token=637a228b-b354-4b0b-b142-e4676fa81f91&_gl=1*1er5tnp*_ga*MjAyNTczMzY0NS4xNjg0ODA1MTcy*_ga_CW55HF8NVT*MTY5ODUyMTI1NS4xNy4xLjE2OTg1MjEzODUuNTcuMC4w";

  return (
    <div className="app-header">
      <div className="app-header__banner">
        {viewVideo ? (
          <>
            {muted ? (
              <IconWithoutVolume
                onClick={() => {
                  setMuted(!muted);
                  if (videoRef) {
                    videoRef.current.volume = 0.2;
                  }
                }}
              />
            ) : (
              <IconVolume
                onClick={() => {
                  setMuted(!muted);
                }}
              />
            )}
            <video
              autoPlay
              muted={muted}
              ref={videoRef}
              onClick={(e) => {
                setMuted(!muted);
                e.target.volume = 0.1;
              }}
              loop
              poster={back}
            >
              <source src={video} type="video/mp4" />
              <source src={video} type="video/ogg" />
            </video>
          </>
        ) : (
          <img src={back} alt="Conversão e Compromisso" />
        )}

        {/* <div className="app-header__banner--text-top">
          <section />
          <p>12&13</p>
          <h5>NOV</h5>
          <span>2022</span>
        </div> */}
        <div className="app-header__banner--text">
          <p>Conversão e Compromisso</p>
          <section />
          <h5>Mosias 5:2</h5>
        </div>
      </div>

      <div className="app-header__content">
        <p>Conferência da</p>
        <h5>ESTACA PACAJUS</h5>

        <section className="app-header__content-elder">
          <div>
            <img src={image_elder} alt="Image_Elder" />
            <section>
              <p>
                Presidida pelo <b>Elder Marcos Cabral</b>
              </p>
              <h5>SETENTA AUTORIDADE DE ÁREA</h5>
            </section>
          </div>
          <section>
            <p>
              E todos clamaram a uma só voz, dizendo:{" "}
              <b>Sim, acreditamos em todas as palavras que nos disseste</b> e
              também{" "}
              <b>
                sabemos que são certas e verdadeiras, por causa do Espírito do
                Senhor Onipotente que efetuou em nós, ou melhor, em nosso
                coração, uma vigorosa mudança,
              </b>{" "}
              de modo que{" "}
              <b>
                não temos mais disposição para praticar o mal, mas, sim, de
                fazer o bem continuamente.
              </b>
            </p>
            <h5>Mosias 5:2</h5>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Header;

const IconWithoutVolume = ({ ...r }) => (
  <svg
    width="24"
    {...r}
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Iconly/Curved/Volume Off">
      <g id="Volume Off">
        <path
          id="Stroke 1"
          d="M8.4035 16.5533C7.32086 16.3028 6.58718 16.4996 5.6835 15.7391C4.67244 14.8801 4.6635 13.4396 4.67244 12.2138C4.6635 10.988 4.67244 9.54751 5.6835 8.68856C6.69455 7.82961 7.49981 8.17856 8.81507 7.74909C10.1214 7.31961 11.9556 4.6533 13.9867 5.85224C14.8098 6.43382 15.293 7.38224 15.4898 9.46698"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 3"
          d="M15.5793 13.6721C15.463 16.6784 14.944 17.8863 13.9867 18.5663C12.9488 19.1837 11.9556 18.7811 11.0698 18.1816"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 5"
          d="M20.2854 4.6709L4.94067 20.0156"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
);

const IconVolume = ({ ...r }) => (
  <svg
    width="24"
    {...r}
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Iconly/Curved/Volume Up">
      <g id="Volume Up">
        <path
          id="Stroke 1"
          d="M19.4358 5.77441C21.9294 9.49441 21.9367 14.4035 19.4358 18.1317"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 3"
          d="M16.989 8.21729C18.2708 10.54 18.2708 13.3746 16.989 15.6891"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Stroke 5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.68237 11.953C2.67964 13.1993 2.68237 14.6611 3.71146 15.5348C4.74146 16.4093 5.55783 16.0484 6.88964 16.4866C8.22237 16.9257 10.0887 19.633 12.1506 18.4102C13.2651 17.6184 13.7906 16.1239 13.7906 11.953C13.7906 7.78204 13.2887 6.30386 12.1506 5.49568C10.0887 4.27386 8.22237 6.98113 6.88964 7.41932C5.55783 7.85841 4.74146 7.4975 3.71146 8.37113C2.68237 9.24477 2.67964 10.7066 2.68237 11.953Z"
          stroke="#130F26"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
  </svg>
);
