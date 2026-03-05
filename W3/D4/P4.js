// filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >=70);

console.log(marks);
console.log(passed);

let Students = [
    {name:"Appu", score:58},
    {name:"Hruthik", score:78},
    {name:"Harsha", score:89}
];
let passedstudent = Students.filter(Student => Student.score >=70).map(Student => Student.name);
console.log("passed students are: ",passedstudent);
