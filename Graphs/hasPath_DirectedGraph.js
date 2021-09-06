/*
Code for Directed and Undirected 'hasPath' is same
we just have to store directional edge and
not bidirectional edges in the data structures.
hasPath will remain same all the time.


And the solution for this is normal DFS of a graph
*/ 


class Graph{
    constructor(){
        this.adjancecyList = {};
    }

    addVertex(vertex){
        this.adjancecyList[vertex] = [];
    }

    addEdge(fromVertex,toVertex){
        this.adjancecyList[fromVertex].push(toVertex);
    }

    hasPath(fromVertex,toVertex,visited){
        if(fromVertex == toVertex){
            return true;
        }
        for(let item of this.adjancecyList[fromVertex]){
            if(visited.includes(item)){
                continue;
            }
            visited.push(item);
            let isPresent = this.hasPath(item,toVertex,visited);
            if(isPresent){
                return true;
            }
        }
        return false;
    }

    calculateIfPathExists(vertex1,vertex2){
        let visited = [];
        return this.hasPath(vertex1,vertex2,visited);
    }
}

let graph =  new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("O");
graph.addVertex("M");
graph.addVertex("N");


graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("D","C");
graph.addEdge("D","B");
graph.addEdge("B","E");
graph.addEdge("E","F");
graph.addEdge("F","G");
graph.addEdge("G","E");
graph.addEdge("M","O");
graph.addEdge("N","O");
graph.addEdge("M","N");

console.log(graph.calculateIfPathExists("O","N"));