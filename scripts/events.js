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
		enemy_health: enemy health
		enemy_damage: enemy damage
		enemy_speed: enemy speed
		enemy_name: enemy name
		success: success function
		failure: failure function
	*/
	createBattle: function(params)
	{
		var objText = $("<div>")
						.addClass("eventDialogTextDiv");
		var objVisuals = $("<div>")
						.addClass("eventDialogVisualsDiv");
		var objButtons = $("<div>")
						.addClass("eventDialogButtonDiv");
		var playerDiv = $("<div>")
						.addClass("battlePlayerDiv");
		var enemyDiv = $("<div>")
						.addClass("battleEnemyDiv");
		var obj = $("<div>")
						.addClass("eventDialog")
						.append(objText)
						.append(objVisuals)
						.append(objButtons);
		var battleId = params.id ? params.id : "battle_event";
								
		objVisuals.append(playerDiv).append(enemyDiv);

		if(params.text) objText.text(params.text);
		obj.attr("id", battleId);

		playerDiv.append("<span>Player</span><br />");
		playerDiv.append("<span id = \"player_health\">" + parseInt($('#val_pepper').text()) + "</span>/" + constants.pepperMax + " pepper <br />");
		enemyDiv.append("<span>" + (params.enemy_name ? params.enemy_name : "Enemy") + "</span><br />");
		enemyDiv.append("<span id = \"enemy_health\">" + (params.enemy_health ? params.enemy_health : 100).toString() + "</span>/" + (params.enemy_health ? params.enemy_health : 100).toString() + " pepper <br />");

		global.battleInterval = setInterval(function(){
			var ph = parseInt($('#player_health').text());
			ph -= params.enemy_damage ? params.enemy_damage : 10;
			if(ph <= 0) 
			{
				ph = 0;
				$('#val_pepper').text(ph);
				if(params.failure) params.failure();
				events.remove(battleId);
			}
			else
			{
				$('#player_health').text(ph);
			}
		}, params.enemy_speed ? params.enemy_speed : 2000);
		
		objButtons.append(new button.create({
			text: "Punch",
			func: function()
			{
				var eh = parseInt($('#enemy_health').text());
				eh -= 10;
				if(eh <= 0) 
				{
					eh = 0;
					$('#val_pepper').text(parseInt($('#player_health').text()));
					if(params.success) params.success();
					events.remove(battleId);
				}
				else
				{
					$('#enemy_health').text(eh);
				}
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
							var eh = parseInt($('#enemy_health').text());
							console.log(i);
							eh -= playerItems[i].value;
							if(eh <= 0) 
							{
								eh = 0;
								$('#val_pepper').text(parseInt($('#player_health').text()));
								if(params.success) params.success();
								events.remove(battleId);
							}
							else
							{
								$('#enemy_health').text(eh);
							}
						}
					}));
					break;
				case itemType.meds:
					objButtons.append(new button.create({
						text: "Heal",
						func: function()
						{
							var ph = parseInt($('#player_health').text());
							if(ph < constants.pepperMax)
							{
								ph += playerItems[i].value;
								if(ph > constants.pepperMax) ph = constants.pepperMax;
								$('#player_health').text(ph);
							}
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
