class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
			// console.log(`${hash} + "${key}".charCodeAt(${i}) * 23 % ${this.dataMap.length}`);
      // console.log(`hash = (${hash + key.charCodeAt(i) * 23})`);
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    // console.log(`hash: ${hash}`);
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
			(this.dataMap[index] = []);
		};

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

	keys(){
		let allKeys = [];

		for(let i = 0; i < this.dataMap.length; i++) {
			if(this.dataMap[i]){
				for(let j = 0; j < this.dataMap[i].length; j++){
					allKeys.push(this.dataMap[i][j][0])
				}
			}
		}
		return allKeys
	}



}

let myHashTable = new HashTable();
// myHashTable;

myHashTable.set('lumber', 25)
myHashTable.set('sheet rock', 125)
myHashTable.set('nails', 20000)
myHashTable.set('nail2', 200)
myHashTable.set('axe', 200)

// myHashTable.set("bolts", 1400);
// myHashTable.set("washers", 50);
