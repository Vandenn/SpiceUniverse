chapter[1] = {
	init: function(params)
	{
		$('main').append(new uisetup.createDiv({
			divClass: "roomContentDiv",
			divId: "chap2_room_content_div"
		}));
		rooms.switchRoom(chapter[1].chap2rooms, "Boss Office");
		chapter[1].createRoomButtons();
	},
	
	createRoomButtons: function()
	{
		$('main')
			.append(new uisetup.createDiv({
				divClass: "roomButtonDiv",
				divId: "chap2_room_button_div"
			}));
		$('#chap2_room_button_div')
			.append(new button.create({
				text: "Boss Office",
				id: "btn_room_bossOffice",
				func: function()
				{
					rooms.switchRoom(chapter[1].chap2rooms, "Boss Office");
				},
			})).append("<br />");
		$('#chap2_room_button_div')
			.append(new button.create({
				text: "Jobs",
				id: "btn_room_jobs",
				func: function()
				{
					rooms.switchRoom(chapter[1].chap2rooms, "Jobs");
				},
			})).append("<br />");
		$('#chap2_room_button_div')
			.append(new button.create({
				text: "Inventory",
				id: "btn_room_inventory",
				func: function()
				{
					rooms.switchRoom(chapter[1].chap2rooms, "Inventory");
				},
			})).append("<br />");
		$('#chap2_room_button_div')
			.append(new button.create({
				text: "Store",
				id: "btn_room_store",
				func: function()
				{
					rooms.switchRoom(chapter[1].chap2rooms, "Store");
				},
			})).append("<br />");
		if(chapter[1].chap2data.roomsUnlocked[0] == false) $('#btn_room_jobs').hide();
		if(chapter[1].chap2data.roomsUnlocked[1] == false) $('#btn_room_inventory').hide();
		if(chapter[1].chap2data.roomsUnlocked[2] == false) $('#btn_room_store').hide();
	},

	chap2rooms: {
		'Boss Office': {
			name: "Boss Office",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Boss Office"
				}));
				$('.roomContentDiv').append(uisetup.buttonArea());
				
				$('#buttonAreaDiv')
					.append(new button.create({
						text: "Ask for Advice",
						id: "btn_askForAdvice"
					}));

				button.setClick('btn_askForAdvice', function()
				{
					if(chapter[1].chap2data.roomsUnlocked[0] == false)
					{
						eventLog.logStatus("You ask for advice. \"Go to Yao Pohn. He may have some jobs for you.\", he says.");
						chapter[1].chap2data.roomsUnlocked[0] = true;
						$('#btn_room_jobs').show();
					}
					else if(chapter[1].chap2data.roomsUnlocked[0] == true &&
						chapter[1].chap2data.roomsUnlocked[1] == false)
					{
						eventLog.logStatus("\"Here's your inventory. Put your loot in there.\", says he.");
						chapter[1].chap2data.roomsUnlocked[1] = true;
						$('#btn_room_inventory').show();
					}
					else if(chapter[1].chap2data.roomsUnlocked[1] == true &&
						chapter[1].chap2data.roomsUnlocked[2] == false)
					{
						eventLog.logStatus("He looks at you sternly. \"Need equipment, huh. Here's the address of the black market.\", he says.");
						chapter[1].chap2data.roomsUnlocked[2] = true;
						$('#btn_room_store').show();
					}
					else if(chapter[1].chap2data.roomsUnlocked[2] == true)
					{
						eventLog.logStatus(events.noAdvice[Math.floor(Math.random() * events.noAdvice.length)]);
					}
				});
			}
		},
		'Jobs': {
			name: "Jobs",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Jobs"
				}));
				$('.roomContentDiv').append(uisetup.buttonArea());

				$('#buttonAreaDiv')
					.append(new button.create({
						text: "Job: Steal From Pedestrian",
						id: "btn_jobs_stealFromPedestrian"
					})).append("<br />");

				$('#buttonAreaDiv')
					.append(new button.create({
						text: "Job: Recruit Local Potentials",
						id: "btn_jobs_recruitLocalPotentials"
					})).append("<br />");
			}
		},
		'Inventory': {
			name: "Inventory",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Inventory"
				}));
				$('.roomContentDiv').append(uisetup.buttonArea());
			}
		},
		'Store': {
			name: "Store",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Black Market"
				}));
				$('.roomContentDiv').append(uisetup.buttonArea());
			}
		}
	},

	chap2events: {
		
	},

	chap2data: {
		roomsUnlocked: [false, false, false] //Jobs, Inventory, Store
	}
};