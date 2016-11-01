$( document ).ready(function() {

	nom = document.getElementById('Nom');
	prenom = document.getElementById('prenom');
	dateNaissance = document.getElementById('Date');
	adresse = document.getElementById('adresse');
	mail = document.getElementById('mail');

	$('#valider').click(function(e){
	    e.preventDefault();
	    var mymodal = $('#myModal');

	    if(nom.value == '' || prenom.value == '' || dateNaissance.value == '' || adresse.value == '' || adresse.value == '' ){
	    	mymodal.find('.modal-body').text('Veuillez saisir tout les champs !');
	   		$(".modal").modal('show')

	   	} else {
	   		mymodal.find('.modal-title').text('Bonjour ' + nom.value + " " + prenom.value);
	   		mymodal.find('.modal-body').text('Vous êtes nés le : ' + dateNaissance.value + " et vous habitez : ");
	   		$(".modal").modal('show')

	   	}
  });

});
