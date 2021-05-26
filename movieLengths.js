// flightLength Movie Algo

/*

Input:
movies - array of movie times in minutes
flightLength - duration of the flight in minutes
Output:
boolean, true if there exists TWO different movies that add up EXACTLY to the flightLength, and false otherwise
Examples:
flightLength 160
movies [80, 110, 40] => false
[80, 110, 80] => true
[20, 30, 110, 40, 50] => true

*/

const flightLength = 160;
const movies = [15, 25, 510, 100, 110];

// twoMovies = (flightLength, movies) => {
//     const movieObj = {};
//     let len = movies.length;

//     for (let i = 0; i < len; i++) {
//         movieObj[movies[i]] = i;
//     }

//     for (let i = 0; i < len; i++) {
//         let diff = flightLength - movies[i];

//         // looking for the diff
//         if (movieObj[diff] && i !== movieObj[diff]) {
//             return true;
//         }
//     }
//     return false;
// };

// twoMovies(flightLength, movies)

/*

Faster, more ideal

*/

// twoMovies = (flightLength, movies) => {
//     const movieObj = {};
//     let len = movies.length;

//     for (let i = 0; i < len; i++) {
//         let diff = flightLength - movies[i];

//         if (movieObj[diff]) {
//             return true;
//         }
//         movieObj[movies[i]] = true // "any truthy value";
//     }
//     return false;
// };

// twoMovies(flightLength, movies);

// //Using a Set
twoMovies = (flightLength, movies) => {
    const hashmovies = new Set();
    let len = movies.length;

    for (let i = 0; i < len; i++) {
        let match = flightLength - movies[i];

        if (hashmovies.has(match)) {
            return true;
        }
        hashmovies.add[movies[i]]
		return true; // "any truthy value";
    }
    return false;
};

twoMovies(flightLength, movies);
