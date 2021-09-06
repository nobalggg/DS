class Graph{
    constructor(){
        this.adjacencyList = {};
        this.visited = [];
        this.queue = [];
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){ 
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    traverseDFS(vertex){
        // if(this.visited.includes(vertex)){
        //     return;
        // }
        this.visited.push(vertex);
        console.log(vertex);
        let neighbours = this.adjacencyList[vertex];
        for(let item of neighbours){
            if(!this.visited.includes(item))
                this.traverseDFS(item);
        }
    }

    traverseBFS(vertex){
        this.queue.push(vertex);
        while(this.queue.length != 0){
            //.log('queue'+this.queue);
            let visitedElem = this.queue.shift();
            this.visited.push(visitedElem);
            console.log(visitedElem);
            let neighbours = this.adjacencyList[visitedElem];
            for(let item of neighbours){
                if(!this.visited.includes(item) && !this.queue.includes(item))
                        this.queue.push(item);
            }
        }
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('D','E');
graph.addEdge('D','F');
graph.addEdge('E','F');



//console.log(graph);
//graph.traverseDFS('A');

graph.traverseBFS('A');

module.export.Graph;