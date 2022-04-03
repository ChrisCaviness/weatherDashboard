var buttonEl = document.querySelector('#search');
var API_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7f7603204f76a88d4642eb28a01918a9';
var cityName = document.getElementById('#cityName');

//function that calls the API for data
function callWeather(){
  fetch(API_URL).then((response) => {
    console.log(response);
    response.json().then((data) => {
        console.log(data);
    })
    .then(function(data) {
      for(var i = 0; i < data; i++) {
        cityName.textContent = city;
      }
    })
});
}

callWeather();
