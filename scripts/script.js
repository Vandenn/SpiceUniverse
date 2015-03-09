(function(){
	var engine = window.engine = {
		init: function(params)
		{
			chapterHandler.init();
		}
	}
})();

/*When the document loads.*/
$(function(){
	engine.init();
});