let names = ["Nivetha", "Nikhitha", "Latta", "Basha", "Ram", "Akash"];

const array = names.map((a, b) => {
    if (b % 2 == 0) {
        return `Er.${a}`;
    } else {
        return `Dr.${a}`;
    }
});

console.log(`-Prefixing Dr. odd elements to and Er. to elements-`);
console.log(names);
console.log(array);
console.log(`Appending San to names starting with DR`)
const array2 = array.map((val) => {
    if (val.startsWith('Dr')) {
        return `${val} San`;
    }
    else {
        return val;
    }
}
);
console.log(array2);
