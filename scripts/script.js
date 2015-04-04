(function(){
	var engine = window.engine = {
		init: function(params)
		{
			uisetup.init(params);
			chapterHandler.init(params);
		}
	}
})();

/*When the document loads.*/
$(function(){
	engine.init({});
});