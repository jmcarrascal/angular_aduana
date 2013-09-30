/**
* LoginController
* Controlador de Login
*/
function LoginController($scope, $http, serviceShare) {
  		
	$(document).ready(function() {
	
	$("#btn_submit").click(function() {
		alert('');
		$.ajax({
			type : "POST",
			url : "/operador/validate/user",
			data : {
				"value" : "1"
			},
			success : function(msg) {
				
				console.log(msg);
				
			}
		});
		
	});
	});
}
