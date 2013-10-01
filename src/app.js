angular.module('app', []).

	factory('serviceShare', function() {  
		return {
			form : {},
			user : {
					id_app : '2220',
					url_service: 'http://ec2-54-232-19-233.sa-east-1.compute.amazonaws.com:8080/FormBuilderService/rest'
					//url_service: 'http://localhost:8080/Builder2/rest'						
			}
		};
	}).

  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
  
  $routes.
     
  	  when('/login', {
  		  templateUrl: 'login.html',
  		  controller: LoginController
	  }).
	  
	  when('/getOperadorJuridico', {
  		  templateUrl: 'src/views/listOperadorJuridico.html',
  		  controller: ListOperadorJuridicoController
	  }).
	  
	  when('/opeJuridicoNew', {
  		  templateUrl: 'src/views/newOperadorJuridico.html',
  		  controller: NewOperadorJuridicoController
	  }).
	  
	  
	  when('/getOperadorNatural', {
  		  templateUrl: 'src/views/listOperadorNatural.html',
  		  controller: ListOperadorNaturalController
	  }).
	  when('/dashboard', {
  		  templateUrl: 'src/views/dashboard.html',
  		  controller: DashboardController
	  }).
	 
      otherwise({
		  redirectTo: '/login'});

}]);