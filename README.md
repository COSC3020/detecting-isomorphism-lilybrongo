# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?
The worst case big $\Theta$ time complexity for my algorithm would be $\Theta (n! x n^2)$. The reasoning for this is because when we look at the checkIsomorphicMApping we are checking if the graphs have the same number of vertices which takes a constant time $\Theta(1)$. Then we look at the generatePermutations which looks at the number of permutations of the array. The process itself goes through the array length, so the number of permutations would be n!. This function would take $\Theta(n!)$. Next we look at checking each permutation to see if they preserve the edge structure. As we discussed before the number of permutations is n!, and then we need to look at the checkMapping function. The checkMapping fucntion loops through all pairs of vertices (i,j) in the graphs. Since we need to check all vertices in both graphs, the loop will have a complexity of $\Theta(n^2)$. In the end this is how we come to the worst case complexity of $\Theta(n! x n^2), by combining each permutation and the overall mapping. 

I referenced my repositories for detecting cycles, augmenting paths, Isomorphism-node, Isomorphism-connectivity, Isomorphism-node-connectivity, and graph representation in order to come to the conclusion of how to approach this problem. I also referenced sin-2pi's repository to see how they apprached the code itself as well as the test code. 