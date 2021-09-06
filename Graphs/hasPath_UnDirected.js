/*
Code for Directed and Undirected 'hasPath' is same
we just have to store directional edge and
not bidirectional edges in the data structures.
hasPath will remain same all the time
*/ 


class Graph{
    constructor(){
        this.adjancecyList = {};
    }

    addVertex(vertex){
        this.adjancecyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        this.adjancecyList[vertex1].push(vertex2);
        this.adjancecyList[vertex2].push(vertex1);
    }

    hasPath(vertex1,vertex2,visited){
        if(vertex1 == vertex2){
            return true;
        }
        let neighbours = this.adjancecyList[vertex1];
        for(let item of neighbours){
            if(visited.includes(item)){
                continue;
            }
            visited.push(item);
            let isPathPresent = this.hasPath(item,vertex2,visited);
            if(isPathPresent){
                return true;
            }
        }
        return false;
    }

    calculateIfHasPath(vertex1,vertex2){
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
graph.addEdge("B","D");
graph.addEdge("C","D");
graph.addEdge("A","C");
graph.addEdge("B","E");
graph.addEdge("E","F");
graph.addEdge("E","G");
graph.addEdge("F","G");
graph.addEdge("O","M");
graph.addEdge("M","N");
graph.addEdge("O","N");

console.log(graph.calculateIfHasPath("O","A"));