function EditorController($scope, $http, serviceShare, $routeParams) {

	$scope.form = serviceShare.form;

	//Set the array service to service catalog
	//$http.get('services.json').success(function(data){
	//	$scope.services = data;
	//});

	$scope.services = "[{'Id': 106,'Url': 'url','label': 'Provincias'}]"
	
	$scope.urlService = serviceShare.user.url_service;

	var mode = $routeParams.mode;

	$("#idHiddenMode").val(mode);
	if (mode == 'edit') {
		//alert($scope.form.formJson);
		generateComponentsWithJson($scope.form.formJson);
	}

	$(function() {
		$("#divJson").dialog({
			draggable : false,
			height : 400,
			width : 800,
			autoOpen : false,

			hide : {
				effect : "explode",
				duration : 1000
			},
			modal : true,
			buttons : {
				"Aceptar" : function() {
					generateComponentsWithJson($("#resultJson").val());
					$(this).dialog("close");
				},
				"Cancelar" : function() {
					$(this).dialog("close");
				}
			},
		});

		$("#propertiesPane").dialog({
			draggable : false,
			height : 500,
			autoOpen : false,

			hide : {
				effect : "explode",
				duration : 1000
			},
			modal : true,
			buttons : {

				"Aceptar" : {
					text : 'Aceptar',
					id : 'btn-aceptar',
					// class: 'ui-corner-all btn_danger',
					click : function() {
						updatePropertiesComponent($("#inputActive").val());
						$(this).dialog("close");
					}
				},

				"Cancelar" : {
					text : 'Cancelar',
					id : 'btn-cancelar',
					// class: 'ui-corner-all btn_danger',
					click : function() {
						$(this).dialog("close");

					}
				},
				"delete" : {
					text : 'Eliminar',
					id : 'btn-delete',
					// class: 'ui-corner-all btn_danger',
					click : function() {
						$(this).dialog("close");
						$("#" + $("#inputActiveContainer").val()).hide('slow', function() {
							$("#" + $("#inputActiveContainer").val()).remove();
						});
					}
				},

			},
			open : function(event, ui) {
				$("#btn-delete").removeClass();
				$("#btn-delete").addClass('ui-corner-all btn-glow btn_danger');
				$("#btn-aceptar").removeClass();
				$("#btn-aceptar").addClass('ui-corner-all btn-glow primary');
				$("#btn-cancelar").removeClass();
				$("#btn-cancelar").addClass('ui-corner-all btn-glow ');

			}
		});

		$("#propertiesPane").hide();


		$("#idPrevisualizar").click(function() {
			var components = getComponents();
			var mode = $("#idHiddenMode").val();
			if (mode == 'edit') {
				jsonObj = '{"_id":"' + $("#idHiddenIdForm").val() + '", "header":{ "id_app":"' + serviceShare.user.id_app + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			} else {
				jsonObj = '{"header":{"id_app":"' + serviceShare.user.id_app + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			}			
			$("#idHiddenJsonPreview").val(jsonObj);

			$("#idForm").submit();
		
		});

		$("#inputText").click(function() {
			// var nro = $("#items_form").children().length + 1;
			var countItem = $("#countItem").val();
			var id = 'input_text_' + countItem;
			var inputId = "'" + id + "'";
			$("#items_form").append('<div class="default-input ui-draggable" id=' + id + ' type="text">' + '<div class="textIcon"></div>' + '<div class="controlHeadline">' + '<h4 class="controlLabel">[ningún texto de leyenda]</h4>' + '<span class="controlHint"></span>' + '<input class="controlName" value="sin_titulo' + countItem + '">' + '</div>' + '<ul class="controlProperties"></ul>' + '</div>');

			$("#countItem").val(parseInt(countItem) + 1);

			$("#" + id).dblclick(function() {
				$("#propertiesPane").html(getInputProperties(id));
				setPropertiesInput(id);
				$("#propertiesPane").dialog("open");
			});

		});

		$("#inputNumeric").click(function() {
			var countItem = $("#countItem").val();
			var id = 'input_text_' + countItem;
			var inputId = "'" + id + "'";
			$("#items_form").append('<div class="default-input ui-draggable" id=' + id + ' type="int">' + '<div class="numericIcon"></div>' + '<div class="controlHeadline">' + '<h4 class="controlLabel">[ningún texto de leyenda]</h4>' + '<span class="controlHint"></span>' + '<input class="controlName" value="sin_titulo' + countItem + '">' + '</div>' + '<ul class="controlProperties"></ul>' + '</div>');

			$("#countItem").val(parseInt(countItem) + 1);

			$("#" + id).dblclick(function() {
				$("#propertiesPane").html(getNumericProperties(id));
				setPropertiesInput(id);
				$("#propertiesPane").dialog("open");
			});

		});

		$("#inputSelectOne").click(function() {
			var countItem = $("#countItem").val();
			var id = 'input_text_' + countItem;
			var inputId = "'" + id + "'";
			$("#items_form").append('<div class="default-input ui-draggable" id=' + id + ' type="selectOne">' + '<div class="selectOneIcon"></div>' + '<div class="controlHeadline">' + '<h4 class="controlLabel">[ningún texto de leyenda]</h4>' + '<span class="controlHint"></span>' + '<select class="controlNameSelectOne"><option>sin_titulo' + countItem + '</option></select>' + '</div>' + '<ul class="controlProperties"></ul>' + '</div>');

			$("#countItem").val(parseInt(countItem) + 1);

			$("#" + id).dblclick(function() {
				$("#propertiesPane").html(getSelectOneProperties(id));
				setPropertiesInput(id);
				$("#propertiesPane").dialog("open");
			});

		});

		$("#inputTextArea").click(function() {
			var countItem = $("#countItem").val();
			var id = 'input_text_' + countItem;
			var inputId = "'" + id + "'";
			$("#items_form").append('<div class="default-input ui-draggable" id=' + id + ' type="textArea">' + '<div class="textAreaIcon"></div>' + '<div class="controlHeadline">' + '<h4 class="controlLabel">[ningún texto de leyenda]</h4>' + '<span class="controlHint"></span>' + '<input class="controlNameTextArea" value="sin_titulo' + countItem + '">' + '</div>' + '<ul class="controlProperties"></ul>' + '</div>');

			$("#countItem").val(parseInt(countItem) + 1);

			$("#" + id).dblclick(function() {
				$("#propertiesPane").html(getTextAreaProperties(id));
				setPropertiesInput(id);
				$("#propertiesPane").dialog("open");
			});

		});

		$("#inputDate").click(function() {
			var countItem = $("#countItem").val();
			var id = 'input_text_' + countItem;
			var inputId = "'" + id + "'";
			$("#items_form").append('<div class="default-input ui-draggable" id=' + id + ' type="date">' + '<div class="dateIcon"></div>' + '<div class="controlHeadline">' + '<h4 class="controlLabel">[ningún texto de leyenda]</h4>' + '<span class="controlHint"></span>' + '<input class="controlName" value="sin_titulo' + countItem + '">' + '<img src="./src/css/formbuilder/images/icon-calendar.png">' + '</div>' + '<ul class="controlProperties"></ul>' + '</div>');

			$("#countItem").val(parseInt(countItem) + 1);

			$("#" + id).dblclick(function() {
				$("#propertiesPane").html(getDateProperties(id));
				setPropertiesInput(id);
				$("#propertiesPane").dialog("open");

				$("#editorTextfieldMin").datepicker({
					dateFormat : 'dd/mm/yy',
					changeMonth : true,
					changeYear : true
				});

				$("#editorTextfieldMax").datepicker({
					dateFormat : 'dd/mm/yy',
					changeMonth : true,
					changeYear : true
				});
			});

		});

		$("#group").click(function() {
			var countItem = $("#countItem").val();
			var id = 'input_group_' + countItem;
			var idGroup = 'container_group_' + countItem;
			$("#items_form").append('<div class="default-group ui-draggable" id=' + idGroup + ' type="group">' + 
			'<div class="controlInfo" id=' + id + ' type="group">' + 
			'<div class="groupIcon"></div>' + 
			'<div class="controlHeadline">'  +
			'<h3 class="controlLabel">[ningún texto de leyenda]</h3>' + '<span class="controlHint"></span>' + '<span class="controlNameGroup">sin_titulo' + countItem + '</span>' + '</div>' + '<ul class="controlProperties"><li class="columns" value="5"></li></ul>' + '</div>' + '<div class="workspaceInnerWrapper ui-sortable" id="group_' + countItem + '"' + '></div>' + '</div>');

			$("#group_" + countItem).sortable({
				receive : function(event, ui) {
					itemRemoveClass(ui.item);
					itemAddClassGroupColumn(ui.item, id);
				},
				remove : function(event, ui) {
					itemRemoveClass(ui.item);
					ui.item.addClass("default-input");
				},
				connectWith : '.ui-sortable'
			}).disableSelection();
			$("#countItem").val(parseInt(countItem) + 1);

			$("#" + id).dblclick(function() {
				$("#propertiesPane").html(getGroupProperties(id));
				setPropertiesGroup(id, idGroup);
				$("#propertiesPane").dialog("open");
			});

		});

		$("#exportJson").click(function() {
			var components = getComponents();
			var mode = $("#idHiddenMode").val();
			
			if (mode == 'edit') {
				jsonObj = '{"_id":"' + $("#idHiddenIdForm").val() + '", "header":{ "id_app":"' + serviceShare.user.id_app + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			} else {
				jsonObj = '{"header":{"id_app":"' + serviceShare.user.id_app + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			}
			save_form(jsonObj, $("#idHiddenMode").val());
			$("#resultJson").val(jsonObj);

			// $("#divJson").dialog("open");
		});

		$("#idExportJson").click(function() {
			var components = getComponents();
			var mode = $("#idHiddenMode").val();
			if (mode == 'edit') {
				jsonObj = '{"_id":"' + $("#idHiddenIdForm").val() + '", "header":{ "id_app":"' + serviceShare.user.id_app + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			} else {
				jsonObj = '{"header":{"id_app":"' + serviceShare.user.id_app + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			}
			//save_form(jsonObj, $("#idHiddenMode").val());
			$("#resultJson").val(jsonObj);

			alert(jsonObj);
			//$("#divJson").dialog("open");
		});

		$("#importJson").click(function() {
			$("#divJson").dialog("open");
		});

		$("#items_form").sortable({
			connectWith : '.ui-sortable'
		}).disableSelection();

		//$(".ui-draggable").sortable({
		//	connectWith : '.ui-sortable'
		//});

		$("#functionsImportJson").hide();

		$("#json").click(function() {
			var components = getComponents();

			if (mode == 'edit') {
				jsonObj = '{"_id":"' + $("#idHiddenIdForm").val() + '", "header":{ "id_app":"' + $("#idHiddenIdApp").val() + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			} else {
				jsonObj = '{"header":{"id_app":"' + $("#idHiddenIdApp").val() + '","code":"' + $("#idHiddenCode").val() + '","name":"' + $("#idHiddenName").val() + '","version":"' + $("#idHiddenVersion").val() + '","status":"' + $("#idHiddenStatus").val() + '","descrip":"' + $("#idHiddenDescrip").val() + '"},"payload":{"components":{' + components + '}}}';
			}
			save_form(jsonObj, mode);
		});
		function save_form(jsonObj, mode) {

			$.ajax({
				type : "POST",
				url : serviceShare.user.url_service + "/saveForm",
				data : {
					'mode' : mode,
					'json' : jsonObj
				},

				dataType : "json",
				success : function(data) {
					$.each(data, function(i, item) {
						if (i == 'success') {
							if ( item = 'true') {
								$("#idDivAlertOk").html('La operacion se ha realizado con exito');
								$("#idDivAlertOk").show();
							} else {
								$("#idDivAlertError").html('Hubo un problema en la operación');
								$("#idDivAlertError").show();
							}
						}
					});
				},
				error : function(data) {
					alert(data);
				}
			});

		}

	});

}
