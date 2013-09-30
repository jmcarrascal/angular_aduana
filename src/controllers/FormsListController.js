/**
* LibrosListController
* Controlador del listado de libros
*/
function FormsListController($scope, $http, serviceShare) {
  
  var oTable = $('#IdTableFormsList').dataTable({
		"bProcessing" : true,
		"sAjaxSource" : serviceShare.user.url_service + "/getForms/" + serviceShare.user.id_app,
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
		}, {
			"mData" : function (oObj)                              
                  {
                      // call Modal
                      var a = "<div class='btn-group'><button class='btn glow'>Accion</button> <button data-toggle='dropdown' class='btn glow dropdown-toggle'><span class='caret'></span></button><ul class='dropdown-menu'><li><a  onclick=\"preparedEditForm('" + oObj._id + "', '" + oObj.header.code +"', '" + oObj.header.name +"', '" + oObj.header.descrip +"');\"><i class='icon-pencil'></i> Editar</a></li><li><a href='http://54.232.16.128:8080/FormRender/formulario/display.xhtml?id=C1.1&repeat=1' target='_blank'><i class='icon-desktop'></i> Previsualizar</a></li></ul></div>";                            
                      return a;
                  }
                  }
		]
	});

	$('#idTextName').change(function() {
		if ($('#idHiddenTempName').val() != $("#idTextName").val()) {
			$('#ifchange').val('1');
		}
	});

	$("#idTextDescrip").change(function() {
		if ($('#idHiddenTempDescrip').val() != $("#idTextDescrip").val()) {
			$('#ifchange').val('1');
			
		}
	});

	$("#idTextCode").change(function() {
		if ($('#idHiddenTempCode').val() != $("#idTextCode").val()) {
			$('#ifchange').val('1');
		}
	});

	$("#idButtonSave").click(function() {
		
		
		var mode = $('#idHiddenMode').val();
		
		if (mode == 'edit'){
			$.getJSON(serviceShare.user.url_service + "/getById/"
					+ $('#idHiddenIdForm').val(), function(json) {

				if (json.success == false) {

				} else {
					var objectJson = jQuery.parseJSON(json.result);
					var version = objectJson.header.version;
					var status = objectJson.header.status;
					var json = JSON.stringify(objectJson);
					
					$scope.form = {
							_id : $('#idHiddenIdForm').val(),
							idForm :  $('#idHiddenIdForm').val(),
							formJson: json,
							header : {
									
									
									code : $('#idTextCode').val(),
									name : $('#idTextName').val(),
									descrip : $('#idTextDescrip').val(),
									version : version,
									status : status
									
							}
					};
					
					
					
					$('#myModal').modal('hide');
					
					serviceShare.form = $scope.form;
					
					window.location = "#/editor/edit";
				}
			});
			
			
		}else{
			//Validate code						
			$.getJSON( serviceShare.user.url_service + "/validateCode/" + $('#idTextCode').val(), function(json) {
				if (json.success == false) {

				} else {
					if (json.result == 'true'){		
						
						$scope.form = {
								_id : $('#idHiddenIdForm').val(),
								header : {
										code : $('#idTextCode').val(),
										name : $('#idTextName').val(),
										descrip : $('#idTextDescrip').val()
								}
						};
						
						$('#myModal').modal('hide');
						
						serviceShare.form = $scope.form;
						
						
						window.location = "#/editor/new";												
					}else{
						alert('El codigo ya se encuentra en uso');
					}				
				}
			});
			
						
		}
		
		
		
	});
		
  
}

function editForm (){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/Builde2/rest/updateHeaderForm",
		data: $("#form_concepto").serializeArray()
		}).success(function( msg ) {
			alert( "Mensaje del servidor: " + msg );
			})
		.fail(function() { alert("error"); })
		.done(function() { alert("success"); })
		.always(function() { alert("complete"); }
		);
}

function preparedEditForm(idForm, code, name, descrip) {
	//Load values
	$('#idHiddenIdForm').val(idForm);
	$('#idHiddenMode').val('edit');
	$('#idHiddenTempCode').val(code);
	$('#idHiddenTempName').val(name);
	$('#idHiddenTempDescrip').val(descrip);
	$('#idTextCode').val(code);
	$('#idTextName').val(name);
	$('#idTextDescrip').val(descrip);
	$('#myModalLabel').html('Editar Formulario');
	$('#myModal').modal('show');
}



