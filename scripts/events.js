var events = {
	begSuccess: ["A pinch of salt dropped from the sky.", "Someone dropped 2g of salt. You picked it up.", "You picked off the salt from leftover french fries.", "You performed on the sidewalk. An ammused bypasser dropped off some salt as a tip.", "A kind stranger gave you a pack of salt."],
	begFail: ["People pass by you. You were ignored.", "A child spat on you.", "You cried out but no one gave you their attention.", "\"Notice me, senpai!\", you yelled. You were ignored.", "You beg for spice. You were ignored."],
	noAdvice: ["\"Scram, kid.\", he says to you.", "He points a gun at you. Maybe it's not the best time to ask.", "The boss is sleeping."],
	/**
		params is an object that passes data to be included in the event
		text: text in event
		id: event id
		buttons: button list
	*/
	create: function(params)
	{
		var objText = $("<div>")
						.addClass("eventDialogTextDiv");
		var objButtons = $("<div>")
						.addClass("eventDialogButtonDiv");
		var obj = $("<div>")
						.addClass("eventDialog")
						.append(objText)
						.append(objButtons);
								
		if(params.text) objText.text(params.text);
		if(params.id) obj.attr("id", params.id);
		if(params.buttons)
		{
			for(var i = 0; i < params.buttons.length; i++)
			{
				objButtons.append(params.buttons[i]);
			}
		}
		
		$("button").not("#eventDialogButtonDiv button").attr("disabled", "disabled");
		
		return obj;
	},
	
	/**
		id: event id
	*/
	remove: function(id)
	{
		$("button").not("#eventDialogButtonDiv button").removeAttr("disabled");
		$("#" + id).remove();
	}
};