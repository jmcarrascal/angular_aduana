/**
* LibrosListController
* Controlador del listado de libros
*/
function FormsListController($scope, $http, serviceShare) {
  
  var oTable = $('#IdTableFormsList').dataTable({
		"bProcessing" : true,
		"sAjaxSource" : "http://ec2-54-232-19-233.sa-east-1.compute.amazonaws.com:8080/FormBuilderService/rest" + "/getForms/2220" ,
		"sAjaxDataProp" : "",
		"aoColumns" : [{
			"mData" : "header.name"
		}, {
			"mData" : "header.code"
		}, {
			"mData" : "header.status"
		}, {
			"mData" : "header.version"
		}, {
			"mData" : "header.descrip"
		}
		]
	});

}

