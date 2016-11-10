$( document ).ready(function() {

	nom = document.getElementById('Nom');
	prenom = document.getElementById('prenom');
	dateNaissance = document.getElementById('Date');
	adresse = document.getElementById('adresse');
	mail = document.getElementById('mail');
	
 $("#Nom").keydown(function(limit) {
      //Récupérer le nombre de caractères dans la zone de texte
      var rellength = $(this).val().length;
      //Afficher un texte de légende en fonction du nombre de caractères
        $("#compteur").html(""+ rellength + " car ");
    });
	
	$("#prenom").keydown(function(limit) {
      //Récupérer le nombre de caractères dans la zone de texte
      var rellength = $(this).val().length;
      //Afficher un texte de légende en fonction du nombre de caractères
        $("#compteur1").html(""+ rellength + " car ");
    });
	
	$("#Date").keydown(function(limit) {
      //Récupérer le nombre de caractères dans la zone de texte
      var rellength = $(this).val().length;
      //Afficher un texte de légende en fonction du nombre de caractères
        $("#compteur2").html(""+ rellength + " car ");
    });
	
	$("#adresse").keydown(function(limit) {
      //Récupérer le nombre de caractères dans la zone de texte
      var rellength = $(this).val().length;
      //Afficher un texte de légende en fonction du nombre de caractères
        $("#compteur3").html(""+ rellength + " car ");
    });
	
	$("#mail").keydown(function(limit) {
      //Récupérer le nombre de caractères dans la zone de texte
      var rellength = $(this).val().length;
      //Afficher un texte de légende en fonction du nombre de caractères
        $("#compteur4").html(""+ rellength + " car ");
    });
	document.getElementById("gps").addEventListener("click",function(event){
		event.preventDefault();
		
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			gps1.innerHTML = "Geolocation is not supported by this browser.";
		}
	});
function showPosition(ville) {
    var latlon = ville.coords.latitude + "," + ville.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
	
    document.getElementById("gps").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            gps1.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            gps1.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            gps1.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            gps1.innerHTML = "An unknown error occurred."
            break;
    }
}
		$('#valider').click(function(e){
	    e.preventDefault();
	    var mymodal = $('#myModal');
   
	    if(nom.value == '' || prenom.value == '' || dateNaissance.value == '' || adresse.value == '' || mail.value == '' ){
	    	mymodal.find('.modal-body').text('Veuillez saisir tout les champs !');
	   		$(".modal").modal('show')

	   	} else {
	   		     	if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("Nom", nom.value);
	localStorage.setItem("Prenom", prenom.value);
	localStorage.setItem("Date", dateNaissance.value);
	localStorage.setItem("Adresse", adresse.value);
	localStorage.setItem("mail", mail.value);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("Nom");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
	   	}
  });

	  

});
