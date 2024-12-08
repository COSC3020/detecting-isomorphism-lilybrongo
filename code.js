/* 
Referencing: Detecting cycles, augmenting paths, Isomorphism-node, Isomorphism-connectivity, Isomorphism-node-connectivity, and graph representation
*/

function are_isomorphic(graph1, graph2) {
    //Step 1: Check if the number of nodes and edges are the same
    //we saw in the isomorphism connectivity and nodes exercises how to prove and which
    //cases permit isomorphism
    if (graph1.length !== graph2.length) {
        console.log('Graphs do not have the same number of vertices');
        return false;
    }

    if (checknumberofEdges(graph1) !== checknumberofEdges(graph2)) {
        console.log('Graphs do not have the same number of edges');
        return false;
    }
//using reduce to add up all the numbers within the row
//in oder to calculate the nuber of edges in a graph respresented by the adjacency matrix    
    function checknumberofEdges(graph) {
        let numberofEdges = 0;
        for (let i = 0; i < graph.length; i++) {
            numberofEdges += graph[i].reduce((sum, value) => sum + value, 0);
        }
        return numberofEdges / 2; // Each edge is counted twice
    }

    // Step 2: Generate all permutations of vertex indices
    function generatePermutations(array) {
        //if the array is empty, return a list that contains an empty array so that
        //this can become the start when there aren't any items left to arrage
        if (array.length === 0) {
            return [[]];
        }
        //this will hold all the possible permutations
        const holding = [];

        //this will loop through each item in the array in order to try it as the first element
        for (let i = 0; i < array.length; i++) {
            //chooses the current as the starting point
            const current = array[i];
            //this removes the current item and creates a smaller list for the rest of the permutations
            const remaining = array.slice(0, i).concat(array.slice(i + 1));
            const permutations = generatePermutations(remaining);
            console.log('generated permutations', permutations);
            //add the current item to the front of each smaller perm., creating a new permutation
            //with the current item into the first position
            for (const permutation of permutations) {
                //console.log('checking mapping', permutation)
                holding.push([current].concat(permutation));
            }
        }
        //return thr completed list of permutations
        return holding;
    }

    // Step 3: Check if there exists a valid vertex mapping
    function checkIsomorphicMapping(graph1, graph2) {
        //get the number of vertices in the graph, then create an array of the vertices
        //then we need to generate all possible mappings to see if they are an isomorphic mapping or not
        //if mapping perserved edge structure, yay isomorphic, if not, then not isomorphic
        const n = graph1.length;
        const numbers = [];
        for (let i = 0; i < n; i++) {
            numbers.push(i);
        }
        const permutations = generatePermutations(numbers); // Generate all possible vertex mappings

        for (const perm of permutations) {
            if (checkMapping(graph1, graph2, perm)) {
                return true; // Found a valid mapping
            }
        }
        console.log("No valid mapping found.");
        return false; // No valid mapping found
    }

    // Step 4: Check if a given vertex mapping preserves the edges
    function checkMapping(graph1, graph2, mapping) {
        const n = graph1.length;
        //checking if the edge between i and j in graph 1 match to the corresponding vertices in graph2
        //this shows the necessary bijection talked about within isomorphism_nodes_connectivity exercise
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const graph1Value = graph1[i][j];
                const graph2Value = graph2[mapping[i]][mapping[j]];
                if (graph1Value !== graph2Value) {
                    console.log(`Mismatch: graph1[${i}][${j}] = ${graph1Value} !== graph2[${mapping[i]}][${mapping[j]}] = ${graph2Value}`);
                    return false; // Edge mapping doesn't hold
                } 
            }
        }
        return true; // Edge mapping holds for all vertex pairs
    }

    // Final check: Isomorphic mapping exists or not
    return checkIsomorphicMapping(graph1, graph2);
}



