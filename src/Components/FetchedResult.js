import React from 'react';
import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

// animation
const fadein = keyframes`
to {
    opacity: 1;
    visibility: visible;
  }
`;

// styled-components
const Results = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
    top: 25px;
    opacity: 0;
    visibility: hidden;
    animation: ${fadein} 0.5s 1.4s forwards;
`;

const LocationAndDate = styled.div`
    flex-basis: 100%;
`;

const Location = styled.h2`
    display: block;
    font-size: 30px;
    color: white;
    text-align: left;
    font-weight: 600;
    padding: 5px 0;
`;

const Date = styled.h2`
    display: block;
    font-size: 20px;
    color: white;
    text-align: left;
    font-weight: 400;
    padding: 5px 0;
    transform: translateY(-15px);
`;

const Temp = styled.h3`
    display: block;
    font-size: 50px;
    font-weight: 400;
    color: #ffffff;
`;

const Desc = styled.h2`
    display: block;
    font-size: 20px;
    color: white;
    text-align: left;
    font-weight: 400;
    padding: 5px 0;
    transform: translateY(-15px);
    text-transform: capitalize;
`;

const FetchedResult = (props) => {
    return(
        <Results>
            <LocationAndDate>
                <Location>
                    {props.weather.city}
                    <br></br>
                    {props.weather.country}
                </Location>
                <Date>
                    {props.weather.date}
                </Date>
            </LocationAndDate>
            <div>
                <Temp>
                    {props.weather.temperature}&#176;C
                </Temp>
                <Desc>
                    {props.weather.description}
                </Desc>
            </div>
                <div>
                    Wind: {props.weather.wind}kph
                </div>  
                <br></br>
                Sunrise: {props.weather.sunrise}
                <br></br>
                Sunset: {props.weather.sunset}
                <br></br>
                Humidity: {props.weather.humidity}%
        </Results>
    );
};

export default FetchedResult;