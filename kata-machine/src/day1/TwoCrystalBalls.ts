
export default function two_crystal_balls(breaks: boolean[]): number {
	// // linear search O(n)
	// for (let i = 0; i < breaks.length; i++) {
		//     if (breaks[i] === true) {
			//         return i;
			//     }
			// }
			// return -1;
		
			


			
		// // const breaks = [false,false,false,false,false,true,true,true,true,true,true,true]
		// breaks.length // 12
		// jumpAmount = 3
		
		// O(√n)
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i;
    for (i = jumpAmount; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jumpAmount;

		for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
