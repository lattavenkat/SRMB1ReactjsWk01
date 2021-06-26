console.log("Higher order component");

fact=(v)=>v+"value";

const valhoc=(data,fn)=>{
    let v=data +790;
    return func(v);
}
let hoc=valhoc(10,fact);
console.log(hoc);
