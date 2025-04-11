const units = "&units=Imperial";
const appid = "&appid=a34ada9eca3c4aa161bc70a337446dc2";

const curURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad' +units +appid;
const forURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=-117.3506&exclude=current,hourly,minutely,alerts' +units +appid;

async function apiFetch(apiURL, curFor) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        displayResults(data, curFor);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function  displayResults(weatherData, curFor = "current") {
    // Current Weather
    if(curFor == "current"){
        const temp = weatherData.main.temp.toFixed(0);
        document.getElementById('temp').textContent = temp +"°F";
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
        const captionDesc = document.getElementById('conditions');
        const humidEl = document.getElementById('humidity');
        const humidAPI = weatherData.main.humidity;
        const weathIMG = document.getElementById('weath-img');
        weathIMG.setAttribute('src', iconsrc);
        weathIMG.setAttribute('alt', desc);
        humidEl.textContent = `Humidity: ${humidAPI}%` ;
        captionDesc.textContent = desc;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
    }
    // Forecast
    else{
        const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        // Get relevant API info
        const date = new Date();
        const today = date.getDay();

        const hi1 = weatherData.daily[0].temp.max.toFixed(0);
        const hi2 = weatherData.daily[1].temp.max.toFixed(0);
        const hi3 = weatherData.daily[2].temp.max.toFixed(0);

        const lo1 = weatherData.daily[0].temp.min.toFixed(0);
        const lo2 = weatherData.daily[1].temp.min.toFixed(0);
        const lo3 = weatherData.daily[2].temp.min.toFixed(0);

        // DOM elements to be manipulated
        const day1 = document.getElementById("dOW1");
        const day2 = document.getElementById("dOW2");
        const day3 = document.getElementById("dOW3");
        if (today == 0 && 1 && 3 && 4) {
          day1.textContent = weekday[today+1];
          day2.textContent = weekday[today+2];
          day3.textContent = weekday[today+3];
        } else if (today== 5) {
          day1.textContent = weekday[6]; //5 (saturday)
          day2.textContent = weekday[0]; //0 (sunday)
          day3.textContent = weekday[1]; //1 (monday)
        } else if (today == 6) {
          day1.textContent = weekday[0]; //5 (saturday)
          day2.textContent = weekday[1]; //0 (sunday)
          day3.textContent = weekday[2]; //1 (monday)
        }


        
        //5 0 1 (today = 4)

        const sufFar = " °F"
        const hiEl1 = document.getElementById("hi1");
        hiEl1.textContent = hi1 +sufFar;
        const hiEl2 = document.getElementById("hi2");
        hiEl2.textContent = hi2 +sufFar;
        const hiEl3 = document.getElementById("hi3");
        hiEl3.textContent = hi3 +sufFar;

        const loEl1 = document.getElementById("lo1");
        loEl1.textContent = lo1 +sufFar;
        const loEl2 = document.getElementById("lo2");
        loEl2.textContent = lo2 +sufFar;
        const loEl3 = document.getElementById("lo3");
        loEl3.textContent = lo3 +sufFar;


    }
    

}

apiFetch(curURL, "current");
apiFetch(forURL, "forecast");