import React from "react";
import finance_logo from "../../images/finance.svg";
import "./FinanceExpert.css";

export default function FinanceExpert() {
  return (
    <div className="wrapper">
      <div className="container">
        <img src={finance_logo} alt="logo" />
        <div className="container_mini">
          <div className="headers">
            <h2>O Finance</h2>
            <h2 className="expert">Expert</h2>
          </div>
          <p className="opis">
            Finance Expert oferuje kompleksowe usługi księgowe oraz usługi
            kadrowe i doradcze dla firm. Nasi pracownicy posiadają należyte
            doświadczenie i szkolenia w obrębie swoich kwalifikacji tak, by nie
            bali się Państwo im zaufać i bez obaw zlecili prowadzenie
            księgowości. Obserwujemy na bieżąco zmieniający się rynek oraz
            prawo, dlatego proponowane przez nas rozwiązania oraz prowadzona
            księgowość są zawsze zgodne z obowiązującymi normami i
            najkorzystniejsze dla klienta. Swoje usługi świadczymy również
            zdalnie – współpraca z klientami z całej Polski
          </p>
          <div className="counters">
            <div>
              <p className="distruction">lat doświadczenia</p>
              <div className="line">
                <p className="count">5 +</p>
              </div>
            </div>
            <div>
              <p className="distruction">klientów</p>
              <div className="line">
                <p className="count">130+</p>
              </div>
            </div>
            <div>
              <p className="distruction">dokumentów miesięcznie</p>
              <div className="line">
                <p className="count">2300+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
