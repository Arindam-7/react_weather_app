import React, {Component} from 'react';
import './App.css';
import Search from './Components/Search/Search';
import FetchedResult from './Components/FetchedResult';

class App extends Component {
  state = {
    value: '',
    weatherInformation: [],
    error: false,
  };

  cityInput = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  
  getWeatherHandler = (e) => {
    const key = 'df32170d02c1a5e691e2d1acb4d1c72e';

    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${key}&units=metric`;
    const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&APPID=${key}&units=metric`;

    Promise.all([fetch(weatherAPI), fetch(forecastAPI)])
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
      const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0,4);
      const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0,4);

      const weatherInfo = {
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
        weatherInformation: weatherInfo,
        error: false,
      });
    })
    .catch(error => {
      console.log(error);

      this.setState({
        error: true,
      });
    });

    e.preventDefault();
  }
  

  render(){
    const { value, weatherInformation } = this.state;
    return (
      <div>
        <h1 className="heading">Weather App</h1>
        <div className="wrapper">
          <Search value={value} change={this.cityInput} getWeather={this.getWeatherHandler} />
          <FetchedResult value={value} weather={weatherInformation} />
        </div>
      </div>
    );
  }
}

export default App;
