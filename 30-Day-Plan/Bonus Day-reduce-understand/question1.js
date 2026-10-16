function groupStudentsByCourse(students){
    const groupedStudents = students.reduce((acc, student) => {
        if(!acc[student.course]){
            acc[student.course] = [];
        }
        acc[student.course].push(student);
        return acc;
    }, {});
    return groupedStudents;
}

const students = [
    { name: "Anu", course: "JavaScript" },
    { name: "Ravi", course: "Python" },
    { name: "Meena", course: "JavaScript" },
    { name: "Kiran", course: "Python" },
    { name: "Sara", course: "Java" }
];

const result = groupStudentsByCourse(students);
console.log(result);