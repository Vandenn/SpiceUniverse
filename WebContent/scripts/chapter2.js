chapter[1] = {
	init: function(params)
	{
		$('main').append(new uisetup.createDiv({
			divClass: "roomContentDiv",
			divId: "chap2_room_content_div"
		}));
		chapter[1].createRoomButtons(params);
		chapter[1].chap2events.autoIncrement(params);

		if(global.isLoad)
		{
			chapter[1].chap2data.roomsUnlocked = save.chap2rooms;
			chapter[1].refreshRooms(params);

			if(save.isBoss) chapter[1].becomeBoss(params);

			chapter[1].chap2data.defeatedBosses = save.defeatedBosses;

			if(save.gun > -1) playerItems.push(items[itemType.gun][save.gun]);
			if(save.meds > -1) playerItems.push(items[itemType.meds][save.meds]);
			if(save.knife > -1) playerItems.push(items[itemType.knife][save.knife]);
			if(save.bomb > -1) playerItems.push(items[itemType.bomb][save.bomb]);

			global.isLoad = false;
		}
		
		if(chapter[1].chap2data.isBoss) rooms.switchRoom(chapter[1].chap2rooms, "Your Office");
		else rooms.switchRoom(chapter[1].chap2rooms, "Boss Office");	
	},
	
	createRoomButtons: function(params)
	{
		$('main')
			.append(new uisetup.createDiv({
				divClass: "roomButtonDiv",
				divId: "chap2_room_button_div"
			}));
		$('#chap2_room_button_div')
			.append(new button.create({
				text: "The Boss' Office",
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
			chapter[1].refreshRooms(params);
	},

	refreshRooms: function(params)
	{
		if(chapter[1].chap2data.roomsUnlocked[0] == false) $('#btn_room_jobs').hide(); else $('#btn_room_jobs').show();
		if(chapter[1].chap2data.roomsUnlocked[1] == false) $('#btn_room_inventory').hide(); else $('#btn_room_inventory').show();
		if(chapter[1].chap2data.roomsUnlocked[2] == false) $('#btn_room_store').hide(); else $('#btn_room_store').show();
	},

	chap2rooms: {
		'Boss Office': {
			name: "Boss Office",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "The Boss' Office"
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
		'Your Office': {
			name: "Your Office",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Street Map"
				}));
				$('.roomContentDiv').append(new uisetup.createDiv({
					divClass: "streetMapDiv",
					divId: "chap2_map_div"
				}));
				$('.streetMapDiv').append(new uisetup.createDiv({
					divClass: "streetMapListDiv",
					divId: "chap2_map_list_div"
				}));
				
				$('.streetMapListDiv')
					.append(new button.create({
						text: "Carlos Juan Panichina, Alpha Slayer Gang Boss",
						id: "btn_boss1"
					})).append("<br />");

				$('.streetMapListDiv')
					.append(new button.create({
						text: "Hurishima Fujayaki, West Dragon Gang Boss",
						id: "btn_boss2"
					})).append("<br />");

				$('.streetMapListDiv')
					.append(new button.create({
						text: "King Candy, The Candy King",
						id: "btn_boss3"
					})).append("<br />");

				button.setClick('btn_boss1', chapter[1].chap2events.battle2);
				button.setClick('btn_boss2', chapter[1].chap2events.battle3);
				button.setClick('btn_boss3', chapter[1].chap2events.battle4);
			}
		},
		'Jobs': {
			name: "Jobs",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Jobs"
				}));

				$('.roomContentDiv').append(new uisetup.createDiv({
					divClass: "jobsDiv",
					divId: "chap2_jobs_div"
				}));
				$('.jobsDiv').append(new uisetup.createDiv({
					divClass: "jobsImgDiv",
					divId: "chap2_jobs_img_div"
				}));
				$('.jobsDiv').append(new uisetup.createDiv({
					divClass: "jobsListDiv",
					divId: "chap2_jobs_list_div"
				}));
				$('.jobsImgDiv').append("<img class=\"jobsImg\">");
				
				chapter[1].loadJobs();
			}
		},
		'Inventory': {
			name: "Inventory",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Inventory"
				}));
				$('.roomContentDiv').append(new uisetup.createDiv({
					divClass: "inventoryDiv",
					divId: "chap2_inventory_div"
				}));
				$('.inventoryDiv').append(new uisetup.createDiv({
					divClass: "inventoryListDiv",
					divId: "chap2_inventory_list_div"
				}));
				$('.inventoryDiv').append(new uisetup.createDiv({
					divClass: "inventoryDescDiv",
					divId: "chap2_inventory_desc_div"
				}));
				$('.inventoryDescDiv').hide();
				
				chapter[1].populateInventory();

				$('.inventoryDescDiv').append(new uisetup.createDiv({
					divClass: "inventoryDescName",
					divId: "chap2_inventory_desc_name"
				}));
				$('.inventoryDescDiv').append(new uisetup.createDiv({
					divClass: "inventoryDescDesc",
					divId: "chap2_inventory_desc_desc"
				}));
				$('.inventoryDescName').append("<h2> <span id=\"inventoryItemName\"></h2>");
				$('.inventoryDescDesc').append("<span id=\"inventoryItemDesc\">");
			}
		},
		'Store': {
			name: "Store",
			create: function()
			{
				$('.roomContentDiv').append(uisetup.pageTitle({
					text: "Black Market"
				}));
				$('.roomContentDiv').append(new uisetup.createDiv({
					divClass: "blackMarketDiv",
					divId: "chap2_black_market_div"
				}));
				$('.blackMarketDiv').append(new uisetup.createDiv({
					divClass: "blackMarketDescDiv",
					divId: "chap2_black_market_desc_div"
				}));
				$('.blackMarketDescDiv').hide();
				$('.blackMarketDiv').append(new uisetup.createDiv({
					divClass: "blackMarketItemsDiv",
					divId: "chap2_black_market_items_div"
				}));
				$('.blackMarketDescDiv').css("right", 20 + $('.blackMarketItemsDiv').width());
				$('.blackMarketDescDiv').append(new uisetup.createDiv({
					divClass: "blackMarketDescName",
					divId: "chap2_black_market_desc_name"
				}));
				$('.blackMarketDescDiv').append(new uisetup.createDiv({
					divClass: "blackMarketDescPrice",
					divId: "chap2_black_market_desc_price"
				}));
				$('.blackMarketDescDiv').append(new uisetup.createDiv({
					divClass: "blackMarketDescDesc",
					divId: "chap2_black_market_desc_desc"
				}));
				$('.blackMarketDescName').append("<h2> <span id=\"storeItemName\"></h2>");
				$('.blackMarketDescPrice').append("<span id=\"storeItemPrice\">");
				$('.blackMarketDescDesc').append("<span id=\"storeItemDesc\">");
				chapter[1].populateStore();
			}
		},
	},
	
	loadJobs: function()
	{
		$('.jobsListDiv').empty();
		$('.jobsListDiv').append(new chapter[1].chap2jobs[0]()).append("<br />");
		$('.jobsListDiv').append(new chapter[1].chap2jobs[1]()).append("<br />");
		for(var i = 2; i < chapter[1].chap2jobs.length; i++)
		{
			if(parseInt($('#val_cumin').text()) >= chapter[1].chap2data.cuminNeededForJobs[i-2])
			{
				$('.jobsListDiv').append(new chapter[1].chap2jobs[i]()).append("<br />");
			}
		}
	},

	populateInventory: function(params)
	{
		if(playerItems.length > 0)
		{
			for(var i = 0; i < playerItems.length; i++)
			{
				$('.inventoryListDiv').append(new button.create({
					text: playerItems[i].name ? playerItems[i].name : "Unknown",
					id: "btn_inventory_item" + i.toString(),
					func: chapter[1].showInventoryItemDesc(playerItems[i]),
				})).append("<br />");
			}
		}
		else
		{
			if(chapter[1].chap2data.roomsUnlocked[2] == true)
			{
				$('.inventoryListDiv').append(new button.create({
						text: "You have no items. Go to the store?",
						id: "btn_inventory_noitem",
						func: function()
						{
							rooms.switchRoom(chapter[1].chap2rooms, "Store");
						},
					})).append("<br />");
			}
			else
			{
				$('.inventoryListDiv').append(new button.create({
						text: "You have no items.",
						id: "btn_inventory_noitem"
					})).append("<br />");
			}
		}
	},

	populateStore: function(params)
	{
		for(var i = 0; i < items.length; i++)
		{
			for(var j = 0; j < items[i].length; j++)
			{
				if(!items[i][j].available)
				{
					if(parseInt($('#val_cumin').text()) > items[i][j].req)
					{
						items[i][j].available = true;
					}
				}

				if(items[i][j].available)
				{
					$('.blackMarketItemsDiv').append(new button.create({
							text: items[i][j].name ? items[i][j].name : "Unknown",
							id: "btn_store_item" + i.toString() + "_" + j.toString(),
							func: chapter[1].showStoreItemDesc(items[i][j]),
						})).append("<br />");
				}
			}
		}
	},

	showInventoryItemDesc: function(item){
		func = function() {
			$('#inventoryItemName').text(item.name ? item.name : "Unknown");
			$('#inventoryItemDesc').text("Description: " + item.desc ? item.desc : "N/A");
			
			if($('.inventoryDescDiv').is(':visible')) {
				$('.inventoryDescDiv').hide("slide", {direction: "left"});
				if($(this).hasClass('active'))
				{
					$(this).removeClass('active');
				} else {
					$('.inventoryListDiv button').removeClass('active');
					$(this).addClass('active');
					$('.inventoryDescDiv').show("slide", {direction: "left"});
				}
			}
			else {
				$(this).addClass('active');
				$('.inventoryDescDiv').show("slide", {direction: "left"});
			}
		
		}
		
		return func;
	},
	
	showStoreItemDesc: function(item){
		func = function() {
			var salt_price = 0;

			/*Code to properly format price*/
			salt_price = item.price ? item.price : 0;

			$('#storeItemName').text(item.name ? item.name : "Unknown");
			$('#storeItemPrice').text("Price: " + salt_price.toString() + "g salt");
			$('#storeItemDesc').text("Description: " + item.desc ? item.desc : "N/A");
			
			if($('.blackMarketDescDiv').is(':visible')) {
				$('.blackMarketDescDiv').hide("slide", {direction: "right"});
				$('#storeItemName button').remove();
				if($(this).hasClass('active')) 
				{
					$(this).removeClass('active');
				} else {
					$('.blackMarketItemsDiv button').removeClass('active');
					$(this).addClass('active');
					$('.blackMarketDescDiv').show("slide", {direction: "right"});
					$('#storeItemName').append(new button.create({
							text: item.name ? "Buy " + item.name : "Error",
							id: "btn_store_buy",
							func: function()
							{
								var isLower = false;
								var sameItemIndex = -1;
								for(var i = 0; i < playerItems.length; i++)
								{
									/*check if an item in the player's inventory is the same type as the current item*/
									if(playerItems[i].type == item.type)
									{
										sameItemIndex = i;
										/*If item being bought is lower or equal to current player item*/
										if(playerItems[i].req >= item.req)
										{
											isLower = true;
											eventLog.logStatus("You already have a better item!");
											break;
										}
									}
								}
								if(!isLower)
								{
									if(parseInt($('#val_salt').text()) > item.price)
									{
										eventLog.logStatus("You now have the " + item.name + "!");
										if (sameItemIndex != -1) playerItems.splice(sameItemIndex, 1);
										playerItems.push(item);
										var cur_salt = parseInt($('#val_salt').text()); 
										cur_salt = cur_salt - item.price;
										$('#val_salt').text(cur_salt);
									}
									else
									{
										eventLog.logStatus("You do not have enough salt.");
									}
								}
							}
						}));
				}
			}
			else {
				$(this).addClass('active');
				$('.blackMarketDescDiv').show("slide", {direction: "right"});
				$('#storeItemName').append(new button.create({
						text: item.name ? "Buy " + item.name : "Error",
						id: "btn_store_buy",
						func: function()
						{
							var isLower = false;
							var sameItemIndex = -1;
							for(var i = 0; i < playerItems.length; i++)
							{
								/*check if an item in the player's inventory is the same type as the current item*/
								if(playerItems[i].type == item.type)
								{
									sameItemIndex = i;
									/*If item being bought is lower or equal to current player item*/
									if(playerItems[i].req >= item.req)
									{
										isLower = true;
										eventLog.logStatus("You already have a better item!");
										break;
									}
								}
							}
							if(!isLower)
							{
								if(parseInt($('#val_salt').text()) > item.price)
								{
									eventLog.logStatus("You now have the " + item.name + "!");
									if (sameItemIndex != -1) playerItems.splice(sameItemIndex, 1);
									playerItems.push(item);
									var cur_salt = parseInt($('#val_salt').text()); 
									cur_salt = cur_salt - item.price;
									$('#val_salt').text(cur_salt);
								}
								else
								{
									eventLog.logStatus("You do not have enough salt.");
								}
							}
						}
					}));
			}
		
		}
		
		return func;
	},

	chap2events: {
		autoIncrement: function(params)
		{
			if(global.isLoad)
			{
				$('#resourceList li').eq(0).css({'opacity':1})
				global.saltIncrement = setInterval(function() 
				{
					var cur_salt = parseInt($('#val_salt').text()); 
					cur_salt = cur_salt + 1;
					$('#val_salt').text(cur_salt);
				}, 5000);
				$('#resourceList li').eq(1).show();
				global.pepperIncrement = setInterval(function() 
				{
					var cur_pepper = parseInt($('#val_pepper').text());
					if(cur_pepper < constants.pepperMax && !global.battleInterval)
					{
						cur_pepper = cur_pepper + 1;
						$('#val_pepper').text(cur_pepper);
					}
				}, 2000);
				global.bossCheckInterval = setInterval(function()
				{
					chapter[1].becomeBoss(params);
				}, 1000);
				$('#resourceList li').eq(2).show();
			}
			else
			{
				button_array = [];
				button_array.push(
					new button.create({
						text: "Okay",
						func: function()
						{
							eventLog.logStatus("You start getting salt regularly. You now also have reputation in the form of cumin.");
							$('#resourceList li').eq(2).show();
							events.remove("evt_autoIncrement");
							global.saltIncrement = setInterval(function() 
							{
								var cur_salt = parseInt($('#val_salt').text()); 
								cur_salt = cur_salt + 1;
								$('#val_salt').text(cur_salt);
							}, 5000);
							global.bossCheckInterval = setInterval(function()
							{
								chapter[1].becomeBoss(params);
							}, 1000);
						}
					})
				);
				$('body')
					.append(new events.create({
						text: "Welcome to the gang! Well, you're here whether you like it or not anyway. Talk to the boss for advice and more information. Right now, you start earning salt over time. Enjoy the dough! You also now start earning reputation in the form of cumin. This will get you access to more jobs and gang-related perks.",
						id: "evt_autoIncrement",
						buttons: button_array
					}));
			}
		},
		battle1: function(params)
		{
			$('#resourceList li').eq(1).show();
			global.pepperIncrement = setInterval(function() 
			{
				var cur_pepper = parseInt($('#val_pepper').text());
				if(cur_pepper < constants.pepperMax && !global.battleInterval)
				{
					cur_pepper = cur_pepper + 1;
					$('#val_pepper').text(cur_pepper);
				}
			}, 2000);
			$('body')
				.append(new events.createBattle({
					text: events.battle1Text[Math.floor(Math.random() * events.battle1Text.length)],
					id: "evt_battle1",
					enemy_name: events.battle1Enemy[Math.floor(Math.random() * events.battle1Enemy.length)],
					enemy_health: 50,
					enemy_damage: 10,
					enemy_speed: 2000,
					success: function()
					{
						eventLog.logStatus("You have won!");
						var cur_salt = parseInt($('#val_salt').text()); 
						cur_salt = cur_salt + Math.floor(Math.random() * 50 + 50);
						$('#val_salt').text(cur_salt);
						var cur_cumin = parseInt($('#val_cumin').text()); 
						cur_cumin = cur_cumin + Math.floor(Math.random() * 75 + 80);
						$('#val_cumin').text(cur_cumin);
						chapter[1].loadJobs();

					},
					failure: function()
					{
						eventLog.logStatus("You have lost.");
						$('#val_pepper').text(0);
					}
				}));
		},
		battle2: function(params)
		{
			$('#resourceList li').eq(1).show();
			global.pepperIncrement = setInterval(function() 
			{
				var cur_pepper = parseInt($('#val_pepper').text());
				if(cur_pepper < constants.pepperMax && !global.battleInterval)
				{
					cur_pepper = cur_pepper + 1;
					$('#val_pepper').text(cur_pepper);
				}
			}, 2000);
			$('body')
				.append(new events.createBattle({
					text: "You dare challenge me, Carlos Juan?!",
					id: "evt_battle2",
					enemy_name: "Carlos Juan Panichiña",
					enemy_health: 200000,
					enemy_damage: 30,
					enemy_speed: 2000,
					success: function()
					{
						eventLog.logStatus("You have conquered the Alpha Slayer Gang!");
						var cur_salt = parseInt($('#val_salt').text()); 
						cur_salt = cur_salt + Math.floor(Math.random() * 1000 + 4000);
						$('#val_salt').text(cur_salt);
						var cur_cumin = parseInt($('#val_cumin').text()); 
						cur_cumin = cur_cumin + Math.floor(Math.random() * 2000 + 3000);
						$('#val_cumin').text(cur_cumin);
						chapter[1].loadJobs();
						chapter[1].chap2data.defeatedBosses[0] = true;
					},
					failure: function()
					{
						eventLog.logStatus("You have lost.");
						$('#val_pepper').text(0);
					}
				}));
		},
		battle3: function(params)
		{
			$('#resourceList li').eq(1).show();
			global.pepperIncrement = setInterval(function() 
			{
				var cur_pepper = parseInt($('#val_pepper').text());
				if(cur_pepper < constants.pepperMax && !global.battleInterval)
				{
					cur_pepper = cur_pepper + 1;
					$('#val_pepper').text(cur_pepper);
				}
			}, 2000);
			$('body')
				.append(new events.createBattle({
					text: "*Speaks Japanese*",
					id: "evt_battle3",
					enemy_name: "Hurishima Fujayaki",
					enemy_health: 500000,
					enemy_damage: 45,
					enemy_speed: 2500,
					success: function()
					{
						eventLog.logStatus("You have conquered the West Dragon Gang, subtitles please!");
						var cur_salt = parseInt($('#val_salt').text()); 
						cur_salt = cur_salt + Math.floor(Math.random() * 2000 + 6000);
						$('#val_salt').text(cur_salt);
						var cur_cumin = parseInt($('#val_cumin').text()); 
						cur_cumin = cur_cumin + Math.floor(Math.random() * 3000 + 5000);
						$('#val_cumin').text(cur_cumin);
						chapter[1].loadJobs();
						chapter[1].chap2data.defeatedBosses[1] = true;
					},
					failure: function()
					{
						eventLog.logStatus("You have lost.");
						$('#val_pepper').text(0);
					}
				}));
		},
		battle4: function(params)
		{
			$('#resourceList li').eq(1).show();
			global.pepperIncrement = setInterval(function() 
			{
				var cur_pepper = parseInt($('#val_pepper').text());
				if(cur_pepper < constants.pepperMax && !global.battleInterval)
				{
					cur_pepper = cur_pepper + 1;
					$('#val_pepper').text(cur_pepper);
				}
			}, 2000);
			$('body')
				.append(new events.createBattle({
					text: "Trampoline. Candy King. Give me your everything!",
					id: "evt_battle3",
					enemy_name: "Candy-covered self-obsessed kid",
					enemy_health: 1000000,
					enemy_damage: 49,
					enemy_speed: 1500,
					success: function()
					{
						eventLog.logStatus("You have defeated... don't eat all the candy!");
						var cur_salt = parseInt($('#val_salt').text()); 
						cur_salt = cur_salt + Math.floor(Math.random() * 5000 + 10000);
						$('#val_salt').text(cur_salt);
						var cur_cumin = parseInt($('#val_cumin').text()); 
						cur_cumin = cur_cumin + Math.floor(Math.random() * 7000 + 8000);
						$('#val_cumin').text(cur_cumin);
						chapter[1].loadJobs();
						chapter[1].chap2data.defeatedBosses[2] = true;
					},
					failure: function()
					{
						eventLog.logStatus("You have lost.");
						$('#val_pepper').text(0);
					}
				}));
		},
	},

	chap2data: {
		roomsUnlocked: [false, false, false], //Jobs, Inventory, Store
		cuminNeededForJobs: [500], //cumin needed for unlockable jobs
		isBoss: false,
		defeatedBosses: [false, false, false]
	},

	chap2jobs: [
		function(params) { return new button.create({
			text: "Job: Steal From Pedestrian",
			id: "btn_jobs_stealFromPedestrian",
			func: function()
			{
				if(Math.floor(Math.random() * 101) < 80)
				{
					eventLog.logStatus(events.stealFromPedestrian_success[Math.floor(Math.random() * events.stealFromPedestrian_success.length)]);
					var cur_salt = parseInt($('#val_salt').text()); 
					cur_salt = cur_salt + Math.floor(Math.random() * 10 + 10);
					$('#val_salt').text(cur_salt);
					var cur_cumin = parseInt($('#val_cumin').text()); 
					cur_cumin = cur_cumin + Math.floor(Math.random() * 15 + 10);
					$('#val_cumin').text(cur_cumin);
					chapter[1].loadJobs();
				}
				else
				{
					eventLog.logStatus(events.stealFromPedestrian_fail[Math.floor(Math.random() * events.stealFromPedestrian_fail.length)]);
				}
			}
		}); },
		function() { return new button.create({
			text: "Job: Recruit Local Potentials",
			id: "btn_jobs_recruitLocalPotentials",
			func: function()
			{
				if(Math.floor(Math.random() * 101) < 60)
				{
					eventLog.logStatus(events.recruitLocalPotentials_success[Math.floor(Math.random() * events.recruitLocalPotentials_success.length)]);
					var cur_cumin = parseInt($('#val_cumin').text()); 
					cur_cumin = cur_cumin + Math.floor(Math.random() * 30 + 20);
					$('#val_cumin').text(cur_cumin);
					chapter[1].loadJobs();
				}
				else
				{
					eventLog.logStatus(events.recruitLocalPotentials_fail[Math.floor(Math.random() * events.recruitLocalPotentials_fail.length)]);
				}
			}
		}); },
		function() { return new button.create({
			text: "Job: Battle Local Gangs",
			id: "btn_jobs_battleLocalGangs",
			func: function()
			{
				chapter[1].chap2events.battle1();
			}
		}); }
	],

	becomeBoss: function(params)
	{
		if(parseInt($('#val_cumin').text()) >= constants.bossCumin && !chapter[1].chap2data.isBoss)
		{
			clearInterval(global.bossCheckInterval);
			chapter[1].chap2data.isBoss = true;
			for(var i = 0; i < chapter[1].chap2data.roomsUnlocked.length; i++)
			{
				chapter[1].chap2data.roomsUnlocked[i] = true;
			}
			chapter[1].refreshRooms(params);

			if(!global.isLoad)
			{
				button_array = [];
				button_array.push(
					new button.create({
						text: "Nice!",
						func: function()
						{
							eventLog.logStatus("You are now the boss!");
							events.remove("evt_becomeBoss");
						}
					})
				);
				$('body')
					.append(new events.create({
						text: "You've now earned a lot of cumin! You are officially the boss of this gang! You now have access to the street map to try to take control of other gang sectors. Good luck, boss.",
						id: "evt_becomeBoss",
						buttons: button_array
					}));
			}
			$("#btn_room_bossOffice").text("Your Office");
			button.setClick("btn_room_bossOffice", function()
			{
				rooms.switchRoom(chapter[1].chap2rooms, "Your Office");
			});
		}
	}
};
