var chapterHandler = {
	init: function(params)
	{
		chapter[1].init();
	},
	
	switchChapter: function(chapterNumber)
	{
		$("main").empty();
		chapter[chapterNumber].init();
	}
};