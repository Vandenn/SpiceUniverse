var uisetup = {
	init: function()
	{
		if(global.devMode) uisetup.testingInit();
		else uisetup.officialInit();
	},

	officialInit: function()
	{
		$('#resourceList li').eq(0).css({'opacity':0});
		$('#resourceList li').eq(1).hide();
		$('#resourceList li').eq(2).hide();
	},

	testingInit: function()
	{
		$('#resourceList li').eq(1).hide();
	},
	
	buttonArea: function(params)
	{
		var obj = $("<div>").attr("id", "buttonAreaDiv");
		return obj;
	},
	/**
		params passed to the title
		text: title text
		id: title id
		titleClass: optional title class
	*/
	pageTitle: function(params)
	{
		var obj = $("<h1>");
		
		if(params.text) obj.text(params.text);
		if(params.titleClass) obj.addClass(params.titleClass);
		if(params.id) obj.attr("id", params.id);
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
