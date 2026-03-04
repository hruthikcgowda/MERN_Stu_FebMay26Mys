//Nested Object and Method
const student = {
    firstname:"Santhosh",
    lastname:"sharma",
    scores:{
        math: 80,
        science: 83
    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstname +" "+this.lastname;
    },
    greet(){
        console.log("Hi,",this.fullname());
    },
};
console.log(student.fullname());