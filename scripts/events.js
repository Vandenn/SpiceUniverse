var events = {
	begSuccess: ["A pinch of salt dropped from the sky.", "Someone dropped 2g of salt. You picked it up.", "You picked off the salt from leftover french fries.", "You performed on the sidewalk. An ammused bypasser dropped off some salt as a tip.", "A kind stranger gave you a pack of salt."],
	begFail: ["People pass by you. You were ignored.", "A child spat on you.", "You cried out but no one gave you their attention.", "\"Notice me, senpai!\", you yelled. You were ignored.", "You beg for spice. You were ignored."],
	noAdvice: ["\"Scram, kid.\", he says to you.", "He points a gun at you. Maybe it's not the best time to ask.", "The boss is sleeping."],
	stealFromPedestrian_success: ["You stole from the ignorant pedestrian.", "You scored some dough.", "\"Where did my salt go?\", the pedestrian exclaimed.", "Your sleight of hand was on your side."],
	stealFromPedestrian_fail: ["You tried to steal but the pedestrian had nothing.", "You back off. He looks too scary.", "\"Get off you bum!\", said the pedestrian.", "Your footsteps were heard. You stop."],
	recruitLocalPotentials_success: ["\"Sure thing, homie\", says the new recruit.", "The recruit nods as you lower your threatening voice.", "You blackmail the recruit successfully.", "\"This will be fun.\", he says."],
	recruitLocalPotentials_fail: ["\"You seriously do not want to mess with me\". You back off.", "That person is part of another gang.", "Your voice cracked, the potential laughs and leaves.", "The tall man stares at you. You get the message and back off."],
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
		params is an object that passes data to be included in the battle
		text: text in battle
		id: battle id
		enemy: enemy health
	*/
	createBattle: function(params)
	{
		var objText = $("<div>")
						.addClass("eventDialogTextDiv");
		var objVisuals = $("<div>")
						.addClass("eventDialogVisualsDiv");
		var objButtons = $("<div>")
						.addClass("eventDialogButtonDiv");
		var obj = $("<div>")
						.addClass("eventDialog")
						.append(objText)
						.append(objVisuals)
						.append(objButtons);
								
		if(params.text) objText.text(params.text);
		if(params.id) obj.attr("id", params.id);
		objButtons.append(new button.create({
			text: "Punch",
			func: function()
			{
				
			}
		}));
		for(var i = 0; i < playerItems.length; i++)
		{
			switch(playerItems[i].type)
			{
				case itemType.gun:
					objButtons.append(new button.create({
						text: "Shoot",
						func: function()
						{
							
						}
					}));
					break;
				case itemType.meds:
					objButtons.append(new button.create({
						text: "Heal",
						func: function()
						{
							
						}
					}));
					break;
				default:
					break;
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
