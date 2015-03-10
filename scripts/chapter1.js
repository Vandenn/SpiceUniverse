chapter[0] = {
	init: function(params)
	{
		$('#buttonAreaDiv')
			.append(new button.create({
				text: "Beg for Spice",
				id: "btn_begForSpice"
			}));

		$('#resourceList li').eq(0).css({'opacity':0});
		$('#resourceList li').eq(1).hide();
		$('#resourceList li').eq(2).hide();

		eventLog.logStatus("You're in a dark alley.");

		/**
		 * Event to handle when the button for begging
		 * for spice is clicked.
		 */
		button.setClick('btn_begForSpice', chapter[0].begForSpice);
	},
	
	/**
		What happens when the beg for spice option is clicked.
	*/
	begForSpice: function()
	{
		var cur_salt = parseInt($('#val_salt').text()); 
		var val_rand = Math.floor(Math.random() * 5) + 1;
		var button_array = [];
		
		/*Spice probabilities*/
		if(Math.floor(Math.random() * 101) < 80) 
		{
			eventLog.logStatus(events.begSuccess[val_rand-1]);
			cur_salt = cur_salt + val_rand;
			$('#val_salt').text(cur_salt);
			/*Show salt if transparent*/
			if($('#resourceList li').eq(0).css("opacity") == 0)
			{
				$('#resourceList li').eq(0).css({'opacity':1});
			}
		}
		else
			eventLog.logStatus(events.begFail[val_rand-1]);
		
		/*Steal probability*/
		if(Math.floor(Math.random() * 101) < 75 && cur_salt > 20)
		{
			chapter[0].chap1events.thiefSteal();
		}
	},
	
	/**
		Event popups in chapter 1.
	*/
	chap1events: {
		thiefSteal: function()
		{
			button_array = [];
			button_array.push(
				new button.create({
					text: "Chase",
					func: function()
					{
						eventLog.logStatus("You go after the thief.");
						events.remove("evt_thiefSteal");
						chapter[0].chap1events.chaseThief();
					}
				})
			);
			button_array.push(
				new button.create({
					text: "Ignore",
					func: function()
					{
						$('#val_salt').text("0");
						eventLog.logStatus("You lost all your salt.");
						events.remove("evt_thiefSteal");
					}
				})
			);
			$('body')
				.append(new events.create({
					text: "A thief stole your salt!",
					id: "evt_thiefSteal",
					buttons: button_array
				}));
		},
		chaseThief: function()
		{
			button_array = [];
			button_array.push(
				new button.create({
					text: "Stab Thief",
					func: function()
					{
						eventLog.logStatus("You stab the thief.");
						events.remove("evt_chaseThief");
					}
				})
			);
			button_array.push(
				new button.create({
					text: "Chase and Tackle Thief",
					func: function()
					{
						eventLog.logStatus("You chase and tackle the thief.");
						events.remove("evt_chaseThief");
					}
				})
			);
			$('body')
				.append(new events.create({
					text: "You chase the thief! How do you stop him?",
					id: "evt_chaseThief",
					buttons: button_array
				}));
		}
	}
};