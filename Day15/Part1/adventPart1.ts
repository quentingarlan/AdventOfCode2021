let VertexLength = 0;

export function Chiton(advList: string): number {
    const input: string[] = advList.split('\n')
    VertexLength = input[0].length
    let graph: number[][] = []
    input.forEach(line => {
        let lines = line.split('')
        let numbers: number[] = lines.map(n => parseInt(n))
        graph.push(numbers)
    })
    console.log('graph', graph)
    dijkstra(graph, 0)
    return 0
}

function dijkstra(graph: number[][], src: number): void {
    let dist: Array<number> = new Array(VertexLength);
    let sptSet: Array<boolean> = new Array(VertexLength);

    // Initialize all distances as
    // INFINITE and stpSet[] as false
    for (let i = 0; i < VertexLength; i++) {
        dist[i] = Number.MAX_VALUE;
        sptSet[i] = false;
    }

    // Distance of source vertex
    // from itself is always 0
    dist[src] = 0;

    // Find shortest path for all vertices
    for (let count = 0; count < VertexLength - 1; count++) {

        // Pick the minimum distance vertex
        // from the set of vertices not yet
        // processed. u is always equal to
        // src in first iteration.
        let u = minDistance(dist, sptSet);

        // Mark the picked vertex as processed
        sptSet[u] = true;

        // Update dist value of the adjacent
        // vertices of the picked vertex.
        for (let v = 0; v < VertexLength; v++) {

            // Update dist[v] only if is not in
            // sptSet, there is an edge from u
            // to v, and total weight of path
            // from src to v through u is smaller
            // than current value of dist[v]
            if (!sptSet[v] && graph[u][v] != 0 &&
                dist[u] != Number.MAX_VALUE &&
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    // Print the constructed distance array
    printSolution(dist);
}

function printSolution(dist: Array<number>) {
    console.log("Vertex \t\t Distance from Source<br>");
    for (let i = 0; i < VertexLength; i++) {
        console.log(i + " \t\t " +
            dist[i] + "<br>");
    }
}

function minDistance(dist: Array<number>, sptSet: Array<boolean>) {
    // Initialize min value
    let min = Number.MAX_VALUE;
    let min_index = -1;

    for (let v = 0; v < VertexLength; v++) {
        if (sptSet[v] == false && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}