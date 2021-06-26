function keyvar() {
  var a = 5;
  console.log(`Var-KEYWORD`);
  console.log(`class scope ${a}`);

  {
    console.log(`block scope ${a}`);
  }
}
function letkey() {
  let b = 10;
  console.log(`Let-KEYWORD`);
  console.log(`class scope ${b}`);
  
  {
    console.log(`block scope ${b}`);
  }
  for (let i = 0; i < 3; i++) {
    console.log("inside loop" + i);

}
//console.log("outside loop"+i);  This throws reference error where i is not defined

}
keyvar();
letkey();
