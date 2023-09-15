let inp=document.getElementById("inp");
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apikey="d16119f7ddf1c63c4d6229d170d11ae4";
let error=document.querySelector(".error");
let image=document.querySelector(".wimg img");


async function weather(city){
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        error.style.display="block";
        document.querySelector('.content').style.display="none";
    }
    else{
        let data = await response.json();
        console.log(data);
            document.getElementById("tem").innerHTML=Math.round(data.main.temp)+"°c";
            document.getElementById("city").innerHTML=data.name;
            document.getElementById("hum").innerHTML=data.main.humidity;
            document.getElementById("wind").innerHTML=data.wind.speed;

            if(data.weather[0].main=='Clear'){
                image.src="images/clear.png";
            }
            else if(data.weather[0].main=='Clouds'){
                image.src="images/clouds.png";
            }
            else if(data.weather[0].main=='Drizzle'){
                image.src="images/drizzle.png";
            }
            else if(data.weather[0].main=='Mist'){
                image.src="images/mist.png";
            }
            else if(data.weather[0].main=='Rain'){
                image.src="images/rain.png";
            }
            else if(data.weather[0].main=='Snow'){
                image.src="images/snow.png";
            }

            document.querySelector('.content').style.display="block";
            error.style.display="none";
    }
}

document.querySelector('button').addEventListener("click",()=>{
        weather(inp.value);
});