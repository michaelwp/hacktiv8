'use strict';


function ownSort(arr) {
    // Your sorting code
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i;
        while ((key <= arr[j - 1]) && (j > 0)) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = key;
    }
    return arr
}
/*
pseudo-code

START
DEFINE array AS ARRAY LIST
DEFINE VARIABLE low, high
DEFINE search AS TARGET

SET 0 TO low
SET LENGTH OF array TO high

WHILE low LESS OR EQUALS TO high
    DEFINE VARIABLE MID
    ASSIGN (low PLUS high) DIVIDED BY 2 TO MID

    IF array INDEX mid EQUALS TO target
        THEN RETURN mid
    ELSE IF array INDEX mid LESS THAN target
        THEN SET mid PLUS 1 TO low
    ELSE
        SET mid MINUS 1 TO high
    END IF
LOOP

RETURN -1
END
*/


function binarySearch(search, array) {
    // Your searching code
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === search) {
            return mid;
        } else if (array[mid] < search) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

// test case
let test_array = [1, 2, 3, 4, 5];
console.log(binarySearch(3, test_array) === 2); // true

test_array = [13, 19, 24, 29, 32, 37, 43];
console.log(binarySearch(35, test_array) === -1); // true

test_array = [100, 120, 130, 135, 150, 170];
console.log(binarySearch(135, test_array) === 2); // false
