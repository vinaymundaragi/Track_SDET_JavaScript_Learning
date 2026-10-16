function getProperty(obj, key){
    return obj[key];
}

const employee = {
    name: "Ravi",
    department: "QA",
    salary: 50000
};
const result = getProperty(employee, "name");
console.log(result);