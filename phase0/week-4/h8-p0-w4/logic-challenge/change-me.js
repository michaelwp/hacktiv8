function changeMe(arr) {
    // you can only write your code here!

    for (var i = 0; i < arr.length; i++) {
        var biodata = {};
        var d = new Date();
        var age = d.getFullYear() - arr[i][3];

        if (isNaN(age)){
            age = 'Invalid Birth Year';
        }

        biodata.firstName = arr[i][0];
        biodata.lastName = arr[i][1];
        biodata.gender = arr[i][2];
        biodata.age = age;

        console.log((i + 1) + ". " + arr[i][0] + " " + arr[i][1] + ":");
        console.log(biodata);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""