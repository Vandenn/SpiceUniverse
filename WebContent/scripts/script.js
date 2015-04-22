(function(){
	var engine = window.engine = {
		init: function(params)
		{
			uisetup.init(params);
			//chapterHandler.init(params);
			initGame();
		}
	}
})();

/*When the document loads.*/
$(function(){
	engine.init({});
});