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
		{name: "Average Pistol", desc: "An OK pistol.", type: itemType.gun, value: 10, price: 400, available: false, req: 500}
	],
	//meds 
	[
		{name: "Tiny Bandage", desc: "A small bandage. It doesn't do much.", type: itemType.meds, value: 5, price: 200, available: true, req: 0},
		{name: "Medium Bandage", desc: "A decent bandage.", type: itemType.meds, value: 10, price: 400, available: false, req: 500}
	]
];

var playerItems = [];
