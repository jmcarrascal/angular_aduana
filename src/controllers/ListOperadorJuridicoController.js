/**
* ListOperadorJuridicoController
* Controlador del listado de libros
*/
function ListOperadorJuridicoController($scope, $http, serviceShare) {
  
  var oTable = $('#IdTableFormsList').dataTable({
		"bProcessing" : true,
		"sAjaxSource" : "http://localhost:8080/Aduana_/rest/usuario/getOperadorJuridicoAll" ,
		"sAjaxDataProp" : "",
		
		"aoColumns" : [{
			"mData" : "id" 
		}, 
		{
			"mData" : "nit"
		}, 
		{
			"mData" : "razonSocial"
		}, 
		{
			"mData" : "fechaConstitucion"
		},
		{
			"mData" : "domicilioLegal.barrio.nombre"
		}
		]
	});

}

