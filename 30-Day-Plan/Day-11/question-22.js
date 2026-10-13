//Question 22: Extract names of active users

const users = [
    { name: "Asha", active: true },
    { name: "Rahul", active: false },
    { name: "Priya", active: true },
    { name: "Kiran", active: false }
];

const activeUserNames = users.filter(user => user.active).map(user => user.name);

console.log(activeUserNames);