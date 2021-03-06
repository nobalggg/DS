/**
 * 
 * Below code can detect cycles in a graph
 * 
 * logic is , use a queue and do a BFS
 * 
 * If you encounter an already visited node
 * 
 * then there is a cycle
 * 
 * The catch is, if there exists mutiple connected component, then below will
 * 
 * fail
 * 
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

    isGraphCyclic(start){
        let bfsQueue = [];
        let visited = [];
        bfsQueue.push(start);
        return this.checkForCycle(visited,bfsQueue);
    }

    checkForCycle(visited,bfsQueue){
        while(bfsQueue.length != 0){
            let item = bfsQueue.shift();
            if(visited.includes(item)){
                return true;
            }
            visited.push(item);
            for(let neighbour of this.adjancecyList[item]){
                bfsQueue.push(neighbour);
            }
            this.checkForCycle(visited,bfsQueue);
        }
        return false;
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

console.log(graph.isGraphCyclic("A"))
