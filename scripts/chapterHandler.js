var chapterHandler = {
	init: function(params)
	{
		if(global.devMode) chapterHandler.testingInit(params);
		else chapterHandler.officialInit(params);
	},

	officialInit: function(params)
	{
		chapter[0].init(params);
	},

	testingInit: function(params)
	{
		//chapter[1].init(params);
		//chapterHandler.loadChapter(1, {isLoad: true});
		loadGame();
	},
	
	switchChapter: function(chapterNumber)
	{
		$("main").empty();
		chapter[chapterNumber].init({});
	},

	loadChapter: function(chapterNumber, params)
	{
		$("main").empty();
		chapter[chapterNumber].init(params);
	}
};