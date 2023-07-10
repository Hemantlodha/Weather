const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '367ca3b077msha9c3423a457823cp11f821jsn91f243408902',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Guna';
fetch(url, options)
.then(response => response.json())
.then((response) => {console.log(response)
temperature.innerHTML=response.temp+"°C"; 
realfeel.innerHTML=response.feels_like+"°C";
winds.innerHTML=3.6*response.wind_speed+" Km/h";
let x=response.wind_degrees;
if (x>=330 && x<=20) {
speed.innerHTML="N ";
}
else if(x>20 && x<=60){
speed.innerHTML="NE ";
}
else if(x>60 && x<=110){
	speed.innerHTML="E ";
	}
else if(x>110 && x<=150){
	speed.innerHTML="SE ";
}
else if(x>150 && x<=200){
	speed.innerHTML="S ";
	}
else if(x>200 && x<=240){
		speed.innerHTML="SW ";
	}
else if(x>240 && x<=300){
		speed.innerHTML="W ";
	}
else{
	speed.innerHTML="NW ";
}
humid.innerHTML=response.humidity+"%";
maxt.innerHTML=response.max_temp+"°C";
mint.innerHTML=response.min_temp+"°C";
}
)
.catch(err => console.error(err));
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;
