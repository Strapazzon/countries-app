/* eslint-disable */
const matriz =[
	/*       0, 1, 2, 3 
	/* 0 */ [1, 1, 1, 1],
	/* 1 */ [0, 1, 1, 0],
	/* 2 */ [0, 1, 0, 1],
	/* 3 */ [0, 1, 9, 1],
	/* 4 */ [1, 1, 1, 1]
];


	
function main() {
	console.log(`Started Maze Robot 🤖🤖🤖🤖🤖`);
	let route = [];
	let pos;
	for (let y=0; y < matriz.length; y++) {
		for (let x=0; x < matriz[y].length; x++) {
		
			if (matriz[y][x] !== 0) {
				pos = { y, x };
				if (matriz[y][x] === 1) {
					route.push(pos);
					continue;
				} else if (matriz[y][x] === 9) {
					route.push(pos);
					return route;
				}
			}
		}
	}
	return route;
}


console.log(main());
 