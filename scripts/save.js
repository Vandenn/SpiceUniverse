var save = {
	//ORIGINAL
	/*cur_chapter: 0,
	salt: 0,
	pepper: 0, 
	cumin: 0,
	chap2rooms: [false, false, false],
	gun: -1,
	meds: -1,
    knife: -1,
    bomb: -1,
    isBoss: false,
    defeatedBosses: [false, false, false]*/
    //TEST
    cur_chapter: 1,
	salt: 100,
	pepper: 10, 
	cumin: 1999,
	chap2rooms: [true, true, false],
	gun: 1,
	meds: -1,
    knife: -1,
    bomb: -1,
    isBoss: false,
    defeatedBosses: [false, false, false]
};

function loadGame()
{
	loadFromDB();

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
			chapterHandler.switchChapter(0);
			break;
	}
}

function loadFromDB()
{

}

function saveToDB()
{

}
