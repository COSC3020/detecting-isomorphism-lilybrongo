// test.
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
        expected: false, // Not isomorphic
    },
];

// Run test cases
testCases.forEach(({ graph1, graph2, expected }, index) => {
    const result = are_isomorphic(graph1, graph2);
    console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : "Failed");
});