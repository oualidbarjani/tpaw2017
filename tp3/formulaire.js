$( document ).ready(function() {

	nom = document.getElementById('Nom');
	prenom = document.getElementById('prenom');
	dateNaissance = document.getElementById('Date');
	adresse = document.getElementById('adresse');
	mail = document.getElementById('mail');

	$('#valider').click(function(e){
	    e.preventDefault();
	    var mymodal = $('#myModal');

	    if(nom.value == '' || prenom.value == '' || dateNaissance.value == '' || adresse.value == '' || mail.value == '' ){
	    	mymodal.find('.modal-body').text('Veuillez saisir tout les champs !');
	   		$(".modal").modal('show')

	   	} else {
	   		mymodal.find('.modal-title').text('Bonjour ' + " " + prenom.value);
	   		mymodal.find('.modal-body').text('Vous êtes nés le : ' + dateNaissance.value + " et vous habitez : ");      
	   		 mymodal.find('.modal-maps').html(" <img src='https://maps.googleapis.com/maps/api/staticmap?center="+adresse.value+"&zoom=16&size=400x200&path=weight:3%7Ccolor:blue%7Cenc:{coaHnetiVjM??_SkM??~R&key=AIzaSyCmQS716Lawj3T_dgBVlj_eXZ33-CrcdCY'/></br></br>"+adresse.value);
			$(".modal").modal('show')

	   	}
  });

});
