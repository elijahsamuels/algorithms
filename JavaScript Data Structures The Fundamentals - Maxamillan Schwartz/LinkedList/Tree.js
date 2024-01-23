class Node {
  constructor(value, parentNode = null) {
    this.value = value;
    this.children = [];
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }

    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    );

    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }
  }

  removeNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (child) => child.value === segments[0]
      );
      if (existingNodeIndex < 0) {
        throw new Error("Matching value not found");
      }
      this.children.splice(existingNodeIndex, 1);
    }

    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      );

      if (!existingChildNode) {
        throw new Error(`Matching path not found: ${segments[0]}`);
      }

      existingChildNode.removeNode(segments.slice(1).join("/"));
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }
}

const fileSystem = new Tree("/");
// const documentsNodeData = fileSystem.root.addNode("documents");
// const gamesNodeData = fileSystem.root.addNode("games");
// documentsNodeData.node.addNode("results.txt");
// gamesNodeData.node.addNode("cod.exe");

fileSystem.add("documents/personal/tax.doc");
fileSystem.add("games/cod.exe");
fileSystem.add("games/cod2.exe");
fileSystem.remove("games/cod2.exe");

console.log("fileSystem:", fileSystem);
