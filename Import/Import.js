import  {TypeConv}  from "../export/Stringconversion.js";
import { TypeConv as conversion } from "../export/Stringconversion.js";
import numbercheck from "../export/CheckNumberType.js";

console.log(TypeConv("080697"));
console.log(TypeConv(""));
console.log(conversion(34234));
let str1 = "Latha";
let str2 = "4111";
let str3 = "Happy2021";
console.log(`checking whether the string input ${str1} has number: `);
console.log(numbercheck(str1));
console.log(`checking whether the string input${str2} has number: `);
console.log(numbercheck(str2));
console.log(`checking whether the string input ${str3} has number: `);
console.log(numbercheck(str3));
