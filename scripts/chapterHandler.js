var chapterHandler = {
	init: function(params)
	{
		chapter[0].init();
	},
	
	switchChapter: function(chapterNumber)
	{
		$("main").remove(".");
		chapter[chapterNumber].init();
	}
};