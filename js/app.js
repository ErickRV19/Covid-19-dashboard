let NewConfirmed = document.getElementById('NewConfirmed')
let NewDeaths = document.getElementById('NewDeaths')
let TotalDeaths = document.getElementById('TotalDeaths')
let NewRecovered = document.getElementById('NewRecovered')
let TotalConfirmed = document.getElementById('TotalConfirmed')
let TotalRecovered = document.getElementById('TotalRecovered')
let Day = document.getElementById('Day')


//Fetching The Case by Country Data
fetch('https://api.covid19api.com/summary', {
        method: 'GET',
    })
    .then(response =>
        response.json().then(data => {
            //   console.log(data.Countries);
            let countries_stat = data.Countries
            const Mexico = 109;
            console.log(countries_stat[Mexico])
            Day.innerHTML = countries_stat[Mexico].Day
            TotalConfirmed.innerHTML = countries_stat[Mexico].TotalConfirmed
            NewConfirmed.innerHTML = countries_stat[Mexico].NewConfirmed
            TotalDeaths.innerHTML = countries_stat[Mexico].TotalDeaths
            NewDeaths.innerHTML = countries_stat[Mexico].NewDeaths
            TotalRecovered.innerHTML = countries_stat[Mexico].TotalRecovered

        }),
    )
    .catch(err => {
        console.log(err)
    });

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.covid19api.com/all", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));