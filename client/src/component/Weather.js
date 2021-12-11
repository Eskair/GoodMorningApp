import React, { useEffect, useState, useContext } from "react";
import { currentUserContext } from "./CurrentUserContext";
import styled from "styled-components";

let dummyData = {
  last_updated_epoch: 1639165500,
  last_updated: 2021 - 12 - 10,
  14: 45,
  temp_c: -5.8,
  temp_f: 21.6,
  is_day: 1,
  condition: {
    text: "Sunny",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    code: 1000,
  },
  wind_mph: 6.9,
  wind_kph: 11.2,
  wind_degree: 30,
  wind_dir: "NNE",
  pressure_mb: 1018,
  pressure_in: 30.05,
  precip_mm: 0.1,
  precip_in: 0,
  humidity: 84,
  cloud: 0,
  feelslike_c: -10.5,
  feelslike_f: 13.1,
  vis_km: 10,
  vis_miles: 6,
  uv: 1,
  gust_mph: 9.2,
  gust_kph: 14.8,
};

const Weather = () => {
  const {
    user: { city },
  } = useContext(currentUserContext);
  const [dailyForcast, setDailyForcast] = useState(dummyData);
  console.log("dailyforcast", dailyForcast);

  // useEffect(() => {
  //   fetch("/api/weather", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       city: "montreal",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDailyForcast(data.data.current);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <MasterContainer>
      <Background src="https://res.cloudinary.com/dhj5ncbxs/image/upload/v1639171975/dai4sky3_zo81od.jpg" />
      <Title>The weather today is:</Title>
      <Rep>
        <Text>{dailyForcast.condition.text}</Text>
        <Image src={dailyForcast.condition.icon} />
      </Rep>
      <Temp>
        <Actual>
          Temprature is {dailyForcast.temp_c} <span>&deg;c</span>
        </Actual>
        <FeelsLike>
          Feels like {dailyForcast.feelslike_c} <span>&deg;c</span>
        </FeelsLike>
      </Temp>
    </MasterContainer>
  );
};

const MasterContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  /* background-color: lightgreen; */
  align-items: center;
  border: 2px solid var(--morning-background);
  /* border-bottom: 2px solid var(--morning-background); */
  /* padding: 10px 0; */
  flex: 0.2;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Background = styled.img`
  position: absolute;
  width: inherit;
  height: 100%;
  z-index: -100;
  opacity: 0.9;
  /* background: rgba(0, 0, 0, 0.6);
  opacity: 0; */
  border-radius: 5px;
`;

const Title = styled.div`
  margin-top: 15px;
  font-size: 15px;
`;
const Rep = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Text = styled.div`
  font-weight: 700;
`;
const Image = styled.img`
  /* width: 20px; */
`;
const Temp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Actual = styled.div`
  font-weight: 700;
`;

const FeelsLike = styled.div`
  font-weight: 700;
`;
export default Weather;
