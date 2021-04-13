export default class GraphNode {
    private data: any;
    public neighbors: any;

    constructor(data?: any) {
        this.data = data;
        this.neighbors = new Set();
    }
}
