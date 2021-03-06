var chapterHandler = {
	init: function(params)
	{
		if(global.devMode) chapterHandler.testingInit(params);
		else chapterHandler.officialInit(params);
	},

	officialInit: function(params)
	{
		//chapter[0].init(params);
		loadGame();
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
		if(chapter[chapterNumber]) save.cur_chapter = chapterNumber;
		chapter[chapterNumber].init();
	},

	loadChapter: function(chapterNumber)
	{
		global.isLoad = true;
		$("main").empty();
		if(chapter[chapterNumber]) save.cur_chapter = chapterNumber;
		chapter[chapterNumber].init();
	}
};