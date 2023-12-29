import React from "react";
import s from "./OfertaBiura.module.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import icon_1 from "../../images/rejstracja_spolek.svg";
import icon_2 from "../../images/obsluga_ksiegowa.svg";
import icon_3 from "../../images/kadry.svg";
import icon_4 from "../../images/sprawodzenia.svg";
import icon_5 from "../../images/krs.svg";
import icon_6 from "../../images/kontrolia.svg";
import arrow_left from "../../images/icons8-arrow-32 (1).png";
import arrow_right from "../../images/icons8-arrow-32.png";

export default function OfertaBiura() {
  return (
    <div className={s.container}>
      <div>
        <h2>Oferta biura rachunkowego</h2>
        <div>
          <Splide
            options={{
              type: "loop",
              perPage: 2,
              perMove: 1,
              gap: "60px",
              pagination: false,
            }}
            hasTrack={false}
            aria-label=" "
          >
            <div className={s.castom_wrapper}>
              <SplideTrack className={s.slide_container}>
                <SplideSlide className={s.slide}>
                  <div>
                    <img src={icon_1} alt="Rejestracja spółek oraz JDG" />
                    <h3>Rejestracja spółek oraz JDG</h3>
                    <p>
                      Do zakresu naszych usług należy pomoc w założeniu firmy od
                      porad prawno-podatkowych po rejestracje. Nasze wsparcie
                      nie ogranicza się tylko do samego sporządzenia dokumentów,
                      a jest przede wszystkim merytoryczną rozmową na temat
                      Twoich potrzeb i przedstawieniem możliwości jaka dana
                      forma prawna prowadzenia działalności oferuje.
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className={s.slide}>
                  <div>
                    <img src={icon_2} alt="Obsługa księgowa" />
                    <h3>Obsługa księgowa</h3>
                    <p>
                      Zapewniamy kompleksową obsługę dla firm i spółek z każdej
                      branży, niezależnie od skali i charakteru Państwa
                      działalności. Outsourcing usług księgowych oferowanych
                      przez nasze biuro rachunkowe to mierzalne korzyści dla
                      Państwa biznesu.
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className={s.slide}>
                  <div>
                    <img src={icon_3} alt="Kadry i płace" />
                    <h3>Kadry i płace</h3>
                    <p>
                      Oferujemy Państwu pełen zakres outsourcingu usług
                      płacowych i kadrowych, począwszy od wsparcia w
                      zatrudnieniu pracownika, przygotowywanie dokumentów i
                      bieżącą obsługę kadrową, poprzez naliczanie wynagrodzeń,
                      aż do końcowego rozliczenia listy płac i raportowania.
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className={s.slide}>
                  <div>
                    <img src={icon_4} alt="Sprawozdania finansowe" />
                    <h3>Sprawozdania finansowe</h3>
                    <p>
                      Przygotowanie sprawozdań finansowych spółek,
                      uwzględniające również obecne regulacje dyktowane przez
                      zmiany w przepisach, jak e-sprawozdania i pliki JPK_SF.
                      Usprawniamy także obszar raportowania i informacji
                      zarządczej Państwa firmy.
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className={s.slide}>
                  <div>
                    <img src={icon_5} alt="Aktualizacja KRS" />
                    <h3>Aktualizacja KRS</h3>
                    <p>
                      Decydując się na naszą pomoc w aktualizacji danych spółki
                      w KRS mogą Państwo liczyć na pełne wsparcie oraz
                      dopełnienie niezbędnych formalności aktualizacyjnych (np.
                      zmiana siedziby spółki, zmiana adresu spółki, zmiana
                      danych wspólników, zmiana nazwy spółki itp.).
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className={s.slide}>
                  <div>
                    <img src={icon_6} alt="Wsparcie w czasie kontroli" />
                    <h3>Wsparcie w czasie kontroli</h3>
                    <p>
                      Bierzemy udział w postępowaniu kontrolnym, prowadzonym
                      przez organy skarbowe, dotyczącym okresu prowadzenia przez
                      Finance Expert ksiąg podatnika i odnoszącym się do tych
                      czynności.
                    </p>
                  </div>
                </SplideSlide>
              </SplideTrack>
              <div className={s.splide__arrows}></div>
            </div>
          </Splide>
        </div>
      </div>
    </div>
  );
}
