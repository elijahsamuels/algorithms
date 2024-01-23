// Adjacency List
// this is NOT an Adjacency Matrix

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );

      // for (let i = 0; i < this.adjacencyList[vertex1].length; i++){
      // 	this.adjacencyList[vertex1][i] = null
      // }
      // for (let i = 0; i < this.adjacencyList[vertex2].length; i++){
      // 	this.adjacencyList[vertex2][i] = null
      // }
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
			let temp = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, temp);
    }
		delete this.adjacencyList[vertex];
		return this;
  }

 }

let myGraph = new Graph();

myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addVertex('D')
myGraph.addEdge('A','B')
myGraph.addEdge('A','C')
myGraph.addEdge('A','D')
myGraph.addEdge('B','C')
myGraph.addEdge('C','D')



myGraph.removeVertex('D')
