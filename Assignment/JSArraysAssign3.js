const rules =[
    {role:"admin", action:"READ", allowed:true},
    {role:"student", action:"WRITE", allowed:false},
    {role:"guest", action:"READ", allowed:false},
    {role:"admin", action:"WRITE", allowed:true},
    {role:"student", action:"READ", allowed:true}
];

const allowedrules = rules.filter(rule => rule.allowed);

const allowedPairs = allowedrules.map(rule => `${rule.role}:${rule.action}`);

const summary = rules.reduce((acc, rule) => {
  if (!acc[rule.role]) acc[rule.role] = 0;
  if (rule.allowed) acc[rule.role]++;
  return acc;
}, {});

console.log("Allowed Rules are:",allowedrules);
console.log("Allowed pairs are",allowedPairs);
console.log("Summary",summary);