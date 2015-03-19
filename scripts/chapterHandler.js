var chapterHandler = {
	init: function(params)
	{
		if(global.devMode) chapterHandler.testingInit();
		else chapterHandler.officialInit();
	},

	officialInit: function(params)
	{
		chapter[0].init();
	},

	testingInit: function(params)
	{
		chapter[1].init();
	},
	
	switchChapter: function(chapterNumber)
	{
		$("main").empty();
		chapter[chapterNumber].init();
	}
};