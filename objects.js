// var employeeName = {
//     name: "Rick",
//     idNumber: 23,
//     salary: "$90000",
//     jobTitle: "Full Stack Developer",
//     experience: 3
// };
// console.log(employeeName.name);
// console.log(employeeName.experience);
// console.log(employeeName.jobTitle);

// var newObject = {};
// newObject.name = "Shyam";
// newObject.id = 32;
// newObject.position = "Developer";
// newObject.isMarried = true;

// console.log(newObject);

var employee = {
    type: "developer",
    name: "Shyam Lal",
    email: "shyam@microsoft.com",
    nameOf: {
        firstName: "KK",
        lastName: "Gupta"
    }
};
// console.log(Object.keys(employee));
// console.log(Object.values(employee));
// console.log(Object.entries(employee));
console.log(Object.hasOwnProperty("name"));

// console.log(employee);
// console.log(employee.type);
// console.log(employee.nameOf);
// console.log(employee.nameOf.lastName);

//Assigning Objects

// var listOf = { 1: "P", 2: "C" };
// var listOf2 = { 3: "R", 4: "H" };
// var listOf3 = Object.assign(listOf, listOf2);
// console.log(listOf3);