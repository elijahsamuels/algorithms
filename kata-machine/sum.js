let num = 5

const sum = (num) => {
	return num === 1 ? 1 : num + sum(num - 1) 
}

// const sum = (num) => {
// 	if (num === 1) {
// 		return 1
// 	} else {
// 		return num + sum(num -1)
// 	}
// }

// sum(7863) // this is the max call stack size in Chrome. is this a V8 thing?

/* 
Return Address: where the return is going

Return Value: what the return is

Arguments:

 */