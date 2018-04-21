/***********************************************************************************/
/*Advent of Code 2015                                                              */
/*Day one	 		                                                               */
/*http://adventofcode.com/2015/day/1											   */
/***********************************************************************************/
// (()) and ()() both result in floor 0.
// ((( and (()(()( both result in floor 3.
// ))((((( also results in floor 3.
// ()) and ))( both result in floor -1 (the first basement level).
// ))) and )())()) both result in floor -3.
// ( => Floor+1
// ) => Floor-1
/***********************************************************************************/

const fs= require('fs');

let floor = 0;


fs.readFile('./input.txt', (err, data) => {
	let dataString= data.toString();

/***********************SOLUTION => MAP ******************************************/
	//Solving with BUFFER CHARCODE
	console.time('funchallenge:MAP');
	data.map(char => {
		(char === 40) ? floor++ : floor--;
	})
	console.timeEnd('funchallenge:MAP');
	console.log("Santa go to Floor: ", floor);
/***********************************************************************************/
/***********************SOLUTION => REDUCE******************************************/
	console.time('funchallenge:reduce');
	let redString= dataString.split('').reduce( (acc,char) => {
		(char === '(') ? acc++ : acc--;
		return acc;
	},0)
	console.timeEnd('funchallenge:reduce');
	console.log("Santa go to Floor: ",redString);
/***********************************************************************************/
/***********************SOLUTION => FILTER******************************************/
	console.time('funchallenge:filter');
	let parContainer= {leftPar: 0, rightPar: 0}
	let filLeft= dataString.split('').filter( char => (char === '('));
	let filRight= dataString.split('').filter( char => (char === ')'));
	console.timeEnd('funchallenge:filter');
	console.log("Santa go to Floor: ",(filLeft.length-filRight.length));
/***********************************************************************************/
/***********************SOLUTION => FOREACH*****************************************/	
	floor=0;
	console.time('funchallenge:forEach');
	dataString.split('').forEach(char => {
		(char === '(') ? floor++ : floor--;
	})
	console.timeEnd('funchallenge:forEach');
	console.log("Santa go to Floor: ",floor);
/***********************************************************************************/
/***********************SOLUTION => FOR LOOP****************************************/
	floor=0;
	console.time('funchallenge:FOR LOOP');
	for(let i=0; i < dataString.length; i++)
	{
		(dataString[i] === '(') ? floor++ : floor--;
	}
	console.timeEnd('funchallenge:FOR LOOP');
	console.log("Santa go to Floor: ",floor);
/***********************************************************************************/
/***********************SOLUTION => REGEXP******************************************/
	console.time('funchallenge:RegExp');
	let countLeft = (dataString.match(/[(]/g) || []).length;
	let countRight = (dataString.match(/[)]/g) || []).length;
	floor= (countLeft-countRight);
	console.timeEnd('funchallenge:RegExp');
	console.log("Santa go to Floor: ",floor);
/***********************************************************************************/
/***********************SOLUTION => SIMPLE SPLITTING********************************/
/***********************FASTEST SOLUTION => BEST TIME 0.249ms***********************/
	console.time('funchallenge:WITH SPLIT');
	let rawDataLeft= dataString.split('(');
	let rawDataRight= dataString.split(')');
	floor= rawDataLeft.length - rawDataRight.length;
	console.timeEnd('funchallenge:WITH SPLIT');
	console.log("Santa go to Floor: ",floor);
/***********************************************************************************/
/* SOLUTION ADVENT OF CODE: "Santa go to Floor: 280"   							   */
/***********************************************************************************/	

})

