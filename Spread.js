console.log(" SUM OF VALUES USING  SPREAD OPERATOR");
function addelement(...values) {
    let x = 0;
    for (let i = 0; i < values.length; i++) {
        x += values[i];
    }
    return x;
}
console.log(addelement(11,42,38,994,65,556,67,432));


console.log("SPREAD OPERATOR IN OBJECT STRUCTURE");
const language = {
    sub1 : "Tamil",  
    sub2 : "English"
}

const commonSub = {
    sub1 : "Maths",  
    sub2 : "Science"
}

const staff = {
    name : "reshma"
    
}

let addmark = [
    {name:"Nirmal",mark:74},
    {name:"Prabhu",mark:93}
];

var addinfo = [
    {studentid:3,name:"Kavya",rank:"First"}
]


const studetails = {
    fee:55000,
    ...language,
    ...commonSub,
    ...staff,
    ...addmark,
    ...addinfo
}

studetails.standard = 6;

console.log(studetails);