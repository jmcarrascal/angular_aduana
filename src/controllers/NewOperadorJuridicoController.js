/**
* ListOperadorJuridicoController
* Controlador del listado de libros
*/
function NewOperadorJuridicoController($scope, $http, serviceShare) {
  
	
	$(document).ready(function() {
        
		$http({
            method: 'GET',
            url: 'http://localhost:8080/Aduana_/rest/barrio/getAll'            
			}).success(function (result) {
				$scope.barrioList = result;
			});
		  
	      
	      $('#newOperadorJuridicoForm').submit(function(e) {
	        $.post("http://localhost:8080/Aduana_/rest/operador/new", $(this).serialize(), function(response) {
	        	console.log(response);
	        	
							
				window.location = "#/getOperadorJuridico";
				
				
	        });
	        
	        e.preventDefault(); // prevent actual form submit and page reload
	      });
	      
	  });

}

