const weatherInfoContainer = document.querySelector('.weatherInfo-container');
const weatherIcon = document.querySelector('#weather-icon');
const weatherInfo = document.querySelector('.weather-info');
const forecastInfo = document.querySelector('.forecastInfo');

// 9.054071295619162, 7.497245344173042

const key = "f8b61c6a8480f40134110dc75c051335" 
const lat = "9.0540"
const long = "7.4972"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=Abuja&appid=${key}&units=metric`
 

 
 
async function fetchAbujaData() {
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(await response.text());
        }
        
        const data = await response.json();
        // console.log(data);
        displayResults(data);

    } catch (error) {
        console.log(error);
    };
    
    
    
    
    function displayResults(data) {
        //weather icon
        weatherIcon.innerHTML = `${data.weather[0].icon}`;
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/10n@2x.png');


        //build other weather info
        weatherInfo.innerHTML = "";

        let listElement1 = document.createElement('li');
        listElement1.innerHTML = `${data.main.temp}&deg;C`;

        let listElement2 = document.createElement('li');
        listElement2.style.textTransform = "capitalize";
        listElement2.innerHTML = `${data.weather[0].description}`

        let listElement3 = document.createElement('li');
        listElement3.innerHTML = `High: ${data.main.temp_max}&deg;`
        
        let listElement4 = document.createElement('li');
        listElement4.innerHTML = `Low: ${data.main.temp_min}&deg;`

        let listElement5 = document.createElement('li');
        listElement5.innerHTML = `Humidity: ${data.main.humidity}%`
        

        let sunrise = data.sys.sunrise; 
        let sunset = data.sys.sunset;

        let convertSunrise = new Date(sunrise * 1000).toLocaleTimeString();
        let convertSunset = new Date(sunset * 1000).toLocaleTimeString();
        
        let listElement6 = document.createElement('li');
        listElement6.innerHTML = `Sunrise: ${convertSunrise}`
        
        let listElement7 = document.createElement('li');
        listElement7.innerHTML = `Sunset: ${convertSunset}`;

        
        weatherInfo.append(listElement1, listElement2, listElement3, listElement4, listElement5, listElement6, listElement7);

    }
}

fetchAbujaData();










async function getWeatherForecast() {
    try {
        const response = await fetch(url2);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data2 = await response.json();
        console.log(data2);
        displayWeatherForcast(data2);

    } catch (error) {
        console.log(error);
    }


    function displayWeatherForcast(data2){
        forecastInfo.innerHTML = '';

        let todayInfo = document.createElement('li');
        let tueInfo = document.createElement('li');
        let wedInfo = document.createElement('li');

        todayInfo.innerHTML = `Today: ${data2.list[1].main.temp}°C`;
        tueInfo.innerHTML = `Tuesday: ${data2.list[2].main.temp}°C`;
        wedInfo.innerHTML = `Wednesday: ${data2.list[3].main.temp}°C`;
        
        forecastInfo.append(todayInfo, tueInfo, wedInfo);        
    }
    
}

getWeatherForecast();




//Dynamically display members in spotlight section
const url3 = "data/members.json"
const companiesContainer = document.querySelector('#companies-container')

async function getMembers() {
    try{
        const response = await fetch(url3);

        if (!response.ok) {
            throw new Error (response.statusText)
        }

        const data3 = await response.json()
        // console.log(data3);
        let allCompanies = data3.companies
        displayMembers(allCompanies);

    } catch (error) {
        console.log(error);
    }


    function displayMembers(allCompanies) {

        // filters to return gold or silver       
        let filterMembers = allCompanies.filter(company => {
            const membership =  company.membershipLevels[0];
            return membership.silver || membership.gold;
        })
        
        // randomly select three members with either gold or silver membership
        let randomMembers = filterMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        randomMembers.forEach(company => {
            const membership = company.membershipLevels[0].silver ? 'Silver 🥈' : 'Gold 🥇'
            
            const showCompanies = document.createElement('div');
            showCompanies.classList.add('showCompanies');

            showCompanies.innerHTML =
            `
            <div class="showCompanies">

                <div class="comp-heading">
                    <h2>${company.name}</h2>
                    <p>${company.tagLine}</p>
                </div>

                <div class="companyInfo">
                    <p>Phone: ${company.phoneNumbers}</p>
                    <p>Website: <a href="${company.websitesUrls}" >${company.websitesUrls}</a> </p>
                    <p>Membership: ${membership}</p>
                </div>

            </div>

            `;

            companiesContainer.appendChild(showCompanies);
        });
        
        




        
    }

}

getMembers();