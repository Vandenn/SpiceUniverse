var button = {
	/**
		params is an object that passes data to be included in the button
		text: text in button
		id: button id
		func: button function
	*/
	create: function(params)
	{
		var obj = $('<button>')
								.addClass("actionButton")
								.attr("type", "button");
		if(params.text) obj.text(params.text);
		if(params.id) obj.attr("id", params.id);
		if(params.func)
		{
			obj.on('click', params.func);
		}
		
		return obj;
	},
	
	/**
		btn: Button object or id
		func: Function to be put in button.
	*/
	setClick: function(btn, func)
	{
		if(typeof btn == "string") 
			$("#" + btn).on('click', func);
		else
		{
			btn.on('click', func);
		}
	}
};