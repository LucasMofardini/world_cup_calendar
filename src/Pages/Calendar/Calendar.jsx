import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageLogo from "../../Assets/images/2022_FIFA_World_Cup.svg.png";
import Day from "../Day/Day";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style_calendar.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

const Calendar = () => {
  const [groupDays, setGroupDays] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    const res = await fetch("https://copa22.medeiro.tech/matches");
    const data = await res.json();
    const days = getDays(data);
    console.log(days)
    setGroupDays(days);
  };

  const getDays = (matches) => {
    let dayGroupMatches = {};

    matches.forEach((match) => {
      const newDate = new Date(match.date);
      // Colocar os 0 se a data for 1 a 9; Ex : 1, 01
      const day = newDate.getDate().toString().padStart(2, "0");
      const month = (newDate.getMonth() + 1).toString().padStart(2, "0");

      const dateWithMonth = `${day}/${month}`;

      // Se Nao houver nenhum dia ja existente, cria um array com o dia de propriedade;
      if (!dayGroupMatches[dateWithMonth]) dayGroupMatches[dateWithMonth] = [];
      // Coloca os dados no dia/mes
      dayGroupMatches[dateWithMonth].push(match);
    });

    return dayGroupMatches;
  };

  const getImage =  (name) => {
    if(name){
    const newName = name.toString().toLowerCase();
    const flagTreated = `icon-${newName}.svg`;
    //  const response = await import (`../../Assets/images/flags/${flagTreated}`);
    //  console.log(response)
    //  setImage(response.default)
     return flagTreated;
  }
  }

  return (
    <>
      <section className="section-calendar">
        <div className="container-header-calendar">
          <img
            className="img-logo-header-calendar"
            src={ImageLogo}
            alt="Imagem do icone da copa 2022 qatar"
          />{" "}
          <h1>CALENDÁRIO</h1>
        </div>

        {groupDays ? (
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            rewind={true}
            navigation={true}
            pagination={true}
            modules={[Navigation, FreeMode, Pagination]}
            className="mySwiper"
          >
            {Object.entries(groupDays).map((groupDay, index) => {
              const day = groupDay[0];
              const matches = groupDay[1];

              return (
                <SwiperSlide key={index}>
                  <div className="day">
                    <div className="header__day"><span>{day}</span></div>
                    <div className="matches__day">
                      {matches?.map((match, i) => {
                        return(
                            <div className="match" key={i}>
                               <img src={`/flags/${getImage(match.awayTeam.name)}`}/> X <img src={`/flags/${getImage(match.homeTeam?.name)}`} />
                            </div>
                          )
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          "Carregando..."
        )}
      </section>
    </>
  );
};

export default Calendar;
