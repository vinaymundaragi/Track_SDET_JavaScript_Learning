//Question 24: Find the first user whose role is "admin"

const users = [
    { id: 1, name: "Asha", role: "user" },
    { id: 2, name: "Rahul", role: "user" },
    { id: 3, name: "Priya", role: "admin" },
    { id: 4, name: "Kiran", role: "admin" }
];

const adminUser = users.find(user => user.role === "admin");

console.log(adminUser);