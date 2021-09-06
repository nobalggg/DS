/***
 * Components are nothing but the group of connected
 * vertices that exists indepdently in a GRAPH
 * 
 * If all the vertices are reachable through a given vertex than component
 * count will be one
 * 
 * for solution of this particular problem,
 * consider each vertex as source
 * start traversing
 * mark nodes as visited
 * add visited nodes in component array
 * pick next unvisted node
 * start traversing again
 * keep repeating until all the vertices are marked as visited
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

    getConnectedComponents(){
        let vertices = Object.keys(this.adjancecyList);
        let visited = {};
        let components = [];
        for(let item of vertices){
            if(!(item in visited) || !visited[item]){
                visited[item] = true;
                let component = [];
                let comp = this.traverse(item,visited,component);
                components.push(comp);
            }
        }
        return components;
    }
    
    traverse(item,visited,component){
        component.push(item);
        for(let neighbour of this.adjancecyList[item]){
            if(!(neighbour in visited) || !visited[neighbour]){
                visited[neighbour] = true;
                let newArr = this.traverse(neighbour,visited,component);
                component.concat(newArr);
            }
        }
        return component;
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

console.log(graph.getConnectedComponents())
