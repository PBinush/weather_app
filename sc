// fetch("https://restcountries.com/v3.1/all")
// .then(res=>res.json())
// .then(data=>{
//     let tblCountries=document.getElementById("tbl");

//     let tblBody=`<tr>
//                     <th>Name</th>
//                     <th>Flag</th>
//                 </tr>`;

//     data.forEach(element => {
//         tblBody+=`<tr>
//                     <td>${element.name.common}</td>
//                     <td>${element.flag}</td>
//                 </tr>`
//     });

//     tblCountries.innerHTML=tblBody;
// })

// function serchCountriy() {
//     let searchValue = document.getElementById("txtSearchValue").value;

//     let officialName = document.getElementById("officialName");
//     let name = document.getElementById("name");
//     let img = document.getElementById("img");
    

    
// fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
// .then(res=>res.json())
// .then(data=>{
//     // console.log("lk,");
//     data.forEach(obj=>{
//         officialName.innerText=obj.name.official;
//         name.innerText=obj.name.common;
//         img.innerHTML=`<img src="${obj.flags.png}" alt="">`
//     });
   

// })

    
// }

// fetch("https://restcountries.com/v3.1/all")
// .then(res=>{
//     console.log("1");
//     console.log("2");
//     console.log("3");
// })

// console.log("e");
// console.log("e");
// console.log("e");
// console.log("e");
// document.getElementById("btnCalc").addEventListener("click",(10,20,(sum)=>{
//     document.getElementById("lblTotal").innerText=sum;
// }))
// function sum(num1,num2,displayTotalFuntion){
//     let sum=num1+num2;
//     displayTotalFuntion(sum);
//     console.log(sum);
// }
 
fetch(`https:api.weatherapi.com/v1/current.json?key=139f1268dd294698b0c155108240310&q=${galle}`)
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