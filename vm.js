let fs = require('fs');
let readlineSync = require('readline-sync')
let mem = new Array();
let fso = fs.readFileSync('NOD.jss').toString();
mem = fso.split(/\s+/);
let ip = 0;
	while (mem[ip] !== 'exit') {
		switch (mem[ip]) {
			case 'input':
				mem[mem[ip + 1]] = parseInt(readlineSync.prompt());
				ip += 2;
				break;

			case 'output':
				console.log(mem[mem[ip + 1]]);
				ip += 2;
				break;

			case 'set':
				mem[mem[ip + 1]] = parseFloat(mem[ip + 2]);
				ip += 3;
				break;

			case 'add':
				mem[mem[ip + 3]] = mem[mem[ip + 1]] + mem[mem[ip + 2]];
				ip += 4;
				break;

			case 'sub':
				mem[mem[ip + 3]] = mem[mem[ip + 1]] - mem[mem[ip + 2]];
				ip += 4;
				break;

			case 'mul':
				mem[mem[ip + 3]] = mem[mem[ip + 1]] * mem[mem[ip + 2]];
				ip += 4;
				break;

			case 'jumpIfZero' :
				if (mem[0] === 0) {
					ip = IndexLink(mem[ip + 1]) + 1
				} else {
					ip += 2
				}
				break;

			case 'less':
				if (mem[0] === -1)
					ip = IndexLink(mem[ip + 1]) + 1;
				else
					ip += 2;
				break;

			case 'jump':
				ip = IndexLink(mem[ip + 1]) + 1;
				break;

			case 'comp':
				let val = mem[mem[ip + 1]] - mem[mem[ip + 2]]
				if (val > 0)
					mem[0] = 1;
				else if (val < 0)
					mem[0] = -1;
				else
					mem[0] = 0;
				ip += 3
				break;

			case 'link':
				ip += 2;
				break;

		}
	}
function IndexLink(nameLink) {
	let fromIndex = 0;
	let index = 0;
	while (true) {
		index = mem.indexOf(nameLink, fromIndex);
		if (mem[index - 1] === 'link')
			break;
		fromIndex = index + 1;
	}
	return index;
}