function highestScore(students) {
    // Code disini

    // set result obj
    const result = {};

    // iterating the students
    students.forEach(studentGroup => {
        // set the class
        if (result[studentGroup.class] === undefined){
            result[studentGroup.class] = {};
        }
        // set the detail of the student with the higher score
        if (result[studentGroup.class].score === undefined){
            result[studentGroup.class].name = studentGroup.name;
            result[studentGroup.class].score = studentGroup.score;
        } else if (studentGroup.score > result[studentGroup.class].score) {
            result[studentGroup.class].name = studentGroup.name;
            result[studentGroup.class].score = studentGroup.score;
        }
    });
    // displaying result
    return result;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}