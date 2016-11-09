window.onload=function(){
	document.getElementById("rechercheville").addEventListener("submit",function(event){
		event.preventDefault();
		var ville=document.getElementById("ville").value;
		console.log(ville);
		rechercheville(ville);
	});
	document.getElementById("gps").addEventListener("click",function(event){
	event.preventDefault();
	var ville=document.getElementById("ville").value;
	function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
	
    document.getElementById("gps").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
	recherchelatlng(ville);
	});
	
	
	
function rechercheville(_ville){
	
	console.log(rechercheville,'Hello from '+_ville);
	var request = new XMLHttpRequest();
	request.open("get","http://api.openweathermap.org/data/2.5/weather?q="+_ville+"&appid=d0c4e9ad435b3a5a337d72ccadab70ce",true);
	request.onload =function(){
		if (request.status>=200 && request.status < 400){
			//success!
			var resp = JSON.parse(request.responseText);
			var nom= resp.name;
			var ico = resp.weather[0].icon;
			var temperature = (resp.main.temp - 273.15).toFixed(0) ;
			var prec = resp.rain;
			var hum = resp.main.humidity;
			var nuage = resp.clouds.all;
			var vent = resp.wind.speed;
			
			document.getElementById('result1').innerHTML = nom ;
			document.getElementById('result2').innerHTML = temperature +"°";
			document.getElementById('result3').innerHTML = resp.weather[0].description ;
			document.getElementById('result4').innerHTML = " Humidity : "+hum+"%" ;
			document.getElementById('result5').innerHTML = "Nuage : "+nuage+"%" ;
			document.getElementById('result6').innerHTML = "Vent : "+vent+"m/s" ;
			
			document.getElementById('icone').src = "http://openweathermap.org/img/w/"+ico+".png";
			
		}
		else {
			
		}
	};
	request.onerror=function(){
		
	};
	
	request.send();
	
}
function recherchelatlng(_ville){
	console.log(rechercheville,'Hello from'+_lat+','+_lng);
	
}}
