var button = {
	/**
		params is an object that passes data to be included in the button
		text: text in button
		id: button id
	*/
	create: function(params)
	{
		var obj = $('<button>')
								.addClass("actionButton")
								.attr("type", "button");
		if(params.text) obj.text(params.text);
		if(params.id) obj.attr("id", params.id);
		
		return obj;
	},
	
	setClick: function(id, func)
	{
		$("#" + id).on('click', func);
	}
};