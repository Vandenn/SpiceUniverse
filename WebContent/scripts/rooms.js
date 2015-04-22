var rooms = {
	switchRoom: function(rooms, roomName)
	{
		$(".roomContentDiv").empty();
		if(rooms[roomName]) rooms[roomName].create();
	}
};