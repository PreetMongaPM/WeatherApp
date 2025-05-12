let cityName = 'Ratia';


const city = document.querySelector('.city');
const dateT = document.querySelector('.dateT');
const weatherType = document.querySelector('.weatherType');
const weatherImage = document.querySelector('.weatherImage');

const currTemp = document.querySelector('.currTemp');

const feels = document.querySelector('.feels');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const pressure = document.querySelector('.pressure');

const formatDateTime = (dateTime) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [date, time] = dateTime.split(' ');
    const [year, month, day] = date.split('-');
    return `${parseInt(day)} ${months[parseInt(month) - 1]} ${time}`;
}

const getTime = (dateTime) => {
    const [date, time] = dateTime.split(' ');
    return time;
}

const formatDate = (dateArg) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const [year, month, day] = dateArg.split('-');
    let dateData = new Date(year, month - 1, day); //month is 1 based pm
    let dayReturn = days[dateData.getDay()];

    let dateReturn = `${day}/${month}`;

    return [dayReturn, dateReturn];
}

let imgSrc;


//Main Div Target
const realTimeWeatherData = async (cityName) => {
    const realTimeAPIurl = `https://api.weatherapi.com/v1/current.json?key=db160373b1cf4ec484891822252904&q=${cityName}`;
    try {
        const res = await fetch(realTimeAPIurl);
        const data = await res.json();
        console.log(data);
        city.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
        dateT.innerHTML = formatDateTime(data.location.localtime);
        weatherType.innerHTML = data.current.condition.text;
        imgSrc = data.current.condition.icon;
        weatherImage.innerHTML = `<img src = ${imgSrc}>`;
        currTemp.innerHTML = data.current.temp_c + "°C";
        feels.innerHTML = data.current.feelslike_c + "°C";
        humidity.innerHTML = data.current.humidity + "%";
        windSpeed.innerHTML = data.current.wind_kph + " KPH";
        pressure.innerHTML = data.current.pressure_mb + " mb";

    }
    catch (error) {
        alert('Please enter a valid city name');
    }
}

realTimeWeatherData(cityName);
const hourDiv = document.querySelector('.hourly');
const sevenDay = document.querySelector('.sevenDay');


//Days Div and Hours Div
const forecastWeatherData = async (cityName) => {
    const forecastAPIurl = `https://api.weatherapi.com/v1/forecast.json?key=db160373b1cf4ec484891822252904&q=${cityName}&days=7`;
    try {
        const res = await fetch(forecastAPIurl);
        const data = await res.json();
        const forecastArray = data.forecast.forecastday;
        console.log((forecastArray));

        let dayDate = formatDate(forecastArray[0].date);
        const todayDiv = document.createElement('div');
        todayDiv.classList.add('sevenElem');


        imgSrc = forecastArray[0].day.condition.icon;
        let maxTemp = forecastArray[0].day.maxtemp_c;
        let minTemp = forecastArray[0].day.mintemp_c;
        let rainChance = forecastArray[0].day.daily_chance_of_rain;

        todayDiv.innerHTML = `
                             <p style = "color: white">Today</p>  
                             <p style = "font-size: 8px">${dayDate[1]}</p>
                             <p>${maxTemp}°C</p>
                             <p>${minTemp}°C</p>
                             <img src = ${imgSrc}>
                             <p>${rainChance}%</p>`;
        sevenDay.append(todayDiv);

        for (let i = 1; i < 7; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('sevenElem');
            dayDate = formatDate(forecastArray[i].date);

            imgSrc = forecastArray[i].day.condition.icon;
            maxTemp = forecastArray[i].day.maxtemp_c;
            minTemp = forecastArray[i].day.mintemp_c;
            rainChance = forecastArray[i].day.daily_chance_of_rain;

            newDiv.innerHTML = `<p style = "color: white">${dayDate[0]}</p>
                            <p style = "font-size: 8px">${dayDate[1]}</p>
                             <p>${maxTemp}°C</p>
                             <p>${minTemp}°C</p>
                             <img src = ${imgSrc}>
                             <p>${rainChance}%</p>`;
            sevenDay.append(newDiv);
        }

        let hourArray = forecastArray[0].hour;
        let nextHourArray = forecastArray[1].hour;
        let currHours = getTime(data.location.localtime);


        let nowDiv = document.createElement('div');
        let [hours, minutes] = currHours.split(':');

        let nowHour = parseInt(hours);
        let hourlyTemp = hourArray[nowHour].temp_c;
        imgSrc = hourArray[nowHour].condition.icon;

        nowDiv.classList.add('sevenElem');

        nowDiv.innerHTML = `<p style = "color: white">NOW</p>
                             <p>${hourlyTemp}°C</p>
                             <img src = ${imgSrc}>`

        hourDiv.append(nowDiv);
        nowHour++;

        for (let i = 1; i < 7; i++) {

            if (nowHour == 24) {
                hourArray = nextHourArray;
                nowHour = 0;
            }

            currHours = getTime(hourArray[nowHour].time);
            hourlyTemp = hourArray[i].temp_c;
            imgSrc = hourArray[i].condition.icon;

            nowDiv = document.createElement('div');
            nowDiv.classList.add('sevenElem');
            nowDiv.innerHTML = `<p style = "color: white">${currHours}</p>
                             <p>${hourlyTemp}°C</p>
                             <img src = ${imgSrc}>`
            

            hourDiv.append(nowDiv);
            nowHour++;
        }

    }
    catch (error) {
        alert("Kya kar rhe ho");

    }
}
forecastWeatherData(cityName);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        cityName = searchInput.value.trim();
        searchInput.placeholder = cityName;
        searchInput.value = "";
        sevenDay.innerHTML = "";
        hourDiv.innerHTML = "";

        realTimeWeatherData(cityName);
        forecastWeatherData(cityName);
        e.preventDefault();
    }
}) 