import GraphNode from "./GraphNode";

export default class Graph{
    private nodes: GraphNode[] = [];

    add(node: GraphNode) {
        this.nodes.push(node);
    }

    get size() {
        return this.nodes.length;
    }

    addAll(nodes: GraphNode[]) {
        for (let node of nodes) {
            this.nodes.push(node);
        }
    }

    connect(firstNode: GraphNode, secondNode: GraphNode) {
        firstNode.neighbors.add(secondNode);
        secondNode.neighbors.add(firstNode);
    }

    isAdjacent(firstNode: GraphNode, secondNode: GraphNode) {
        return firstNode.neighbors.has(secondNode);
    }

    getNeighbors(node: GraphNode) {
        return node.neighbors;
    }

    disconnect(firstNode: GraphNode, secondNode: GraphNode) {
        firstNode.neighbors.delete(secondNode);
        secondNode.neighbors.delete(firstNode);
    }

}
