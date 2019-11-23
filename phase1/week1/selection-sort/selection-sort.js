let selectionSort = (input) => {
    for (let i = 0; i < input.length; i++) {
        let hold = (i + 1);
        for (let j = (i + 1); j < input.length; j++) {
            if (input[j] < input[hold]) {
                hold = j;
            }
        }
        let tmp = input[i];
        if (input[i] > input[hold]){
            input[i] = input[hold]
            input[hold] = tmp
        }
    }
    return input
};

//test case1
const input1 = [33, 2, 52, 106, 73];
console.log(selectionSort(input1));

//test case2
const input2 = [13, 5, 22, 99, 11];
console.log(selectionSort(input2));