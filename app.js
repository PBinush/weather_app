 
// 139f1268dd294698b0c155108240310
fetch(`https:api.weatherapi.com/v1/current.json?key=139f1268dd294698b0c155108240310&q=galle`)
.then(res=>res.json())
.then(data=>{

    let lblCurrentWeather=document.getElementById("lblCurrentWeather");
    let imgCurrentWeather=document.getElementById("imgCurrentWeather");
    let txtTemperature=document.getElementById("txtTemperature");
    let txtWeather=document.getElementById("txtWeather");

    lblCurrentWeather.innerText=data.location.name;
    imgCurrentWeather.innerHTML=`<img src="${data.current.condition.icon}" alt="">`;
    txtTemperature.innerText=data.current.temp_c+" °C";
    txtWeather.innerText=data.current.condition.text;

    let location=document.getElementById("location");
    let temperature=document.getElementById("temperature");
    let humidity=document.getElementById("humidity");
    let windSpeed=document.getElementById("windSpeed");
    let condition=document.getElementById("condition");
    let region=document.getElementById("region");
    let country=document.getElementById("country");

    location.innerText=data.location.tz_id;
    temperature.innerText=data.current.temp_c+" °C";
    humidity.innerText=data.current.humidity+"%";
    windSpeed.innerText=data.current.wind_kph+" KPH";
    condition.innerText=data.current.condition.text;
    region.innerText=data.location.region;
    country.innerText=data.location.country;
})

function search() {
    let location=document.getElementById("txtLocation").value;

    fetch(`https:api.weatherapi.com/v1/current.json?key=139f1268dd294698b0c155108240310&q=${location}`)
    .then(res=>res.json())
    .then(data=>{

        let lblCurrentWeather=document.getElementById("lblCurrentWeather");
        let imgCurrentWeather=document.getElementById("imgCurrentWeather");
        let txtTemperature=document.getElementById("txtTemperature");
        let txtWeather=document.getElementById("txtWeather");

        lblCurrentWeather.innerText=data.location.name;
        imgCurrentWeather.innerHTML=`<img src="${data.current.condition.icon}" alt="">`;
        txtTemperature.innerText=data.current.temp_c+" °C";
        txtWeather.innerText=data.current.condition.text;

        let location=document.getElementById("location");
        let temperature=document.getElementById("temperature");
        let humidity=document.getElementById("humidity");
        let windSpeed=document.getElementById("windSpeed");
        let condition=document.getElementById("condition");
        let region=document.getElementById("region");
        let country=document.getElementById("country");

        location.innerText=data.location.tz_id;
        temperature.innerText=data.current.temp_c+" °C";
        humidity.innerText=data.current.humidity+"%";
        windSpeed.innerText=data.current.wind_kph+" KPH";
        condition.innerText=data.current.condition.text;
        region.innerText=data.location.region;
        country.innerText=data.location.country;
        
}
)};
