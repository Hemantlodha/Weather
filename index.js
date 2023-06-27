const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Guna';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '367ca3b077msha9c3423a457823cp11f821jsn91f243408902',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));