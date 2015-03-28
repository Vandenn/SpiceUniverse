chapter[1] = {
	init: function(params)
	{
		$('main').append(new uisetup.createDiv({
			divClass: "roomContentDiv",
			divId: "chap2_room_content_div"
		}));
		rooms.switchRoom(chapter[1].chap2rooms, "Boss Office");
		chapter[1].createRoomButtons();
		chapter[1].chap2events.autoIncrement();
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
		}
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

	populateInventory: function()
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

	populateStore: function()
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
				$(this).removeClass('active');
				$('.inventoryDescDiv').hide("slide", {direction: "left"});
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
				$(this).removeClass('active');
				$('.blackMarketDescDiv').hide("slide", {direction: "right"});
				$('#storeItemName button').remove();
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
							for(var i = 0; i < playerItems.length; i++)
							{
								/*check if an item in the player's inventory is the same type as the current item*/
								if(playerItems[i].type == item.type)
								{
									/*If item being bought is lower or equal to current player item*/
									if(playerItems[i].req <= item.req)
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
		autoIncrement: function()
		{
			button_array = [];
			button_array.push(
				new button.create({
					text: "Okay",
					func: function()
					{
						eventLog.logStatus("You start getting salt regularly. You now also have reputation in the form of cumin.");
						$('#resourceList li').eq(3).show();
						events.remove("evt_autoIncrement");
						global.saltIncrement = setInterval(function() 
							{
								var cur_salt = parseInt($('#val_salt').text()); 
								cur_salt = cur_salt + 1;
								$('#val_salt').text(cur_salt);
							}, 5000);
					}
				})
			);
			$('body')
				.append(new events.create({
					text: "Welcome to the gang! Well, you're here whether you like it or not anyway. Talk to the boss for advice and more information. Right now, you start earning salt over time. Enjoy the dough! You also now start earning reputation in the form of cumin. This will get you access to more jobs and gang-related perks.",
					id: "evt_autoIncrement",
					buttons: button_array
				}));
		},
		battle1: function()
		{
			$('#resourceList li').eq(1).show();
			global.pepperIncrement = setInterval(function() 
							{
								var cur_pepper = parseInt($('#val_pepper').text());
								if(cur_pepper < 100)
								{
									cur_pepper = cur_pepper + 1;
									$('#val_pepper').text(cur_pepper);
								}
							}, 2000);
		}
	},

	chap2data: {
		roomsUnlocked: [false, false, false], //Jobs, Inventory, Store
		cuminNeededForJobs: [500] //cumin needed for unlockable jobs
	},

	chap2jobs: [
		function() { return new button.create({
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
	]
};
