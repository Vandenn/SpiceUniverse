var uisetup = {
	buttonArea: function(params)
	{
		$("main").append("<div>").attr("id", "buttonAreaDiv");
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
		
		$("main").append(obj);
	}
};