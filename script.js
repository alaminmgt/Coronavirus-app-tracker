let date = new Date();
let day =date.toDateString();
async function getcovidAPI() {
    const jsonData = await fetch("https://api.covid19api.com/summary");
    const jsData = await jsonData.json();
    // console.log(mydata.Countries[13].Country);
    const mydata = jsData.Countries[14];
    document.getElementById("mydata").innerHTML = 
    `Covid-19 Last update : ${day} </br>
    Country Name : ${mydata.Country}</br>
    New Confirmed : ${mydata.NewConfirmed}</br>
    New Deaths : ${mydata.NewDeaths}</br>
    New Recovered : ${mydata.NewRecovered}</br>
    Total Confirmed : ${mydata.TotalConfirmed}</br>
    Total Deaths : ${mydata.TotalDeaths}</br>
    Total Recovereds : ${mydata.TotalRecovered}</br>`
}
getcovidAPI();