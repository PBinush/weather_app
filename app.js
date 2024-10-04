
//  ---------------------current weather start-------------------------------
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

fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=galle`)
.then(res=>res.json())
.then(data=>{
let fDate1=document.getElementById("fDate1");
let imgFWeather1=document.getElementById("imgFWeather1");
let txtFTemperature1=document.getElementById("txtFTemperature1");
let txtFWeather1=document.getElementById("txtFWeather1");

let fDate2=document.getElementById("fDate2");
let imgFWeather2=document.getElementById("imgFWeather2");
let txtFTemperature2=document.getElementById("txtFTemperature2");
let txtFWeather2=document.getElementById("txtFWeather2");

let fDate3=document.getElementById("fDate3");
let imgFWeather3=document.getElementById("imgFWeather3");
let txtFTemperature3=document.getElementById("txtFTemperature3");
let txtFWeather3=document.getElementById("txtFWeather3");

let fDate4=document.getElementById("fDate4");
let imgFWeather4=document.getElementById("imgFWeather4");
let txtFTemperature4=document.getElementById("txtFTemperature4");
let txtFWeather4=document.getElementById("txtFWeather4");

let fDate5=document.getElementById("fDate5");
let imgFWeather5=document.getElementById("imgFWeather5");
let txtFTemperature5=document.getElementById("txtFTemperature5");
let txtFWeather5=document.getElementById("txtFWeather5");

const d = new Date();
let year= d.getFullYear();
let month=d.getMonth()+1;
let day=d.getDate();

var day1 = d.getDate()+1;
var day2 = d.getDate()+2;
var day3 = d.getDate()+3;
var day4 = d.getDate()+4;
var day5 = d.getDate()+5;



fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=galle&dt=${year}-${month}-${day1}`)
.then(res=>res.json())
.then(data=>{
    data.forecast.forecastday.forEach(element => {
        fDate1.innerHTML=element.date;
        imgFWeather1.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
        txtFTemperature1.innerHTML=element.day.avgtemp_c+" °C";
        txtFWeather1.innerHTML=element.day.condition.text;
    });
});
fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=galle&dt=${year}-${month}-${day2}`)
.then(res=>res.json())
.then(data=>{
    data.forecast.forecastday.forEach(element => {
        fDate2.innerHTML=element.date;
        imgFWeather2.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
        txtFTemperature2.innerHTML=element.day.avgtemp_c+" °C";
        txtFWeather2.innerHTML=element.day.condition.text;
    });
});
fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=galle&dt=${year}-${month}-${day3}`)
.then(res=>res.json())
.then(data=>{
    data.forecast.forecastday.forEach(element => {
        fDate3.innerHTML=element.date;
        imgFWeather3.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
        txtFTemperature3.innerHTML=element.day.avgtemp_c+" °C";
        txtFWeather3.innerHTML=element.day.condition.text;
    });
});
fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=galle&dt=${year}-${month}-${day4}`)
.then(res=>res.json())
.then(data=>{
    data.forecast.forecastday.forEach(element => {
        fDate4.innerHTML=element.date;
        imgFWeather4.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
        txtFTemperature4.innerHTML=element.day.avgtemp_c+" °C";
        txtFWeather4.innerHTML=element.day.condition.text;
    });
});
fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=galle&dt=${year}-${month}-${day5}`)
.then(res=>res.json())
.then(data=>{
    data.forecast.forecastday.forEach(element => {
        fDate5.innerHTML=element.date;
        imgFWeather5.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
        txtFTemperature5.innerHTML=element.day.avgtemp_c+" °C";
        txtFWeather5.innerHTML=element.day.condition.text;
    });
});

});


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
        imgCurrentWeather.innerHTML=`<img src="${data.current.condition.icon}" alt="" >`;
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
        
    //---------------------current weather End-------------------------------

    //---------------------forecast weather start-------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=${location}`)
    .then(res=>res.json())
    .then(data=>{
    let fDate1=document.getElementById("fDate1");
    let imgFWeather1=document.getElementById("imgFWeather1");
    let txtFTemperature1=document.getElementById("txtFTemperature1");
    let txtFWeather1=document.getElementById("txtFWeather1");

    let fDate2=document.getElementById("fDate2");
    let imgFWeather2=document.getElementById("imgFWeather2");
    let txtFTemperature2=document.getElementById("txtFTemperature2");
    let txtFWeather2=document.getElementById("txtFWeather2");
   
    let fDate3=document.getElementById("fDate3");
    let imgFWeather3=document.getElementById("imgFWeather3");
    let txtFTemperature3=document.getElementById("txtFTemperature3");
    let txtFWeather3=document.getElementById("txtFWeather3");

    let fDate4=document.getElementById("fDate4");
    let imgFWeather4=document.getElementById("imgFWeather4");
    let txtFTemperature4=document.getElementById("txtFTemperature4");
    let txtFWeather4=document.getElementById("txtFWeather4");

    let fDate5=document.getElementById("fDate5");
    let imgFWeather5=document.getElementById("imgFWeather5");
    let txtFTemperature5=document.getElementById("txtFTemperature5");
    let txtFWeather5=document.getElementById("txtFWeather5");

    const d = new Date();
    let year= d.getFullYear();
    let month=d.getMonth()+1;
    let day=d.getDate();

    var day1 = d.getDate()+1;
    var day2 = d.getDate()+2;
    var day3 = d.getDate()+3;
    var day4 = d.getDate()+4;
    var day5 = d.getDate()+5;



    fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=${location}&dt=${year}-${month}-${day1}`)
    .then(res=>res.json())
    .then(data=>{
        data.forecast.forecastday.forEach(element => {
            fDate1.innerHTML=element.date;
            imgFWeather1.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
            txtFTemperature1.innerHTML=element.day.avgtemp_c+" °C";
            txtFWeather1.innerHTML=element.day.condition.text;
        });
    });
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=${location}&dt=${year}-${month}-${day2}`)
    .then(res=>res.json())
    .then(data=>{
        data.forecast.forecastday.forEach(element => {
            fDate2.innerHTML=element.date;
            imgFWeather2.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
            txtFTemperature2.innerHTML=element.day.avgtemp_c+" °C";
            txtFWeather2.innerHTML=element.day.condition.text;
        });
    });
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=${location}&dt=${year}-${month}-${day3}`)
    .then(res=>res.json())
    .then(data=>{
        data.forecast.forecastday.forEach(element => {
            fDate3.innerHTML=element.date;
            imgFWeather3.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
            txtFTemperature3.innerHTML=element.day.avgtemp_c+" °C";
            txtFWeather3.innerHTML=element.day.condition.text;
        });
    });
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=${location}&dt=${year}-${month}-${day4}`)
    .then(res=>res.json())
    .then(data=>{
        data.forecast.forecastday.forEach(element => {
            fDate4.innerHTML=element.date;
            imgFWeather4.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
            txtFTemperature4.innerHTML=element.day.avgtemp_c+" °C";
            txtFWeather4.innerHTML=element.day.condition.text;
        });
    });
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=139f1268dd294698b0c155108240310&q=${location}&dt=${year}-${month}-${day5}`)
    .then(res=>res.json())
    .then(data=>{
        data.forecast.forecastday.forEach(element => {
            fDate5.innerHTML=element.date;
            imgFWeather5.innerHTML=`<img src="${element.day.condition.icon}" alt="">`;
            txtFTemperature5.innerHTML=element.day.avgtemp_c+" °C";
            txtFWeather5.innerHTML=element.day.condition.text;
        });
    });

    });


    






   
};
