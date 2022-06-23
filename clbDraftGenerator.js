//Randomize within range like [0..1[ , so, the last number is never included. If you want to included it, sum 1
function rand(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}

//roll a d100 to determine nummber of rares per pack
//<=85 - 1 rare
//>85 && ==100 - 2 rares

let rareRate = rand(1, 101)
let rares = 1; //+ last;
if (rareRate <= 85){
  rares = 1;
} else if (rareRate > 85 && rareRate == 100) {
  rares = 2;
}



//these are the commom cards between the 20 ones.
let common = rand(13, 15);

//so, ucommons are the sum of commons and rares. They are described in the pack as "3 to 6 cards". 
//whith this calculus, you will never get the 6th value. This happens because of the foil slot, that could be of any rarity.
//The same is true for commons and rares. 
let uncommon = 19 - (common + rares);

//just checking
let total = common + uncommon + rares;


console.log("commons: " + common + "\nuncommons: " + uncommon + "\nrares: " + rares + "\ntotal: " + total);
