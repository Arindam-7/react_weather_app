import React, {Component} from 'react';
import './App.css';
import Search from './Components/Search';


class App extends Component {
  state = {
    value: 'malda',
    weatherInformation: null
  };

  cityInput = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  getWeatherHandler = (e) => {
    e.preventDefault();
    const { value } = this.state;
    const key = "df32170d02c1a5e691e2d1acb4d1c72e";

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${key}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${key}&units=metric`;

 /*   const promise1 = axios.get(weather);
    const promise2 = axios.get(forecast);

    Promise.all([promise1, promise2])
    .then(([response1, response2]) => {
      return Promise.all([response1, response2]);
    })
  */

  Promise.all([fetch(weather), fetch(forecast)])
    .then(([response1, response2]) => {
      return Promise.all([response1.json(), response2.json()]);
    })
    .then(([data1, data2]) => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'Nocvember',
        'December',
      ];
      const days = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
      ];
      const todayDate = new Date();
      const date = `${days[todayDate.getDay()]} 
                    ${todayDate.getDate()} 
                    ${months[todayDate.getMonth()]}
                   `;
      const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0,5);
      const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0,5);

      const weatherInformation = {
        city: data1.name,
        country: data1.sys.country,
        temperature: data1.main.temp,
        high: data1.main.temp_max,
        low: data1.main.temp_min,
        description: data1.weather[0].description,
        main: data1.main.temp,
        clouds: data1.clouds.all,
        humidity: data1.main.humidity,
        wind: data1.wind.speed,
        date,
        sunrise,
        sunset,
        forecast: data2.list
      };
      this.setState({
        weatherInformation
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){
    return (
      <div>
        <h1>Weather App</h1>
        <Search value={this.state.value} change={this.cityInput} getWeather={this.getWeatherhandler} />
      </div>
    );
  }
}

export default App;
