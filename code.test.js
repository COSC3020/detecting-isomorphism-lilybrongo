// // test.
const { assert } = require('console');
const fs = require('fs');

eval(fs.readFileSync('code.js')+'');

// Test cases
const testCases = [
    {
        graph1: [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0],
        ],
        graph2: [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
        ],
        expected: false, // Not isomorphic
    },
    {
        graph1: [
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0],
        ],
        graph2: [
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0],
        ],
        expected: true, // Isomorphic
    },
    {
        graph1: [
            [0, 1],
            [1, 0],
        ],
        graph2: [
            [0, 1],
            [1, 0],
        ],
        expected: true, // Isomorphic
    },
    {
        graph1: [
            [0, 1, 0],
            [1, 0, 0],
            [0, 0, 0],
        ],
        graph2: [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
        ],
        expected: false, // Not isomorphic
    },
    {
        graph1: [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0],
        ],
        graph2: [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
        ],
        expected: false,
         // Not isomorphic
    },
];

// Run test cases
//modofied in order to have a stop if a test is failed
for(let index = 0; index < testCases.length; index++){
    const { graph1, graph2, expected } = testCases[index];
    const result = are_isomorphic(graph1, graph2);
    //here is the modifed test I was missing
    console.log(`Expected: ${expected}, Actual: ${result}`);
    assert(result === expected);
}
