const apiKey = "26310275561de0cfd52726de9bbf43f6"

// appel a l'api openwether avec city en parametre de le fonction
function apiCall(city){
    let url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
fetch(url)
    .then((res) =>res.json()
    .then((datas) => {
        let dataWeather = datas.weather
        console.log(dataWeather)
        // for(let i of dataWeather){
        //     let icon = {
        //         main:i.main,
        //         description: i.description,
        //         icon: i.icon
        //     }
        //     console.log(icon)
        // }     
        document.getElementById("city").innerHTML = datas.name;
        document.getElementById("temp").innerHTML = parseInt(datas.main.temp)+" °C" ; 
        document.getElementById("humidity").innerHTML = datas.main.humidity + "%";
        document.getElementById("wind").innerHTML = parseInt(datas.wind.speed) + " Km/h";
    })
)
.catch((err)=>console.log("erreur: " + err));
}


document.querySelector('form').addEventListener("submit", function(e){
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;
    apiCall(ville);
    document.search.reset();
});

apiCall("cayenne")

// changement page vers la ville










