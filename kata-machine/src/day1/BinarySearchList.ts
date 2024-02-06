export default function bs_list(haystack: number[], needle: number): boolean {
    // is it ordered?
    // const haystack = [1,2,3,4,5,6,7,8,9,10]
    // const needle = 8

    let high = haystack.length; // 9
    let low = 0;
		
    while (low < high) {
        const middle = Math.floor(low + (high - low) / 2);
        const value = haystack[middle];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = middle;
        } else low = middle + 1;
    }

    return false;
}
