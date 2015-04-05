var save = {
	username: "",
	cur_chapter: 0,
	salt: 0,
	pepper: 0, 
	cumin: 0,
	chap2rooms: [false, false, false],
	gun: -1,
	meds: -1,
    knife: -1,
    bomb: -1,
    isBoss: false,
    defeatedBosses: [false, false, false]
};


function loadData(params)
{
	if(params.username && !(params.username === "")) save.username = params.username;
	if(params.cur_chapter && !(params.cur_chapter === "")) save.cur_chapter = parseInt(params.cur_chapter);
	if(params.salt && !(params.salt === "")) save.salt = parseInt(params.salt);
	if(params.pepper && !(params.pepper === "")) save.pepper = parseInt(params.pepper);
	if(params.cumin && !(params.cumin === "")) save.cumin = parseInt(params.cumin);
	if(params.chap2rooms1 && !(params.chap2rooms1 === "")) save.chap2rooms[0] = params.chap2rooms1 === "true";
	if(params.chap2rooms2 && !(params.chap2rooms2 === "")) save.chap2rooms[1] = params.chap2rooms2 === "true";
	if(params.chap2rooms3 && !(params.chap2rooms3 === "")) save.chap2rooms[2] = params.chap2rooms3 === "true";
	if(params.gun && !(params.gun === "")) save.gun = parseInt(params.gun);
	if(params.meds && !(params.meds === "")) save.meds = parseInt(params.meds);
	if(params.knife && !(params.knife === "")) save.knife = parseInt(params.knife);
	if(params.bomb && !(params.bomb === "")) save.bomb = parseInt(params.bomb);
	if(params.isBoss && !(params.isBoss === "")) save.isBoss = params.isBoss === "true";
	if(params.defeatedBosses1 && !(params.defeatedBosses1 === "")) save.defeatedBosses[0] = params.defeatedBosses1 === "true";
	if(params.defeatedBosses2 && !(params.defeatedBosses2 === "")) save.defeatedBosses[1] = params.defeatedBosses2 === "true";
	if(params.defeatedBosses3 && !(params.defeatedBosses3 === "")) save.defeatedBosses[2] = params.defeatedBosses3 === "true";

	loadGame();
}

function loadGame()
{	
	switch(save.cur_chapter)
	{
		case 0:
			$('#val_salt').text(save.salt);
			chapterHandler.loadChapter(0);
			break;
		case 1:
			$('#val_salt').text(save.salt);
			$('#val_pepper').text(save.pepper);
			$('#val_cumin').text(save.cumin);
			chapterHandler.loadChapter(1);
			break;
		default:
			chapterHandler.loadChapter(0);
			break;
	}
}

function saveGame()
{
	
}
