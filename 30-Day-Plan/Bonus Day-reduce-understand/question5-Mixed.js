function analyzeEmployess(employees){
    const employeesGrouped = employees.reduce((acc, employee) => {
        if(!acc.byDepartment[employee.department]){
            acc.byDepartment[employee.department] = [];
        }
        acc.byDepartment[employee.department].push(employee);

        if(!acc.countByDepartment[employee.department]){
            acc.countByDepartment[employee.department] = 0;
        }
        acc.countByDepartment[employee.department]++;

        acc.totalSalary += employee.salary;


        return acc;
    }, {byDepartment: {},
        countByDepartment: {},
        totalSalary: 0});
        return employeesGrouped;
}

const employees = [
    { name: "Anu", department: "QA", salary: 60000 },
    { name: "Ravi", department: "Dev", salary: 80000 },
    { name: "Meena", department: "QA", salary: 70000 },
    { name: "Kiran", department: "Dev", salary: 90000 },
    { name: "Sara", department: "DevOps", salary: 75000 }
];

const result = analyzeEmployess(employees);
console.log(result);