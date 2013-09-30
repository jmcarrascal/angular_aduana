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
  		  templateUrl: 'src/views/login.html',
  		  controller: FormsListController
	  }).

	  when('/forms', {
		  templateUrl: 'src/views/forms-list.html',
		  controller: FormsListController
		  }).
	  	  
	  when('/editor/:mode', {
		  templateUrl: 'src/views/editor.html',
		  controller: EditorController
		  }).
		  
	  when('/dashboard', {
		  templateUrl: 'views/dashboard.html',
		  controller: DashboardController
		  }).
	
	  //cualquier ruta no definida  
      otherwise({
		  redirectTo: '/login'});

}]);