function OperatorsCheck(val) {
  if (val == 236) {
    console.log("Match Found For Value!");
  } else if (val === "080697") {
    console.log("Match Found For Value And Type!");
  } else {
    console.log("Invalid Input!");
  }
}
OperatorsCheck(236);
OperatorsCheck("080697");
OperatorsCheck(123);
