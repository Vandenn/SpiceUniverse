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
		button.setClick('btn_begForSpice', function(){
			var cur_salt = parseInt($('#val_salt').text()); 
			var val_rand = Math.floor(Math.random() * 5) + 1;
			
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
		});
	}
};