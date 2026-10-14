//Question 28: Group objects by a property using reduce()
//Given an array of employees, group them by their department property.

function groupByDepartment(employees) {
    const groupdep = employees.reduce(((acc, employee) => {
        if(!acc[employee.department]){
            acc[employee.department] = [];
        }

        acc[employee.department].push(employee);

        return acc;

    }), {});
    return groupdep;
}


const employees = [
    { name: "Anu", department: "QA" },
    { name: "Ravi", department: "Dev" },
    { name: "Maya", department: "QA" }
];

const result = groupByDepartment(employees);
console.log(result);