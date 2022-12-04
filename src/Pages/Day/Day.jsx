import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Day = (groupDay) => {
  const [group, setGroup] = useState(undefined);
//   const [matches, setMatches] = useState(undefined);

//   useEffect(() => {
//     setDay(group[0]);
//     setMatches(group[1]);
//   }, []);

    useEffect(() => {
        setGroup(groupDay);
    },[])

    useEffect(() => console.log(group),[group])

  return (
    <SwiperSlide>
        {/* {group && <>
        {console.log(group[0])}
          <div className="header__day">{groupDay[0]}</div>
          <div className="matches__day"></div>    
          </>} */}
    </SwiperSlide>
  );
};

export default Day;
