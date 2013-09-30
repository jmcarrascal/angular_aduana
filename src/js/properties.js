function getNumericProperties(id) {
	var inputId = "'" + id + "'";
	var html = getCommonPropierties(inputId) + '<ul class="propertyList"><li><div data-name="kind" class="enum">' +
	' <h4 class="hint--top" data-hint="Tipo de número aceptados.">Tipo</h4>' +
	'<p></p>'+
	'<select class="editorSelect" id="property_numberType"><option value="int">Enteros</option><option value="float">Decimales</option></select>' +
	'</div></li></ul><li><div data-name="range" class="numericRange dateRange">' +
	'<h4 class="hint--top" data-hint="Rango válido para la entrada del usuario de este control." >Rango</h4>' +
	' <input  id="property_range_enabled" class="editorCheckbox editorEnabled" type="checkbox" onclick="changeRangeEnabled(' + inputId + ');">' +
	' <h4>Mínimo</h4>' +
	' <input disabled="" id="property_range_min_inclusive" class="editorCheckbox inclusive minInclusive" type="checkbox">' +
	' <label for="property_range_min_inclusive">Inclusive</label>' +
	' <input disabled="" id="editorTextfieldMin" class="editorTextfield min"  type="text">' +
	'<h4>Máximo</h4>' +
	'<input disabled="" id="property_range_max_inclusive" class="editorCheckbox inclusive maxInclusive" type="checkbox">' +
	'<label for="property_range_max_inclusive">Inclusive</label>' +
	' <input disabled="" id="editorTextfieldMax" class="editorTextfield max" type="text">' +
	'</div></li></ul>';

	return html;

}

function getDateProperties(id) {
	var inputId = "'" + id + "'";
	var html = getCommonPropierties(inputId) + '<li><div data-name="range" class="numericRange dateRange">' + 
	'<h4 class="hint--top" data-hint="Mensaje a mostrar si el valor no supera la comprobación longitud." style="width:100%;">Rango</h4>' +
	'<input id="property_range_enabled" class="editorCheckbox editorEnabled" type="checkbox" onclick="changeRangeEnabled(' + inputId + ');">' +
	' <label style="width:89%;" for="property_range_enabled">Habilitar</label>' +
	' <h4>Mínimo</h4>' +
	'<input disabled="" id="property_range_min_inclusive" class="editorCheckbox inclusive minInclusive" type="checkbox">' +
	'<label for="property_range_min_inclusive">Inclusive</label>' +
	' <input disabled="" id="editorTextfieldMin" class="editorTextfield min" type="text">' +
	'<h4>Máximo</h4>' +
	'<input disabled="" id="property_range_max_inclusive" class="editorCheckbox inclusive maxInclusive" type="checkbox">' +
	'<label for="property_range_max_inclusive">Inclusive</label>' +
	'<input disabled="" id="editorTextfieldMax" class="editorTextfield max" type="text">' +
	'</div></li></ul>';

	return html;

}


function getSelectOneProperties(id) {
	
	var inputId = "'" + id + "'";
	var html = getCommonPropierties(inputId) + '<ul class="propertyList"><li><div data-name="name" class="text">' + 
	'<h4 class="hint--top" data-hint="Nombre del componente de seleccion simple por el cual se debe filtrar">Filtro</h4>' + 
	'<p></p>'+
	'<input id="property_filter_select" class="editorTextfield" type="text">' + 
	'</div></li>' + 
	'<li><div data-name="name" class="text">' + 
    
    '<input id="property_other_field" class="editorTextfield" type="checkbox">' +
    '<label class="hint--top" data-hint="Agregar campo otros">Propiedad Otros</label><br/>' + 
    ' </div><br><br></li>' +
    '<li><div data-name="name" class="text">' +
    '<h4 class="hint--top" data-hint="Nombre del servicio">Servicio</h4>' +
    '<p></p>'+
	
   ' <select ng-model="services" ng-options="item.Id as item.Url for item in services" id = "serviceSelect">' +
    ' <option value="/localizacion/rest/localizaciones/provincias">Provincias</option>' +
    ' <option value="/localizacion/rest/localizaciones/partidos">Partidos</option>' +
    ' </select> </div></li></ul></ul>';

		
	return html;

}

function getTextAreaProperties(id) {
	var inputId = "'" + id + "'";
	var html = getCommonPropierties(inputId) + '</li></ul>';

	return html;

}

function addOptionSelect(value) {
	var id = 'option_' + parseInt($("#optionsList").children().size() + 1);
	var liId = "'" + 'option_' + parseInt($("#optionsList").children().size() + 1) + "'";
	var html = '<li class="even" id="' + id + '">' + '<div class="uiText">' + '<a onclick="removeOption(' + liId + ');" class="removeOption">Remove Option</a>' + '<div data-name="[object Object]" class="uiText">' + '<h4>Opción ' + parseInt($("#optionsList").children().size() + 1) + '</h4>' + '<p></p>' + '</div>' + '<div class="optionsEditorValueField">' + '<h5>Valor</h5>' + '<input class="editorTextfield underlyingValue" type="text" value="' + value + '">' + '</div>' + '</div>' + '</li>';

	return html;
}

function removeOption(id) {
	$("#" + id).remove();
}

function addOption() {
	$("#optionsList").append(addOptionSelect(""));
}

function getCommonPropierties(inputId) {
	var html = '<ul class="propertyList"><li><div data-name="name" class="text">' + 
	'<h4 class="hint--bottom" data-hint="el nombre es finalmente exportado en un XML" >Nombre</h4>' + '<p></p>' + 
	'<input id="property_DataName" class="editorTextfield" type="text">' +
	' </div></li><li><div data-name="label" class="uiText">' +
	' <h4 class="hint--bottom" data-hint="El nombre de este campo es el que vera el usuario.">Leyenda del texto</h4>' +
	' <p></p>' +
	' <ul class="translations"><li class="uiText-translation">' +
	' <input id="property_CaptionText" class="editorTextfield" type="text">' +
	' </li></ul>' + 
	'</div></li><li><div data-name="hint" class="uiText">' +
	' <h4 class="hint--top" data-hint="Ayuda adicional para esta pregunta.">Tooltip</h4>' +
	' <ul class="translations"><li class="uiText-translation">' +
	' <input id="property_Hint" class="editorTextfield" type="text">' +
	' </li></ul>' +
	' </div></li><li><div data-name="defaultValue" class="text">' +
	' <h4 class="hint--top" data-hint="Primer valor presentado" >Valor por defecto</h4>' +
	' <input id="property_DefaultValue" class="editorTextfield" type="text" >' +
	' </div></li><li><div data-name="readOnly" class="bool">' +
	' <input id="property_ReadOnly" class="editorCheckbox" type="checkbox">' +
	' <label class="hint--top" data-hint="Si este campo puede ser editado por el usuario final o no." for="property_ReadOnly">Solo lectura</label>' +
	' <input id="property_Required" class="editorCheckbox" type="checkbox" >' +
	' <label class="hint--top" data-hint="Si este campo debe ser completado antes de continuar." for="property_Required" >Requerido</label>' +
	' </div></li>' +
	'<li><div data-name="required" class="bool">' +
	' <input id="property_primary_key" class="editorCheckbox" type="checkbox">' + 
	'<label for="property_Required" class="hint--top" data-hint="Valor que no se puede duplicar en la carga del item">Clave primaria</label>' +
	' </div></li>';

	return html;
}

function getAdvancedPropierties(inputId) {
	var html = '<li class="advanced">' + '<a class="toggle expanded" onclick="changeAdvancedProperties();"><div class="icon"></div>Avanzado</a><ul id="advancedProperties" class="advancedProperties toggleContainer" style="">' + '<li><div data-name="relevance" class="text">' + '<h4  class="hint--bottom" data-hint="Especifique una expresión personalizada de evaluar para determinar si se muestra este campo.">Relevancia</h4>' + '<p></p>' + '<input id="property_Relevance" class="editorTextfield" type="text">' + '</div></li><li><div data-name="constraint" class="text">' + '<h4 class="hint--bottom" data-hint="Especifique una expresión personalizada para validar la entrada del usuario.">Restricción</h4>' + '<p></p>' + '<input id="property_Constraint" class="editorTextfield" type="text">' + '</div></li><li><div data-name="destination" class="text">' + '<h4>Instancia Destino</h4>' + '<p>Especifique una expresión XPath personalizada en la que almacenar el resultado.</p>' + '<input id="property_Instance Destination" class="editorTextfield" type="text">' + '</div></li><li><div data-name="calculate" class="text">' + '<h4>Calcular</h4>' + '<p>Especifique una expresión personalizada para almacenar un valor en este campo</p>' + '<input id="property_Calculate" class="editorTextfield" type="text">' + '</div></li></ul></li>';

	return html;
}

function getInputProperties(id) {
	var inputId = "'" + id + "'";
	var html = getCommonPropierties(inputId) + '<ul class="propertyList"><li><div data-name="length" class="numericRange dateRange">' + '<h4 class="hint--bottom" data-hint="Longitudes validas para esta entrada del usuario de este control." style="width:100%;">Longitud</h4>' + '<input id="property_range_enabled" class="editorCheckbox editorEnabled" type="checkbox" onclick="changeRangeEnabled(' + inputId + ');">' + '<label  style="width:89%;" for="property_range_enabled">Habilitar</label>' + '<h4 style="width:100%;">Mínimo</h4>' + '<input disabled="" id="property_range_min_inclusive" class="editorCheckbox inclusive minInclusive" type="checkbox">' + '<label for="property_range_min_inclusive">Inclusive</label>' + '<input disabled="" id="editorTextfieldMin" class="editorTextfield min" type="text">' + '<h4>Máximo</h4>' + '<input disabled="" id="property_range_max_inclusive" class="editorCheckbox inclusive maxInclusive" type="checkbox">' + '<label for="property_range_max_inclusive">Inclusive</label>' + '<input disabled="" id="editorTextfieldMax" class="editorTextfield max" type="text">' + '</div></li><li><div data-name="invalidText" class="uiText">' + '<h4 class="hint--bottom" data-hint="Mensaje a mostrar si el valor no supera la longitud.">Texto Inválido</h4>' + '<ul class="translations"><li class="uiText-translation">' + '<input class="editorTextfield" id="property_InvalidText" type="text">' + '</li></ul></div></li></ul>';

	return html;

}

function getGroupProperties(id) {
	var html = '<ul class="propertyList"><li><div data-name="name" class="text">' + 
	'<h4 class="hint--bottom" data-hint="El nombre es finalmente exportado en un XML.">Nombre</h4>' + 
	'<p></p>' + '<input id="property_DataName" class="editorTextfield" type="text">' + 
    '</div></li><li><div data-name="label" class="uiText">' + 
    '<h4 class="hint--bottom" data-hint="Da un toque visual al usuario.">Etiqueta</h4>' + 
    '<p></p>'+
    '<input id="property_CaptionText" class="editorTextfield" type="text">' +

    '</div></li>' +
    '<li><h4  class="hint--bottom" data-hint="Cantidad de columnas del bloque." >Columnas</h4>' +
    '<select id="property_Columns" class="editorSelect">';
	var selected = '';
	if (parseInt(getPropertyGroupColumn(id)) == 1) {
		selected = 'selected="selected"';
	}
	html += '<option value="1" ' + selected + '>1</option>';
	selected = '';
	if (parseInt(getPropertyGroupColumn(id)) == 2) {
		selected = 'selected="selected"';
	}
	html += '<option value="2" ' + selected + '>2</option>';
	selected = '';
	if (parseInt(getPropertyGroupColumn(id)) == 3) {
		selected = 'selected="selected"';
	}
	html += '<option value="3" ' + selected + '>3</option>';
	selected = '';
	if (parseInt(getPropertyGroupColumn(id)) == 4) {
		selected = 'selected="selected"';
	}
	html += '<option value="4" ' + selected + '>4</option>';
	selected = '';
	if (parseInt(getPropertyGroupColumn(id)) == 5) {
		selected = 'selected="selected"';
	}
	html += '<option value="5" ' + selected + '>5</option></select></div></li></ul>';

	return html;
}

function getPropertyCaptionText(id) {
	return $("#" + id).children(".controlHeadline").children(".controlLabel").html();
}

function setPropertyCaptionText(id) {
	$("#" + id).children(".controlHeadline").children(".controlLabel").html($("#property_CaptionText").val());
}

function getPropertyDataName(id) {
	switch($("#"+id).attr("type")) {
		case 'textArea':
			var property = '' + $("#" + id).children(".controlHeadline").children(".controlNameTextArea").val();
			break;
		case 'selectOne':
			var property = $("#" + id).children(".controlHeadline").children(".controlNameSelectOne").children().html();
			break;
		case 'group':
			var property = $("#" + id).children(".controlHeadline").children(".controlNameGroup").html();
			break;
		default:
			var property = $("#" + id).children(".controlHeadline").children(".controlName").val();
	}

	return property;
}

function setPropertyGroupColumn(id) {
	$("#" + id).children(".controlProperties").children(".columns").val($("#property_Columns").val());
	$("#" + id).next().children('.ui-draggable').each(function() {
		itemRemoveClass($(this));
		itemAddClassGroupColumn($(this), id);
	});
}

function getPropertyGroupColumn(id) {
	return $("#" + id).children(".controlProperties").children(".columns").val();
}

function setPropertyDataName(id) {
	switch($("#"+id).attr("type")) {
		case 'textArea':
			$("#" + id).children(".controlHeadline").children(".controlNameTextArea").children().html($("#property_DataName").val());
			break;
		case 'selectOne':
			$("#" + id).children(".controlHeadline").children(".controlNameSelectOne").children().html($("#property_DataName").val());
			break;
		case 'group':
			$("#" + id).children(".controlHeadline").children(".controlNameGroup").html($("#property_DataName").val());
			break;
		default:
			$("#" + id).children(".controlHeadline").children(".controlName").val($("#property_DataName").val());
	}
}

function setPropertiesGroup(id, idGroup) {
	$("#inputActive").val(id);
	$("#inputActiveContainer").val(idGroup);
	$("#property_DataName").val(getPropertyDataName(id));
	$("#property_CaptionText").val(getPropertyCaptionText(id));
}

function setPropertiesInput(id) {
	$("#inputActive").val(id);
	$("#inputActiveContainer").val(id);
	$("#property_DataName").val(getPropertyDataName(id));
	$("#property_CaptionText").val(getPropertyCaptionText(id));
	if ($("#" + id).children(".controlProperties").children(".readonly").length > 0) {
		$('input[id=property_ReadOnly]').attr('checked', true);
	}
	if ($("#" + id).children(".controlProperties").children(".required").length > 0) {
		$('input[id=property_Required]').attr('checked', true);
	}
	if ($("#" + id).children(".controlProperties").children(".primary_key").length > 0) {
		$('input[id=property_primary_key]').attr('checked', true);
	}
	if ($("#" + id).children(".controlProperties").children(".other_field").length > 0) {
		$('input[id=property_other_field]').attr('checked', true);
	}
	$("#property_Hint").val(getPropertyHint(id));
	$("#property_DefaultValue").val(getPropertyDefaultValue(id));
	$("#property_InvalidText").val(getPropertyInvalidText(id));
	$("#property_filter_select").val(getPropertyFilterSelect(id));
	getPropertyRangeInput(id);
	getPropertyNumberType(id);

	var optionsSelect = getPropertyOptionsSelect(id);
	if (optionsSelect != "") {
		$.each(optionsSelect, function(index, value) {
			$("#optionsList").append(addOptionSelect($(value).attr('value')));
		});
	}
}

function setReadOnlyInput(id) {
	if ($("#" + id).children(".controlProperties").children(".readonly").length == 0) {
		$("#" + id).children(".controlProperties").append("<li class='readonly'>Solo lectura</li>");
	}
}

function unsetReadOnlyInput(id) {
	if ($("#" + id).children(".controlProperties").children(".readonly").length > 0) {
		$("#" + id).children(".controlProperties").children(".readonly").remove();
	}
}

function changeReadOnlyInput(id) {
	if ($('input[id=property_ReadOnly]').is(':checked')) {
		setReadOnlyInput(id);
	} else {
		unsetReadOnlyInput(id);
	}
}

function getReadOnlyInput(id) {
	if ($("#" + id).children(".controlProperties").children(".readonly").length == 0) {
		return false;
	}
	return true;
}

function setRequiredInput(id) {
	if ($("#" + id).children(".controlProperties").children(".required").length == 0) {
		$("#" + id).children(".controlProperties").append("<li class='required'>*</li>");
	}
}

function unsetRequiredInput(id) {
	if ($("#" + id).children(".controlProperties").children(".required").length > 0) {
		$("#" + id).children(".controlProperties").children(".required").remove();
	}
}

function getRequiredInput(id) {
	if ($("#" + id).children(".controlProperties").children(".required").length == 0) {
		return false;
	}
	return true;
}

function changeRequiredInput(id) {
	if ($('input[id=property_Required]').is(':checked')) {
		setRequiredInput(id);
	} else {
		unsetRequiredInput(id);
	}
}

function changePrimaryKeyInput(id) {
	if ($('input[id=property_p]').is(':checked')) {
		setRequiredInput(id);
	} else {
		unsetRequiredInput(id);
	}
}



function changeRangeEnabled(id) {
	if ($('input[id=property_range_enabled]').is(':checked')) {
		$('#editorTextfieldMin').removeAttr("disabled");
		$('#editorTextfieldMax').removeAttr("disabled");
		$('#property_range_min_inclusive').removeAttr("disabled");
		$('#property_range_max_inclusive').removeAttr("disabled");
	} else {
		$('#editorTextfieldMin').attr("disabled", true);
		$('#editorTextfieldMax').attr("disabled", true);
		$('#property_range_min_inclusive').attr("disabled", true);
		$('#property_range_max_inclusive').attr("disabled", true);
		$('input[id=property_range_min_inclusive]').attr('checked', false);
		$('input[id=property_range_max_inclusive]').attr('checked', false);
		$('#editorTextfieldMin').val("");
		$('#editorTextfieldMax').val("");
	}
}

function changeAdvancedProperties() {
	if ($('#advancedProperties').is(":visible")) {
		$('#advancedProperties').hide();
	} else {
		$('#advancedProperties').show();
	}
}

function setPropertyHint(id) {
	if ($('#property_Hint').length > 0) {
		if ($('#property_Hint').val() != "") {
			setHintInput(id);
		} else {
			unsetHintInput(id);
		}
	}
}

function setHintInput(id) {
	if ($("#" + id).children(".controlProperties").children(".hint").length == 0) {
		$("#" + id).children(".controlProperties").append("<li class='hint' val='" + $('#property_Hint').val() + "'></li>");
	} else {
		//$("#"+id).children(".controlProperties").children(".hint").remove();
		//$("#"+id).children(".controlProperties").append("<li class='hint' value='"+$('#property_Hint').val()+"'></li>");
		$("#" + id).children(".controlProperties").children(".hint").attr('val', $('#property_Hint').val());
	}
}

function unsetHintInput(id) {
	if ($("#" + id).children(".controlProperties").children(".hint").length > 0) {
		$("#" + id).children(".controlProperties").children(".hint").remove();
	}
}

function getPropertyHint(id) {
	if ($("#" + id).children(".controlProperties").children(".hint").length > 0) {
		return $("#" + id).children(".controlProperties").children(".hint").attr('val');
	}
	return "";
}

function setPropertyOptionsSelectService(id) {
	switch($("#"+id).attr("type")) {
		case 'selectOne':
		if ($("#" + id).children(".controlProperties").children(".service").length == 0) {
			$("#" + id).children(".controlProperties").append("<li class='service' val = '" + $("#serviceSelect").val() + "'></li>");
		} else {
			$("#" + id).children(".controlProperties").children(".service").attr('val', $("#serviceSelect").val());
		}
		break;
	}
}


function setPropertyFilterSelect(id) {
	switch($("#"+id).attr("type")) {
		case 'selectOne':
		if ($("#" + id).children(".controlProperties").children(".filter_select").length == 0) {
			$("#" + id).children(".controlProperties").append("<li class='filter_select' val = '" + $("#property_filter_select").val() + "'></li>");
		} else {
			$("#" + id).children(".controlProperties").children(".filter_select").attr('val', $("#property_filter_select").val());
		}
		break;
	}
}

function setPropertyPrimaryKey(id) {
	
	
	var primary_key = $('#property_primary_key').prop('checked');
	
	if ($("#" + id).children(".controlProperties").children(".primary_key").length == 0) {
		if (primary_key){
			$("#" + id).children(".controlProperties").append("<li class='primary_key' val = '" + $('#property_primary_key').prop('checked') + "'></li>");
		}
	} else {
		if (primary_key){
			$("#" + id).children(".controlProperties").children(".primary_key").attr('val', $('#property_primary_key').prop('checked'));
		}else{
			$("#" + id).children(".controlProperties").children(".primary_key").remove();
		}
	}

}


function setPropertyOtherField(id) {
	
	
	var other_field = $('#property_other_field').prop('checked');
	
	if ($("#" + id).children(".controlProperties").children(".other_field").length == 0) {
		if (other_field){
			$("#" + id).children(".controlProperties").append("<li class='other_field' val = '" + $('#property_other_field').prop('checked') + "'></li>");
		}
	} else {
		if (other_field){
			$("#" + id).children(".controlProperties").children(".other_field").attr('val', $('#property_other_field').prop('checked'));
		}else{
			$("#" + id).children(".controlProperties").children(".other_field").remove();
		}
	}

}

function setPropertyDefaultValue(id) {
	if ($('#property_DefaultValue').length > 0) {
		if ($('#property_DefaultValue').val() != "") {
			setDefaultValueInput(id);
		} else {
			unsetDefaultValueInput(id);
		}
	}
}

function setDefaultValueInput(id) {
	if ($("#" + id).children(".controlProperties").children(".defaultValue").length == 0) {
		$("#" + id).children(".controlProperties").append("<li class='defaultValue' val='" + $('#property_DefaultValue').val() + "'></li>");
	} else {
		$("#" + id).children(".controlProperties").children(".defaultValue").attr('val', $('#property_DefaultValue').val());
	}
}

function unsetDefaultValueInput(id) {
	if ($("#" + id).children(".controlProperties").children(".defaultValue").length > 0) {
		$("#" + id).children(".controlProperties").children(".defaultValue").remove();
	}
}

function getPropertyDefaultValue(id) {
	if ($("#" + id).children(".controlProperties").children(".defaultValue").length > 0) {
		return $("#" + id).children(".controlProperties").children(".defaultValue").attr('val');
	}
	return "";
}

function getPropertyServiceValue(id) {
	if ($("#" + id).children(".controlProperties").children(".service").length > 0) {
		return $("#" + id).children(".controlProperties").children(".service").attr('val');
	}
	return "";
}

function getPropertiesValues(id) {
	var result = '';
	$($("#" + id).children(".controlProperties")).each(function() {
		$(this).find('li').each(function(index, value) {
			// cache jquery var
			var current = $(this);
 
			if ( typeof current.attr('val') == "undefined") {

			} else {				
					//Temporal por demo
					if (current.attr('class') == "service"){
												
						var filter = getPropertyValueByIdProperty(id, 'filter_select');
						if (filter == ''){
							result = result + ', "constraint": {"url": "' + current.attr('val') + '"}'
						}else{
							getGroupNameParentById(id);
							filter= getGroupNameParentById(id) +"/" + filter;
							result = result + ', "constraint": {"url": "' + current.attr('val') + '", "depends": "' + filter +'"}'	
						}						
						//console.log(result);
					}else{
						if (current.attr('class') == "constraint"){
							result = result + ',"' + current.attr('class') + '" : ' +  current.attr('val') ;
						}else{
							result = result + ',"' + current.attr('class') + '" : ' + '"' + current.attr('val') + '"';	
					}	}		
			}
		});
	});
	return result;
}


function getGroupNameParentById(id){
	var groups_name = '';
	$("#" + id).parents("div").each(function() {
			if ( typeof $(this).attr('type') != "undefined") {
				if ($(this).attr('type') == 'group'){ 
					if (groups_name == ''){
						groups_name = $(this).children(".controlInfo").children(".controlHeadline").children(".controlNameGroup").html();	
					}else{
						groups_name = groups_name + "/" + $(this).children(".controlInfo").children(".controlHeadline").children(".controlNameGroup").html();
					}   
				}
			}
			
	});
	return groups_name;
}

function getPropertyValueByIdProperty(id, property){
	var filter = '';
	$($("#" + id).children(".controlProperties")).each(function() {
	
			$(this).find('li').each(function(index, value) {
				var current_sub = $(this);
				if ( typeof current_sub.attr('val') == "undefined") {				
				} else {								
						if (current_sub.attr('class') == property){
							filter = current_sub.attr('val');									
						}	
				}								
			});
	});
	return filter;							
}


function setPropertyInvalidText(id) {
	if ($('#property_InvalidText').length > 0) {
		if ($('#property_InvalidText').val() != "") {
			setInvalidTextInput(id);
		} else {
			unsetInvalidTextInput(id);
		}
	}
}

function setInvalidTextInput(id) {
	if ($("#" + id).children(".controlProperties").children(".invalidText").length == 0) {
		$("#" + id).children(".controlProperties").append("<li class='invalidText' value='" + $('#property_InvalidText').val() + "'></li>");
	} else {
		$("#" + id).children(".controlProperties").children(".invalidText").attr('value', $('#property_InvalidText').val());
	}
}

function unsetInvalidTextInput(id) {
	if ($("#" + id).children(".controlProperties").children(".invalidText").length > 0) {
		$("#" + id).children(".controlProperties").children(".invalidText").remove();
	}
}

function getPropertyInvalidText(id) {
	if ($("#" + id).children(".controlProperties").children(".invalidText").length > 0) {
		return $("#" + id).children(".controlProperties").children(".invalidText").attr('value');
	}
	return "";
}

function getPropertyFilterSelect(id) {
	if ($("#" + id).children(".controlProperties").children(".filter_select").length > 0) {
		return $("#" + id).children(".controlProperties").children(".filter_select").attr('val');
	}
	return "";
}



function setPropertyTextfieldMin(id) {
	if ($('#editorTextfieldMin').length > 0) {
		if ($('#editorTextfieldMin').val() != "") {
			setTextfieldMinInput(id);
		} else {
			unsetTextfieldMinInput(id);
		}
	}
}

function getPropertyTextfieldMin(id) {
	if ($("#" + id).children(".controlProperties").children(".textFieldMin").length > 0) {
		var textFieldMin = new Array();
		textFieldMin[0] = $("#" + id).children(".controlProperties").children(".textFieldMin").attr('value');
		if ($("#" + id).children(".controlProperties").children(".textFieldMin").attr('inclusive') == "0") {
			textFieldMin[1] = false;
		} else {
			textFieldMin[1] = true;
		}
		return textFieldMin;
	}
	return "";
}

function getPropertyTextfieldMax(id) {
	if ($("#" + id).children(".controlProperties").children(".textFieldMax").length > 0) {
		var textFieldMax = new Array();
		textFieldMax[0] = $("#" + id).children(".controlProperties").children(".textFieldMax").attr('value');
		if ($("#" + id).children(".controlProperties").children(".textFieldMax").attr('inclusive') == "0") {
			textFieldMax[1] = false;
		} else {
			textFieldMax[1] = true;
		}
		return textFieldMax;
	}
	return "";
}

function setTextfieldMinInput(id) {
	var inclusive = 0;
	if ($('input[id=property_range_min_inclusive]').is(':checked')) {
		inclusive = 1;
	}

	if ($("#" + id).children(".controlProperties").children(".textFieldMin").length == 0) {
		$("#" + id).children(".controlProperties").append("<li class='textFieldMin' inclusive='" + inclusive + "' value='" + $('#editorTextfieldMin').val() + "'></li>");
	} else {
		$("#" + id).children(".controlProperties").children(".textFieldMin").attr('value', $('#editorTextfieldMin').val());
		$("#" + id).children(".controlProperties").children(".textFieldMin").attr('inclusive', inclusive);
	}
}

function unsetTextfieldMinInput(id) {
	if ($("#" + id).children(".controlProperties").children(".textFieldMin").length > 0) {
		$("#" + id).children(".controlProperties").children(".textFieldMin").remove();
	}
}

function setPropertyTextfieldMax(id) {
	if ($('#editorTextfieldMax').length > 0) {
		if ($('#editorTextfieldMax').val() != "") {
			setTextfieldMaxInput(id);
		} else {
			unsetTextfieldMaxInput(id);
		}
	}
}

function setTextfieldMaxInput(id) {
	var inclusive = 0;
	if ($('input[id=property_range_max_inclusive]').is(':checked')) {
		inclusive = 1;
	}

	if ($("#" + id).children(".controlProperties").children(".textFieldMax").length == 0) {
		$("#" + id).children(".controlProperties").append("<li class='textFieldMax' inclusive='" + inclusive + "' value='" + $('#editorTextfieldMax').val() + "'></li>");
	} else {
		$("#" + id).children(".controlProperties").children(".textFieldMax").attr('value', $('#editorTextfieldMax').val());
		$("#" + id).children(".controlProperties").children(".textFieldMax").attr('inclusive', inclusive);
	}
}

function unsetTextfieldMaxInput(id) {
	if ($("#" + id).children(".controlProperties").children(".textFieldMax").length > 0) {
		$("#" + id).children(".controlProperties").children(".textFieldMax").remove();
	}
}

function getPropertyRangeInput(id) {
	if ($("#" + id).children(".controlProperties").children(".textFieldMin").length > 0) {
		$('input[id=property_range_enabled]').attr('checked', true);
		$('#editorTextfieldMin').val($("#" + id).children(".controlProperties").children(".textFieldMin").attr('value'));
		if ($("#" + id).children(".controlProperties").children(".textFieldMin").attr('inclusive') == "1") {
			$('input[id=property_range_min_inclusive]').attr('checked', true);
		}
	}

	if ($("#" + id).children(".controlProperties").children(".textFieldMax").length > 0) {
		$('input[id=property_range_enabled]').attr('checked', true);
		$('#editorTextfieldMax').val($("#" + id).children(".controlProperties").children(".textFieldMax").attr('value'));
		if ($("#" + id).children(".controlProperties").children(".textFieldMax").attr('inclusive') == "1") {
			$('input[id=property_range_max_inclusive]').attr('checked', true);
		}
	}

	changeRangeEnabled(id);
}

function setPropertyRangeInput(id) {
	setPropertyTextfieldMin(id);
	setPropertyTextfieldMax(id);
}

function setPropertyNumberType(id) {
	if ($('#property_numberType').length > 0) {
		if ($("#" + id).children(".controlProperties").children(".numberType").length == 0) {
			$("#" + id).children(".controlProperties").append("<li class='numberType' value='" + $('#property_numberType').val() + "'></li>");
		} else {
			$("#" + id).children(".controlProperties").children(".numberType").attr('value', $('#property_numberType').val());
		}
	}
}

function getPropertyNumberType(id) {
	if ($("#" + id).children(".controlProperties").children(".numberType").length > 0) {
		var value = $("#" + id).children(".controlProperties").children(".numberType").attr('value');
		$("select[id=property_numberType] option[value='" + value + "']").attr("selected", "selected");
	}
}

function getValuePropertyNumberType(id) {
	if ($("#" + id).children(".controlProperties").children(".numberType").length > 0) {
		return $("#" + id).children(".controlProperties").children(".numberType").attr('value');
	}
	return "";
}

function setPropertyOptionsSelect(id) {

	if ($('#optionsList').length > 0) {

		if ($('#optionsList').children().length > 0) {
			if ($("#" + id).children(".controlProperties").children(".optionsSelect").length == 0) {
				$("#" + id).children(".controlProperties").append("<li class='optionsSelect'><ul class='options'></ul></li>");
			} else {
				$("#" + id).children(".controlProperties").children(".optionsSelect").html("<ul class='options'></ul>");
			}

			var ulOptions = $("#" + id).children(".controlProperties").children(".optionsSelect").children(".options");
			var countOptions = 0;
			$.each($('#optionsList').children(), function(index, value) {
				var option = $(value).children(".uiText").children(".optionsEditorValueField").children(".editorTextfield").val();
				if (option != "") {
					ulOptions.append("<li class='option' value='" + option + "'></li>");
					countOptions++;
				}
			});

			if (countOptions == 0) {
				$("#" + id).children(".controlProperties").children(".optionsSelect").remove();
			}

		} else {
			if ($("#" + id).children(".controlProperties").children(".optionsSelect").length > 0) {
				$("#" + id).children(".controlProperties").children(".optionsSelect").remove();
			}
		}
	}
}

function getPropertyOptionsSelect(id) {
	if ($("#" + id).children(".controlProperties").children(".optionsSelect").length > 0) {
		return $("#" + id).children(".controlProperties").children(".optionsSelect").children(".options").children();
	}
	return "";
}

function updatePropertiesComponent(id) {
	setPropertyDataName(id);
	setPropertyCaptionText(id);
	setPropertyGroupColumn(id);
	changeReadOnlyInput(id);
	changeRequiredInput(id);
	//changePrimaryKeyInput(id);
	setPropertyHint(id);
	setPropertyDefaultValue(id);
	setPropertyInvalidText(id);
	setPropertyRangeInput(id);
	setPropertyNumberType(id);
	setPropertyOptionsSelect(id);
	setPropertyOptionsSelectService(id);
	setPropertyPrimaryKey(id);
	setPropertyFilterSelect(id);
	setPropertyOtherField(id);
}

function getComponents() {
	var components = "";
	var items = $("#items_form").children();
	$.each(items, function(index, value) {
		if ($(value).attr("type") != "text/javascript") {
			if (components == "") {
				components = getComponentInput($(value));
			} else {
				components += ',' + getComponentInput($(value));
			}
		}
	});

	return components;
}

function getComponentInput(component) {
	if (component.attr('type') == 'group') {
		component = getJsonGroup(component);
	} else {
		component = getJsonInput(component);
	}
	return component;
}

function getJsonGroup(component) {
	var id = component.children(".controlInfo").attr("id");
	var json = '"' + getPropertyDataName(id) + '":{"type":"' + component.attr("type") + '",';
	//Valor sin cambios hardcore
	//json += '"properties":{"label":"' + getPropertyCaptionText(id) + '", "columns": ' + getPropertyGroupColumn(id) + '}';
	json += '"properties":{"appearance":"col4 well-white", "label":"' + getPropertyCaptionText(id) + '", "columns": ' + getPropertyGroupColumn(id) + '}';
	var items = component.children(".workspaceInnerWrapper").children();
	var components = "";
	$.each(items, function(index, value) {
		if ($(value).attr("type") != "text/javascript") {
			if (components == "") {
				components = getComponentInput($(value));
			} else {
				components += ',' + getComponentInput($(value));
			}
		}
	});

	if (components != "") {
		json += ',"components":{' + components + '}';
	}

	json += '}';

	return json;
}

function getJsonInput(component) {
	var id = component.attr("id");

	var json = '"' + getPropertyDataName(id) + '":{"type":"' + component.attr("type") + '",';
	json += '"properties":{"label":"' + getPropertyCaptionText(id) + '"';

	
	json += getPropertiesValues(id);	

	json += ',"readonly":' + getReadOnlyInput(id);
	
	json += ',"required":' + getRequiredInput(id);

	var textfieldMin = getPropertyTextfieldMin(id);
	
	var textfieldMax = getPropertyTextfieldMax(id);

	switch(component.attr("type")) {
		case 'text':
			if (textfieldMin != "") {
				json += ',"minLength":' + textfieldMin[0] + ',"minInclusive":' + textfieldMin[1];
			}
			if (textfieldMax != "") {
				json += ',"maxLength":' + textfieldMax[0] + ',"maxInclusive":' + textfieldMax[1];
			}
			break;
		case 'int':
			if (textfieldMin != "") {
				json += ',"minValue":' + textfieldMin[0] + ',"minInclusive":' + textfieldMin[1];
			}
			if (textfieldMax != "") {
				json += ',"maxValue":' + textfieldMax[0] + ',"maxInclusive":' + textfieldMax[1];
			}
			break;
		case 'date':
			if (textfieldMin != "") {
				var minValue = textfieldMin[0].substr(6, 4) + textfieldMin[0].substr(3, 2) + textfieldMin[0].substr(0, 2);
				json += ',"minValue":' + minValue + ',"minInclusive":' + textfieldMin[1];
			}
			if (textfieldMax != "") {
				var maxValue = textfieldMax[0].substr(6, 4) + textfieldMax[0].substr(3, 2) + textfieldMax[0].substr(0, 2);
				json += ',"maxValue":' + maxValue + ',"maxInclusive":' + textfieldMax[1];
			}
			break;
	}

	var invalidText = getPropertyInvalidText(id);
	if (invalidText != "") {
		json += ',"invalidText":"' + invalidText + '"';
	}

	var numberType = getValuePropertyNumberType(id);
	if (numberType != "") {
		json += ',"numberType":"' + numberType + '"';
	}

	var optionsSelect = getPropertyOptionsSelect(id);
	if (optionsSelect != "") {
		var options = "";
		$.each(optionsSelect, function(index, value) {
			if (options == "") {
				options = '"' + index + '":"' + $(value).attr('value') + '"';
			} else {
				options += ',"' + index + '":"' + $(value).attr('value') + '"';
			}
		});
		json += ',"options":{' + options + '}';
	}

	json += '}}';

	return json;
}

function generateComponentsWithJson(json) {
	$("#countItem").val("1");
	$("#items_form").html("");
	var items = [];
	var objectJson = jQuery.parseJSON(json);
	var components = objectJson.payload.components;
	$.each(components, function(name, component) {
		items.push(generateComponent(name, component, 5));

	});
	$("#items_form").append(items.join(''));
}

function generateComponent(name, component, columns) {
	if (component.type == 'group') {
		var html = generateHtmlGroup(name, component);
	} else {
		var html = generateHtmlInput(name, component, columns);

	}
	return html;
}

function generateHtmlGroup(name, component) {
	var countItem = $("#countItem").val();
	var id = 'input_group_' + countItem;
	var idGroup = 'container_group_' + countItem;
	$("#countItem").val(parseInt(countItem) + 1);

	var html = '<div class="default-group ui-draggable" id=' + idGroup + ' type="group">' + 
	'<div class="controlInfo" id=' + id + ' type="group">' + 
	'<div class="groupIcon"></div>' + '<div class="controlHeadline">' + 
	'<h3 class="controlLabel">' + component.properties.label + '</h3>' +
	'<span class="controlHint"></span>' + 
	'<span class="controlNameGroup">' + name + '</span>' + 
	'</div>' + 
	'<ul class="controlProperties"><li class="columns" value="' + component.properties.columns + '"></li></ul>' + 
    '</div>' + 
    '<div class="workspaceInnerWrapper ui-sortable" id="group_' + countItem + '"' + '>';

	if (component.hasOwnProperty('components')) {
		$.each(component.components, function(n, c) {
			html += generateComponent(n, c, component.properties.columns);
		});
	}

	html += '</div>' + '</div>';

	html += '<script type="text/javascript">' + '$("#group_' + countItem + '").sortable({' + 'receive: function( event, ui ) {' + 'itemRemoveClass(ui.item);' + 'itemAddClassGroupColumn(ui.item, "' + id + '");' + '},' + 'remove: function( event, ui ) {' + 'itemRemoveClass(ui.item);' + 'ui.item.addClass("default-input");' + '},' + 'connectWith: ".ui-sortable"' + '}).disableSelection();' + ' ' + '$("#' + id + '").dblclick(function() {' + '$("#propertiesPane").html(getGroupProperties("' + id + '"));' + 'setPropertiesGroup("' + id + '", "' + idGroup + '");' + '$("#propertiesPane").dialog("open");' + '});' + '</script>';

	return html;
}

function itemRemoveClass(item) {
	item.removeClass("default-input");
	item.removeClass("default-input-20");
	item.removeClass("default-input-30");
	item.removeClass("default-input-35");
	item.removeClass("default-input-block");
}

function itemAddClassGroupColumn(item, id) {
	var countColumns = parseInt(getPropertyGroupColumn(id));
	if (item.attr("type") != "group") {
		switch(countColumns) {
			case 1:
				item.addClass("default-input-block");
				break;
			case 2:
				item.addClass("default-input-35");
				break;
			case 3:
				item.addClass("default-input-30");
				break;
			case 4:
				item.addClass("default-input-20");
				break;
			case 5:
				item.addClass("default-input");
				break;
		}
	}
}

function getDefaultClassInputColumns(columns) {
	var defaultClass = "";
	switch(columns) {
		case 1:
			defaultClass = "default-input-block";
			break;
		case 2:
			defaultClass = "default-input-35";
			break;
		case 3:
			defaultClass = "default-input-30";
			break;
		case 4:
			defaultClass = "default-input-20";
			break;
		case 5:
			defaultClass = "default-input";
			break;
	}
	return defaultClass;
}

function generateHtmlInput(name, component, columns) {
	
	var countItem = $("#countItem").val();
	var id = 'input_text_' + countItem;
	var html = '<div class="' + getDefaultClassInputColumns(columns) + ' ui-draggable" id="' + id + '" type="' + component.type + '">' + '<div class="' + component.type + 'Icon"></div>' + '<div class="controlHeadline">' + '<h4 class="controlLabel">' + component.properties.label + '</h4>' + '<span class="controlHint"></span>' + generateHtmlControlNameTag(name, component.type) + '</div>' + '<ul class="controlProperties">' + generateHtmlPropertyHint(component) + generateHtmlPropertyReadOnly(component) + generateHtmlPropertyRequired(component) + generateHtmlPropertyDefaultValue(component) + generateHtmlPropertyRange(component) + generateHtmlPropertyInvalidText(component) + generateHtmlPropertyNumberType(component) + generateHtmlPropertyOptionsSelect(component) + generateHtmlPropertyGeneric(component) +'</ul>' + '</div>';

	html += '<script type="text/javascript">' + '$("#' + id + '").dblclick(function() {' + '$("#propertiesPane").html(' + getFunctionType(component.type) + '("' + id + '"));' + 'setPropertiesInput("' + id + '");' + '$("#propertiesPane").dialog("open");';

	if (component.type == 'date') {
		html += '$("#editorTextfieldMin").datepicker({ dateFormat: "dd/mm/yy", changeMonth: true, changeYear: true });';
		html += '$("#editorTextfieldMax").datepicker({ dateFormat: "dd/mm/yy", changeMonth: true, changeYear: true });';
	}

	html += '});' + '</script>';

	$("#countItem").val(parseInt(countItem) + 1);

	return html;
}

function generateHtmlControlNameTag(name, type) {
	switch(type) {
		case 'textArea':
			var html = '<input class="controlNameTextArea" value="' + name + '">';
			break;
		case 'selectOne':
			var html = '<select class="controlNameSelectOne"><option>' + name + '</option></select>';
			break;
		case 'date':
			var html = '<input class="controlName" value="' + name + '"><img src="./src/css/formbuilder/images/icon-calendar.png">';
			break;
		default:
			var html = '<input class="controlName" value="' + name + '">';
	}
	return html;

}

function generateHtmlPropertyOptionsSelect(component) {
	if (component.properties.hasOwnProperty('options')) {
		var html = "<li class='optionsSelect'><ul class='options'>";

		$.each(component.properties.options, function(index, value) {
			html += "<li class='option' value='" + value + "'></li>";
		});

		html += "</ul></li>";
		return html;
	}
	return "";
}

function generateHtmlPropertyHint(component) {
	if (component.properties.hasOwnProperty('hint')) {
		return "<li class='hint' val='" + component.properties.hint + "'></li>"
	}
	return "";
}

function generateHtmlPropertyReadOnly(component) {
	if (component.properties.readonly) {
		return "<li class='readonly'>Solo lectura</li>";
	}
	return "";
}

function generateHtmlPropertyRequired(component) {
	if (component.properties.required) {
		return "<li class='required'>*</li>";
	}
	return "";
}

function generateHtmlPropertyDefaultValue(component) {
	if (component.properties.hasOwnProperty('defaultValue')) {
		return "<li class='defaultValue' val='" + component.properties.defaultValue + "'></li>";
	}
	return "";
}

function generateHtmlPropertyInvalidText(component) {
	if (component.properties.hasOwnProperty('invalidText')) {
		return "<li class='invalidText' val='" + component.properties.invalidText + "'></li>";
	}
	return "";
}

function generateHtmlPropertyGeneric(component) {
	var result = '';
		$.each(component.properties, function(name, value) {
			/// do stuff
			if (name == 'label' || name == 'readonly' || name == 'required' || name == 'constraint'){
				if (name == 'constraint'){
					result += "<li class='" + name +"' val='" + JSON.stringify(value) + "'></li>";
				}
			}else{
				result += "<li class='" + name +"' val='" + value + "'></li>";
			}
		});
	return result;
}

function generateHtmlPropertyNumberType(component) {
	if (component.properties.hasOwnProperty('numberType')) {
		return "<li class='numberType' value='" + component.properties.numberType + "'></li>";
	}
	return "";
}

function generateHtmlPropertyRange(component) {
	var html = "";
	html += generateHtmlPropertyMinRangeForType(component, "minLength");
	html += generateHtmlPropertyMinRangeForType(component, "minValue");
	html += generateHtmlPropertyMaxRangeForType(component, "maxLength");
	html += generateHtmlPropertyMaxRangeForType(component, "maxValue");

	return html;
}

function generateHtmlPropertyMinRangeForType(component, property) {
	if (component.properties.hasOwnProperty(property)) {
		var inclusive = "0";
		if (component.properties.minInclusive) {
			inclusive = "1";
		}
		var minValue = component.properties[property];
		if (component.type == "date") {
			minValue = minValue.toString().substr(6, 2) + "/" + minValue.toString().substr(4, 2) + "/" + minValue.toString().substr(0, 4);
		}
		return "<li class='textFieldMin' inclusive='" + inclusive + "' value='" + minValue + "'></li>";
	}
	return "";
}

function generateHtmlPropertyMaxRangeForType(component, property) {
	if (component.properties.hasOwnProperty(property)) {
		var inclusive = "0";
		if (component.properties.maxInclusive) {
			inclusive = "1";
		}
		var maxValue = component.properties[property];
		if (component.type == "date") {
			maxValue = maxValue.toString().substr(6, 2) + "/" + maxValue.toString().substr(4, 2) + "/" + maxValue.toString().substr(0, 4);
		}
		return "<li class='textFieldMax' inclusive='" + inclusive + "' value='" + maxValue + "'></li>";
	}
	return "";
}

function getFunctionType(type) {
	switch(type) {
		case 'text':
			var namefunction = 'getInputProperties';
			break;
		case 'int':
			var namefunction = 'getNumericProperties';
			break;
		case 'date':
			var namefunction = 'getDateProperties';
			break;
		case 'selectOne':
			var namefunction = 'getSelectOneProperties';
			break;
		case 'textArea':
			var namefunction = 'getTextAreaProperties';
			break;

	}
	return namefunction;
}

