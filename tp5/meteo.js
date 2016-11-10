window.onload = function(){

   document.getElementById("searchCity").addEventListener("submit", function(event)

    {

        event.preventDefault(); // pour annuler le rechargement de la page

       var city = document.getElementById("city").value;

        searchCity(city);

   });    

}

function searchCity(_city){  

    var request =new XMLHttpRequest();

    request.open('GET',"http://api.openweathermap.org/data/2.5/weather?q="+_city+"&appid=d0c4e9ad435b3a5a337d72ccadab70ce",true);

    request.onload =function(){

    if(request.status >=200&& request.status <400){

            var responseJSON = JSON.parse(request.responseText);

            var nom= responseJSON.name;

            var temperature= (responseJSON.main.temp - 273.15).toFixed(0) + "°";

            var humidity = responseJSON.main.humidity;

            var cloud = responseJSON.clouds.all;

            var wind = responseJSON.wind.speed;

            var icon = responseJSON.weather[0].icon;

            var date= new Date(responseJSON.dt*1000).getHours();

           var date1= new Date(responseJSON.dt*1000).getMinutes();            if(date1<10){

            date1= "0"+date1;

            }

          

            document.getElementById('name').innerHTML = responseJSON.name;

            document.getElementById('time').innerHTML = "@"+date+":"+date1;            
			document.getElementById('icon').src ="http://openweathermap.org/img/w/"+icon+".png";

            document.getElementById('temp').innerHTML = temperature;

            document.getElementById('temps').innerHTML = responseJSON.weather[0].description ;

            document.getElementById('hr').innerHTML = "<hr width=50%>"    ;    

            document.getElementById('hr1').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr2').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr3').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr4').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr5').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr6').innerHTML = "<hr width=50%>"    ;

            document.getElementById('Humidity').innerHTML = " Humidity : "+humidity+"%" ;

            document.getElementById('nuage').innerHTML = "Nuage : "+cloud+"%" ;

            document.getElementById('vent').innerHTML = "Vent : "+wind+"m/s";

                  

            

            

    

        //VOTRE CODE JS pour afficher les données météo sur votre page

        // en mettant à jour la DIV “result”

    }else{

        // We reached our target server, but it returned an error

    }

    

    };

        request.onerror =function(){

        // There was a connection error of some sort

    };

        request.send();

}

function searchLatLng(_lat, _lng){  

    var request =new XMLHttpRequest();

    request.open('GET','http://api.openweathermap.org/data/2.5/weather?lat='+_lat+'&lon='+_lng+'&appid=d0c4e9ad435b3a5a337d72ccadab70ce',true);

    request.onload =function(){

    if(request.status >=200&& request.status <400){

            var responseJSON = JSON.parse(request.responseText);

            var nom= responseJSON.name;

            var temperature= (responseJSON.main.temp - 273.15).toFixed(0) + "°";

            var humidity = responseJSON.main.humidity;

            var cloud = responseJSON.clouds.all;

            var wind = responseJSON.wind.speed;

            var icon = responseJSON.weather[0].icon;

            var date= new Date(responseJSON.dt*1000).getHours();

           var date1= new Date(responseJSON.dt*1000).getMinutes();           if(date1<10){

            date1= "0"+date1;

            }

            document.getElementById('name').innerHTML = responseJSON.name;

            document.getElementById('time').innerHTML = "@"+date+":"+date1;            document.getElementById('icon').src ="http://openweathermap.org/img/w/"+icon+".png";

            document.getElementById('hr').innerHTML = "<hr width=50%>"    ;    

            document.getElementById('hr1').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr2').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr3').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr4').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr5').innerHTML = "<hr width=50%>"    ;      

            document.getElementById('hr6').innerHTML = "<hr width=50%>"    ;

            document.getElementById('temp').innerHTML = temperature;

            document.getElementById('temps').innerHTML = responseJSON.weather[0].description ;

            document.getElementById('Humidity').innerHTML = " Humidity : "+humidity+"%" ;

            document.getElementById('nuage').innerHTML = "Nuage : "+cloud+"%" ;

            document.getElementById('vent').innerHTML = "Vent : "+wind+"m/s";

            

    

        //VOTRE CODE JS pour afficher les données météo sur votre page

        // en mettant à jour la DIV “result”

    }else{

        // We reached our target server, but it returned an error

    }

    

    };

        request.onerror =function(){

        // There was a connection error of some sort

    };

        request.send();

}

var x = document.getElementById("RC");

$("#RC").on('click',function(){

   if (navigator.geolocation) {

       navigator.geolocation.getCurrentPosition(showPosition, showError);

   } else {

       x.innerHTML = "Geolocation is not supported by this browser.";

   }

});function showPosition(position) {

     var ville=document.getElementById("city").value;

   var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+ville+"&zoom=14&size=400x200&sensor=false";

   document.getElementById("demo").innerHTML = "<img src='"+img_url+"'>";

}function showError(error) {

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

   }    }    

document.getElementById("gps").addEventListener("click", function()

    {

        

       if (navigator.geolocation) {

       navigator.geolocation.getCurrentPosition(showPosition, showError);

   } else {

       x.innerHTML = "Geolocation is not supported by this browser.";

   }

    function showPosition(position) {

        var latlon = position.coords.latitude + "," + position.coords.longitude;

        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="

        +latlon+"&markers="+latlon+"&zoom=14&size=400x200&sensor=false";

        document.getElementById("demo").innerHTML = "<img src='"+img_url+"'>";

        searchLatLng(position.coords.latitude, position.coords.longitude);

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

   }}    });
