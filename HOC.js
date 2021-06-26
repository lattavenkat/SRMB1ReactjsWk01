console.log("Higher order component");

fact=(v)=>v+"value";

const valhoc=(data,fn)=>{
    let v=data +300;
    return func(v);
}
let hoc=valhoc(100,fact);
console.log(hoc);
