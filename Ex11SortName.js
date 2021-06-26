const student = [
  {
    studentid: 4,
    studentname: "anushya",
    address: "Mogappair",
    pincode: 600023,
    city: "Chennai",
    marks: 78,
  },
  {
    studentid: 3,
    studentname: "zoya",
    address: "Anna nagar",
    pincode: 600023,
    city: "Chennai",
    marks: 39,
  },
  {
    studentid: 8,
    studentname: "akash",
    address: "Begum Pet Road",
    pincode: 600037,
    city: "Salem",
    marks: 99,
  },
  {
    studentid: 1,
    studentname: "chichi",
    address: "Hyatt Road",
    pincode: 631053,
    city: "Bangalore",
    marks: 56,
  },
  {
    studentid: 5,
    studentname: "gomathi",
    address: "Ghandhi nagar",
    pincode: 698123,
    city: "Avadi",
    marks: 77,
  },
];
console.log(student);
//SORTING NAME
student.sort((a, b) => (a.studentname > b.studentname ? 1 : -1));
console.log("-------------------");
console.log("1. Sorting Name:");
console.log("-------------------");
// console.log(student);

student.forEach((e) => {
  console.log(`STUDENT NAME: ${e.studentname} `);
});

//SORTING NAME AND CITY
student
  .sort((a, b) => (a.name > b.name ? 1 : -1))
  .sort((a, b) => (a.city > b.city ? 1 : -1));
console.log("---------------------");
console.log("2. NAME AND CITY SORTING");
console.log("----------------------");
student.forEach((e) => {
  console.log(`STUDENT NAME: ${e.studentname}\nCITY: ${e.city}`);
});

//REMOVE ELEMENT WITH CITY CHENNAI AND BANGALORE
console.log("------------------------------------------------");
console.log("3. REMOVE ELEMENT WITH CITY CHENNAI AND BANGALORE");
console.log("-------------------------------------------------");
var sortedval = student.filter((sortcity) => {
  return (sortcity.city != "Chennai") & (sortcity.city != "Bangalore");
});
console.log(sortedval);

//ADDING 20 MARKS ADDITIONALLY
console.log("-----------------------------");
console.log("4. ADDING 20 MARKS ADDITIONALLY");
console.log("------------------------------");
console.log(`Original marks in array`);
student.forEach((e) => {
  console.log(`${e.marks} `);
});
console.log(`Ater Adding 20 marks`);
let addtwenty = student.map((addtwenty) => {
  let mark = addtwenty.marks + 20;
  console.log(`Marks: ${mark}`);
});

//ADDING 15 MARKS FOR STUDENTS FROM PINCODE 600023
console.log("------------------------------------------------");
console.log("5. ADDING 15 MARKS FOR STUDENTS FROM PINCODE 600023");
console.log("------------------------------------------------");
console.log(`Original marks in array`);
student.forEach((e) => {
  console.log(`${e.marks} \n${e.pincode}`);
});
console.log("AFTER ADDING 15 MARKS");
let markcode = student.map((fifteenmark) => {
  let mark;
  if (fifteenmark.pincode == 600023) {
    mark1 = fifteenmark.marks + 15;
  } 
  else{
   // let mark2=student.marks;
      //return mark2;
      return student.marks;
  }
    console.log(`Mark: ${mark1}\nPincode: ${fifteenmark.pincode}`);
});

//FIND VALUE AND REMOVE

var search = "akash"
console.log(`6. Find value and remove: ${search}`);

const filtered = student.filter((ele,id)=>{
    if(ele.studentname!= search){
        return ele;
    }
    else{
        student.splice(id)
        console.log(`${search} found in Index: ${id}`);
        
    }
   
});
console.log(student);
