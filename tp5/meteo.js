window.onload=function(){
	document.getElementById("rechercheville").addEventListener("submit",function(event){
		event.preventDefault();
		var ville=document.getElementById("ville").value;
		console.log(ville);
		rechercheville(ville);
	});
}
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
			var temperature = (resp.main.temp - 273.15).toFixed(0) + "°";
			var prec = resp.rain;
			var hum = resp.main.humidity;
			var nuage = resp.clouds.all;
			var vent = resp.wind.speed;
			
			document.getElementById('result1').innerHTML = nom ;
			document.getElementById('result2').innerHTML = temperature ;
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
	
}
