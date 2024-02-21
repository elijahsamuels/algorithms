function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][]): boolean {

// off the map
	if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ){
		return false;
	}

	// space is a wall
	if (maze[curr.y][curr.x] === wall ) {
		return false
	}
	
	// is the end
	if (curr.y === end.y && curr.x === end.x ) {
		return true
	}
		
	// if we've visited this space already

	// const visited = []

	// visited.push([curr.x, curr.y])
	// if (visited.includes([curr.x, curr.y])) {
	// 	return false
	// }

	if (seen[curr.y][curr.x]) {
		return false;
	}

}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {


return false

}