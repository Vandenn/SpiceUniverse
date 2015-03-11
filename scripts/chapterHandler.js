var chapterHandler = {
	init: function(params)
	{
		chapter[0].init();
	},
	
	switchChapter: function(chapterNumber)
	{
		$("main").empty();
		chapter[chapterNumber].init();
	}
};