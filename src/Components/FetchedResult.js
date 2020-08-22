import React from 'react';
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


const FetchedResult = (props) => {
    return(
        <div>
            Fetching Data from the server...
                <br></br>
                City: {props.weather.city}
                <br></br>
                Country: {props.weather.country}
                <br></br>
                Temperature: {props.weather.temperature}
                <br></br>
                Date: {props.weather.date}
                <br></br>
                Description: {props.weather.description}
                <br></br>
                Highest Temperature: {props.weather.high}
                <br></br>
                Lowest Temperature: {props.weather.low}
                <br></br>
                Wind: {props.weather.wind}
                <br></br>
                Sunrise: {props.weather.sunrise}
                <br></br>
                Sunset: {props.weather.sunset}
                <br></br>
                Humidity: {props.weather.humidity}%
        </div>
    );
};

export default FetchedResult;