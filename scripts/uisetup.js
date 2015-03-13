var uisetup = {
	init: function()
	{
		$('#resourceList li').eq(0).css({'opacity':0});
		$('#resourceList li').eq(1).hide();
		$('#resourceList li').eq(2).hide();
		$('#resourceList li').eq(3).hide();
	},
	
	buttonArea: function(params)
	{
		var obj = $("<div>").attr("id", "buttonAreaDiv");
		return obj;
	},
	/**
		params passed to the title
		text: title text
		titleClass: optional title class
	*/
	pageTitle: function(params)
	{
		var obj = $("<h1>");
		
		if(params.text) obj.text(params.text);
		if(params.titleClass) obj.addClass(params.titleClass);
		else obj.addClass("titleFormat");
		
		return obj;
	},
	/**
		params passed to div
		divClass: class to be set to the div
		divId: id of the div
	*/
	createDiv: function(params)
	{
		var obj = $("<div>");

		if(params.divClass) obj.addClass(params.divClass);
		if(params.divId) obj.attr("id", params.divId);

		return obj;
	}
};