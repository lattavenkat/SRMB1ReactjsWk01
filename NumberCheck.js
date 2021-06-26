function numbercheck(str) {
  if (!isNaN(str)) return true;
  else return false;
}

let str1 = "Latha";
let str2 = "4111";
let str3 = "Happy2021";
console.log(`checking whether the string input ${str1} has number: `);
console.log(numbercheck(str1));
console.log(`checking whether the string input${str2} has number: `);
console.log(numbercheck(str2));
console.log(`checking whether the string input ${str3} has number: `);
console.log(numbercheck(str3));
