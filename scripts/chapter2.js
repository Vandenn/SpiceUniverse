chapter[1] = {
	init: function(params)
	{
		uisetup.pageTitle({
			text: "Boss Office"
		});
		uisetup.buttonArea();
		
		$('#buttonAreaDiv')
			.append(new button.create({
				text: "Ask for Advice",
				id: "btn_askForAdvice"
			}));
	},
	
	chap2events: {
		
	}
};