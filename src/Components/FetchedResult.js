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
const Upper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
`;

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

const LocationAndDateWrapper = styled.div`
    flex-basis: 50%;
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

const TempWrapper = styled.div`
    flex-basis: 50%;
`;
const Temp = styled.h3`
    display: block;
    font-size: 50px;
    font-weight: 400;
    color: #ffffff;
`;

const WeatherIconStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 70px;
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

const Wrapper = styled.div`
    display: flex;
    flex-basis: calc(100% / 3);
    padding: 10px;
`;

const OtherDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    padding: 10px 0;
    margin: 20px 0;
    border-radius: 10px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 40px;
    color: #f4f1de;
    font-weight: 600;
`;



const FetchedResult = (props) => {
    // weather icons
    let weatherIcon = null;

    if (props.weather.main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (props.weather.main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (props.weather.main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (props.weather.main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (props.weather.main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (props.weather.main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    }

    return(
            <Results>
                <Upper>
                    <LocationAndDateWrapper>
                        <Location>
                            {props.weather.city}
                            <br></br>
                            {props.weather.country}
                        </Location>
                        <Date>
                            {props.weather.date}
                        </Date>
                    </LocationAndDateWrapper>
                    <TempWrapper>
                        <WeatherIconStyle>
                            {weatherIcon}
                        </WeatherIconStyle>
                        <Temp>
                            {props.weather.temperature}&#176;C
                        </Temp>
                        <Desc>
                            {props.weather.description}
                        </Desc>
                    </TempWrapper>
                </Upper>
            <OtherDetails>
                <Wrapper>
                    Wind: {props.weather.wind}kph
                </Wrapper>  
                <Wrapper>
                    Sunrise: {props.weather.sunrise} am
                </Wrapper>  
                <Wrapper>  
                    Sunset: {props.weather.sunset} pm
                </Wrapper>  
                <Wrapper>  
                    Humidity: {props.weather.humidity}%
                </Wrapper>  
                <Wrapper>  
                    Cloud: {props.weather.clouds}%
                </Wrapper>  
                <Wrapper>  
                    Feels Like: {props.weather.feelslike}&#176;C
                </Wrapper>  
            </OtherDetails>
        </Results>
    );
};

export default FetchedResult;