/*
The trick with this question is that we have to
clear the visited flag after visiting neighbours
, so that all the paths can be traversed.
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

    print(vertex1,vertex2){
        let visited = {};
        this.printAllPaths(vertex1,vertex2,visited,vertex1);
    }
    printAllPaths(vertex1,vertex2,visited,psf){
        if(vertex1 == vertex2){
            console.log(psf)
            return;
        }
        visited[vertex1] = true;
        for(let neighbour of this.adjancecyList[vertex1]){
            if(!(neighbour in visited) || !visited[neighbour])
                this.printAllPaths(neighbour,vertex2,visited,psf+neighbour);
        }
        visited[vertex1] = false;
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

graph.addEdge("A","C");
graph.addEdge("A","B");
graph.addEdge("B","D");
graph.addEdge("C","D");

graph.addEdge("B","E");
graph.addEdge("E","F");
graph.addEdge("E","G");
graph.addEdge("F","G");
graph.addEdge("O","M");
graph.addEdge("M","N");
graph.addEdge("O","N");

graph.print("A","G");