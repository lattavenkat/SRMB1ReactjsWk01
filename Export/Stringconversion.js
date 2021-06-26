export function TypeConv(data) {
    let converted;
    if(typeof(data) == "string"){
        converted = parseInt(data);
        
        console.log(`The string ${data} is converted to  ${converted} type of ${typeof(converted)} )`);
    }
    else if(typeof(data) == "number"){
        converted = data.toString();
        console.log(`The number ${data} is converted to  ${converted} type 0f ${typeof(converted)} )`);
    }
    else{
        console.log(`Invalid Input!`);
    }
}