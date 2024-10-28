const apikey = 'c31676c2e48dd1d84af51cb7057d3031';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input') ;
const searchBtn = document.querySelector('.search button') ;

const wetherIcon = document.querySelector('.wether-icon');

async function checkWether(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if(response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.wether').style.display = 'none';
  }else{
    var data = await response.json();
  console.log(data);
  document.querySelector('.city').innerHTML = data.name ;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) + "°c" ;
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";


  if (data.weather[0].main == "Clouds") {
    wetherIcon.src = "images/clouds.png";

  }else if(data.weather[0].main == "Clear"){
    wetherIcon.src = "images/clear.png";

  }
  else if(data.weather[0].main == "Rain"){
    wetherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    wetherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    wetherIcon.src = "images/mist.png";
  }

  document.querySelector('.wether').style.display = 'block';
  document.querySelector('.error').style.display = 'none';

  }
  
}
searchBtn.addEventListener('click',()=>{
  checkWether(searchBox.value);
  searchBox.value = '';
  searchBox.focus();

});



