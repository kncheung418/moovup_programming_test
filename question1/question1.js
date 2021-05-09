

const undirectedGraphMap = {
    "A": ["B", "D", "H"],
    "B": ["A", "C", "D"],
    "C": ["B", "D", "F"],
    "D": ["A", "B", "C", "E"],
    "E": ["D", "F", "H"],
    "F": ["C", "E", "G"],
    "G": ["F", "H"],
    "H": ["A", "E", "G"]
}
class Graph {

    constructor(graph) {
        this.graph = graph
    }

    getAllPaths(startNode, destinationNode) {
        const visited = new Set()
        const path = []
        this.getAllPathsUtil(startNode, destinationNode, visited, path)
    }
    getAllPathsUtil(currentNode, destinationNode, visited, path) {
        visited.add(currentNode)
        path.push(currentNode)
        if (currentNode == destinationNode) {
            console.log(path)
        } else {
            for (const neighbor of this.graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    this.getAllPathsUtil(neighbor, destinationNode, visited, path)
                }
            }
        }
        path.pop()
        visited.delete(currentNode)
    }

    getShortestPath(startNode, destinationNode) {
        const queue = []
        const dist = {}
        queue.push(startNode)
        dist[startNode] = 0

        while (queue.length > 0) {
            const currentNode = queue.shift()
            if (currentNode == destinationNode) {
                console.log(`The shortest path is ${dist[currentNode]}`)
                return
            }
            const neighbors = this.graph[currentNode]
            for (const neighbor of neighbors) {
                if (!dist[neighbor]) {
                    queue.push(neighbor)
                    dist[neighbor] = dist[currentNode] + 1
                }
            }
        }
    }
}

const graph = new Graph(undirectedGraphMap)
//Question 1 a
console.log("Question 1 (a):")
graph.getAllPaths("A", "H")

//Question 1 b
console.log("Question 1 (b):")
graph.getShortestPath("A", "H")