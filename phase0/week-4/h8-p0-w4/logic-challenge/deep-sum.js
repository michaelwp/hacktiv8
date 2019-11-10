function deepSum(arr) {
    // Code disini

    // define variable needed;
    let result = 0;

    // check if arr is empty, then return "No number" if true
    if (arr.length <= 0) return "No number";

    // looping arr
    arr.map(arr_item => {
        // looping arr_item
        arr_item.map(arr_value => {
            // looping arr_value
            arr_value.map(value => {
                // increment result by value
                result += value;
            });
        });
    });

    // displaying result
    return result;
}

//TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
])); // 156

console.log(deepSum([])); // No number