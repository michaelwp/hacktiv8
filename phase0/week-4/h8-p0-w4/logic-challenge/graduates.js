function graduates(students) {
    // Code disini

    // set result object
    const result = {};
    // iterating students
    students.forEach(studentsDetail => {
        //set arrStudent array
        const arrStudent = [];
        // check if student detail class already have the class, if false then set new class
        if (result[studentsDetail.class] === undefined) {
            result[studentsDetail.class] = arrStudent;
        }
        // iterating students
        students.forEach(studentsClass => {
            // if studentClass.class equal to studentDetail.class and student score bigger than 75
            if (studentsClass.class === studentsDetail.class &&
                studentsClass.score > 75) {
                // push studentsClass to arrStudent
                arrStudent.push(
                    nama = studentsClass.name,
                    score = studentsClass.score
                );
            }
        });
        // insert arr stuident to result object
        result[studentsDetail.class] = arrStudent;
    });
    // displaying result
    return result;
}

console.log(graduates([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}