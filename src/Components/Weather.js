// import React from 'react';

// class Weather extends React.Component {
//     constructor(){
//         super();
        
//         this.state = { weather: [] };
//         this.getWeather = this.getWeather.bind(this);
//         const API_KEY = '32a7a32fbff8e508c631869e5f998fc2';
//     }
//     getWeather() {
//         fetch(`api.openweathermap.org/data/2.5/weather?zip=84095,us&APPID=${API_KEY}`)
//          .then(response => response.json())
//          .then(json => {
//              this.setState({ weather: json.data });
//          });
//         } 
//         componentDidMount() {
//             this.getWeather();
//         }
//     }       

// export default Weather;