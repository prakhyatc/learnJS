//Destructuring in JS

var course = {
    name: "JS in German",
    courseTeacher: "Ganesh",
    courseDuration: "3 months"
};

const { courseTeacher: prof } = course;
console.log(prof);