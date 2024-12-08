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
//modofied in order to have a stop if a test is failed
for(let index = 0; index < testCases.length; index++){
    const { graph1, graph2, expected } = testCases[index];
    const result = are_isomorphic(graph1, graph2);

    if (result !== expected) {
        console.log(`Test Case ${index + 1}: Failed`);
        console.log("tests failed");
        break;
    } else {
        console.log(`test case ${index + 1}: passed`);
    }
}

