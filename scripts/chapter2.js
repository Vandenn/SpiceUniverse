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
				
				$('.inventoryListDiv').append(new button.create({
						text: "Item 1",
						id: "btn_store_item1",
						func: chapter[1].showInventoryItemDesc("Item 1", "Item 1 Desc"),
					})).append("<br />");
				$('.inventoryListDiv').append(new button.create({
						text: "Item 2",
						id: "btn_store_item2",
						func: chapter[1].showInventoryItemDesc("Item 2", "Item 2 Desc"),
					})).append("<br />");
				
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
					divClass: "blackMarketImgDiv",
					divId: "chap2_black_market_img_div"
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
				$('.blackMarketImgDiv').append("<img class=\"blackMarketImg\">");
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
				
				$('.blackMarketItemsDiv').append(new button.create({
						text: "Item 1",
						id: "btn_store_item1",
						func: chapter[1].showStoreItemDesc("Item 1", "10 salt", "Item 1 Desc"),
					})).append("<br />");
				$('.blackMarketItemsDiv').append(new button.create({
						text: "Item 2",
						id: "btn_store_item2",
						func: chapter[1].showStoreItemDesc("Item 2", "15 salt", "Item 2 Desc"),
					})).append("<br />");
			}
		}
	},
	
	showInventoryItemDesc: function(name, desc){
		func = function() {
			$('#inventoryItemName').text(name);
			$('#inventoryItemDesc').text("Description: " + desc);
			
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
	
	showStoreItemDesc: function(name, price, desc){
		func = function() {
			$('#storeItemName').text(name);
			$('#storeItemPrice').text("Price: " + price);
			$('#storeItemDesc').text("Description: " + desc);
			
			if($('.blackMarketDescDiv').is(':visible')) {
				$(this).removeClass('active');
				$('.blackMarketDescDiv').hide("slide", {direction: "right"});
				$('#storeItemName button').remove();
			}
			else {
				$(this).addClass('active');
				$('.blackMarketDescDiv').show("slide", {direction: "right"});
				$('#storeItemName').append(new button.create({
						text: "Buy " + name,
						id: "btn_store_buy",
					}));
			}
		
		}
		
		return func;
	},

	chap2events: {
		
	},

	chap2data: {
		roomsUnlocked: [false, false, false] //Jobs, Inventory, Store
	}
};