$(fonction(){ 
var nom=$("#Nom").val();  
var prenom=$("#Prénom").val(); 
var date=$("#Date").val(); 
var adresse=$("#adresse").val(); 
var mail=$("#mail").val(); 
if(nom.length != 0&&prenom.length !=0 && date.length != 0 && adresse.length != 0 && mail.length != 0 )   
$('#resultat').modal() 
else   
$('#myModal').modal() 
});
