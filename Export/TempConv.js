export function Celsius(c) {
    //celsius to fahrenheit
  return ((c * 9/5) +32);
}
export function Fahrenheit(f) {
    //Fahrenheit to kelvin
  return (((f - 32) * 5) / 9 + 273.15);
}
export function Kelvin(k) {
    //kelvin to fahrenheit
  return ((k-273.15) * 9/5 + 32) ;
}
    //fahrenheit to celsius 
export const FtoC = (x)=>x-273.15;
