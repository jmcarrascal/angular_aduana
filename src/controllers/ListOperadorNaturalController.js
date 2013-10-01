/**
* ListOperadorJuridicoController
* Controlador del listado de libros
*/
function ListOperadorNaturalController($scope, $http, serviceShare) {
  
  var oTable = $('#IdTableFormsList').dataTable({
		"bProcessing" : true,
		"sAjaxSource" : "http://localhost:8080/Aduana_/rest/usuario/getOperadorNaturalAll" ,
		"sAjaxDataProp" : "",
		
		"aoColumns" : [{
			"mData" : "id" 
		}, 
		{
			"mData" : "nombre"
		}, 
		{
			"mData" : "apellido"
		}, 
		{
			"mData" : "fechaNacimiento"
		},
		{
			"mData" : "domicilioLegal.barrio.nombre"
		}
		]
	});

}

