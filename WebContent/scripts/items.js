var itemType = {
	gun: 0,
	meds: 1,
    knife: 2,
    bomb: 3
};

var items = [
	//guns
	[
		{name: "Noob Pistol", desc: "A pistol for noobs.", type: itemType.gun, value: 5, price: 200, available: true, req: 0},
		{name: "Average Pistol", desc: "An OK pistol.", type: itemType.gun, value: 10, price: 400, available: false, req: 500},
		{name: "Good Pistol", desc: "A better pistol.", type: itemType.gun, value: 50, price: 800, available: false, req: 1000},
		{name: "Sub-machine Gun", desc: "The traditional SMG.", type: itemType.gun, value: 100, price: 1600, available: false, req: 2500},
		{name: "Shotgun", desc: "Boom blast.", type: itemType.gun, value: 500, price: 3200, available: false, req: 5000},
		{name: "Light Rifle", desc: "Lower-class rifle.", type: itemType.gun, value: 1000, price: 6400, available: false, req: 7500},
		{name: "Heavy Rifle", desc: "Higher-class rifle.", type: itemType.gun, value: 5000, price: 12800, available: false, req: 10000},
		{name: "Machine Gun", desc: "The \"rat-rat\".", type: itemType.gun, value: 10000, price: 25600, available: false, req: 15000},
		{name: "Sniper", desc: "The ultimate assasination gun.", type: itemType.gun, value: 25000, price: 51200, available: false, req: 20000}
	],
	//meds 
	[
		{name: "Tiny Bandage", desc: "A small bandage. It doesn't do much.", type: itemType.meds, value: 5, price: 200, available: true, req: 0},
		{name: "Medium Bandage", desc: "A decent bandage.", type: itemType.meds, value: 10, price: 400, available: false, req: 500},
		{name: "Big Bandage", desc: "A great bandage.", type: itemType.meds, value: 50, price: 800, available: false, req: 1000},
		{name: "Small Medkit", desc: "An efficient medkit", type: itemType.meds, value: 100, price: 1600, available: false, req: 2500}
	],
    //knife
	[
		{name: "Very Dull Knife", desc: "Very unsharp knife.", type: itemType.knife, value: 5, price: 200, available: true, req: 0},
		{name: "Dull Knife", desc: "Slightly unsharp knife.", type: itemType.knife, value: 10, price: 400, available: false, req: 500},
		{name: "Semi-sharp Knife", desc: "A better knife.", type: itemType.knife, value: 50, price: 800, available: false, req: 1000},
		{name: "Kitchen Knife", desc: "My mom used this knife.", type: itemType.knife, value: 100, price: 1600, available: false, req: 2500},
		{name: "Sharp Knife", desc: "Easy to slice and dice.", type: itemType.knife, value: 500, price: 3200, available: false, req: 5000},
		{name: "Dagger", desc: "Stabby stabby.", type: itemType.knife, value: 1000, price: 6400, available: false, req: 7500},
		{name: "Scimitar", desc: "A curved sword.", type: itemType.knife, value: 5000, price: 12800, available: false, req: 10000},
		{name: "Long Sword", desc: "A big sharp sword.", type: itemType.knife, value: 10000, price: 25600, available: false, req: 15000},
		{name: "Two-handed Sword", desc: "The ultimate warrior's weapon.", type: itemType.knife, value: 25000, price: 51200, available: false, req: 20000}
	],
    //bomb
	[
		{name: "Nut Bomb", desc: "Very small insignificant explosion.", type: itemType.bomb, value: 5, price: 200, available: true, req: 0},
		{name: "Pong Bomb", desc: "Small explosion.", type: itemType.bomb, value: 10, price: 400, available: false, req: 500},
		{name: "Regular Bomb", desc: "A decent explosion.", type: itemType.bomb, value: 50, price: 800, available: false, req: 1000},
		{name: "Slightly-big bomb", desc: "Much bigger explosion.", type: itemType.bomb, value: 100, price: 1600, available: false, req: 2500},
		{name: "Big Bomb", desc: "Definitely a big explosion.", type: itemType.bomb, value: 500, price: 3200, available: false, req: 5000},
		{name: "BIIIG BOMB", desc: "A biiiiig explosion.", type: itemType.bomb, value: 1000, price: 6400, available: false, req: 7500},
		{name: "Bomb Truckload", desc: "A big truck of bombs.", type: itemType.bomb, value: 5000, price: 12800, available: false, req: 10000},
		{name: "C4", desc: "\"C4Yourself\".", type: itemType.bomb, value: 10000, price: 25600, available: false, req: 15000},
		{name: "Nuclear Bomb", desc: "Nuked.", type: itemType.bomb, value: 25000, price: 51200, available: false, req: 20000}
	]
];

var playerItems = [];

function getItemIndex(item)
{
	for(var i = 0; i < items[item.type].length; i++)
	{
		if(items[item.type][i].name == item.name)
		{
			return i;
		}
	}
	return -1;
}
