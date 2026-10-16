function groupEmployeesByDepartment(employees){
    const groupedemployees = employees.reduce((acc, employee) => {
        if(!acc[employee.department]){
            acc[employee.department] = [];
        }
            acc[employee.department].push(employee);

        return acc;
    }, {});
    return groupedemployees
}

const employees = [
    { name: "Asha", department: "QA" },
    { name: "Rahul", department: "Engineering" },
    { name: "Priya", department: "QA" },
    { name: "Kiran", department: "Support" },
    { name: "Vijay", department: "Engineering" }
];
const result = groupEmployeesByDepartment(employees);
console.log(result);