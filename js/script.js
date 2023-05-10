"use strict";

const url = "https://api.openweathermap.org/data/2.5/";
const apikey = "api key for openweathermap";


const degree = document.getElementById("degree");
const degreemax = document.getElementById("degreemax");
const degreemin = document.getElementById("degreemin");


const city = document.getElementById("city");

const searchbar = document.getElementById("searchbar");

const setQuery = (e) =>{

    if(e.keyCode == "13"){

        getResult(searchbar.value);

    }
}

const getResult = (cityName) =>{
    let query  = `${url}weather?q=${cityName}&appid=${apikey}&units=metric&lang=tr`;
    fetch(query)
    .then(weather => {

        return weather.json()
      })
      .then(displayResult)


}


const displayResult = (result) => {



    if(result.cod == 404 ){
        city.innerText = `Undefined City or State`; 
        degree.innerText = `Sıcaklık: 0°`;
        degreemax.innerText = `En Yüksek: 0°`;
        degreemin.innerText = `En Düşük: 0°`;
    }
    else if(searchbar.value.length < 1 && result.cod == 400){
        city.innerText = `Search not found`; 
        degree.innerText = `Sıcaklık: 0°`;
        degreemax.innerText = `En Yüksek: 0°`;
        degreemin.innerText = `En Düşük: 0°`;
    }
    else{
        city.innerText = `${result.name}` ;
        degree.innerText = `Sıcaklık: ${result.main.temp}°`;
        degreemax.innerText = `En Yüksek: ${result.main.temp_max}°`;
        degreemin.innerText = `En Düşük: ${result.main.temp_min}°`;
    }
    console.log(result)


    if(result.main.temp < 20){
        degree.style.color = "#3fff00"
    }

    else
    (

        degree.style.color = "red"
    )


}

searchbar.addEventListener("keypress", setQuery);