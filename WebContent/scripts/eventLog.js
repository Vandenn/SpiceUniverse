var eventLog = {
	/**
	 * A function to display the user's current status in
	 * the game's log.
	 */
	logStatus: function(string)
	{
		$('#log').append("<span class=\"log_text\">" + string + "<br></span>");
		$("#log").animate({ scrollTop: $('#log')[0].scrollHeight}, 100);
	}
};