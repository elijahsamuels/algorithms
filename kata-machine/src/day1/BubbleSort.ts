// export default function two_crystal_balls(breaks: boolean[]): number {

export default function bubble_sort(arr: number[]): void {
    // Xi <= Xi + 1
    // O(n^2)

    // [3, 7, 4, 9, 69, 420, 42];

    // let j = arr.length - 1;

    // for (let i = 0; i < j; ++i) {
    //     if (arr[i] > arr[i + 1]) {
    //         let temp = arr[i];
    //         arr[i] = arr[i + 1];
    //         arr[i + 1] = temp;
    //     }
    //     j--;
    // }
    // console.log(arr);

		// loop in a loop and swap
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
