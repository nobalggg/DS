class Graph{
    constructor(){
        this.adjacencyList = {};
        this.priortyQueue = [];
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2,weight){ 
        this.adjacencyList[vertex1].push({vertex : vertex2, weight});
        this.adjacencyList[vertex2].push({vertex : vertex1, weight});
    }

    addToPriorityQueue(vertex,collabPath,collabWeight){
        this.priortyQueue.push({vertex,collabPath,collabWeight})
        this.priortyQueue.sort((item1,item2) => item1.collabWeight - item2.collabWeight);
    //   /  console.log(this.priortyQueue)
    }

    dijkstra(vertex1,vertex2){
        let visited = [];
        this.addToPriorityQueue(vertex1,vertex1,0);
        while(this.priortyQueue.length > 0){
            let item = this.priortyQueue.shift();
            if(visited.filter(e => e == item.vertex).length != 0){
                continue;
            }
            if(item.vertex == vertex2){
                console.log(item.collabPath,item.collabWeight);
                return;
            }
            visited.push(item.vertex);
            for(let neighbour of this.adjacencyList[item.vertex]){
                if(visited.filter(item => item == neighbour.vertex).length == 0){
                    this.addToPriorityQueue(neighbour.vertex,item.collabPath+neighbour.vertex,item.collabWeight+neighbour.weight);
                }
            }
        }
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");``
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B",4);
graph.addEdge("B","E",3);
graph.addEdge("E","F",1);
graph.addEdge("D","E",3);
graph.addEdge("C","D",2);
graph.addEdge("A","C",2);
graph.addEdge("C","F",4);
graph.addEdge("D","F",1);

console.log(graph.dijkstra("A","F"));
//console.log(graph.priortyQueue);


