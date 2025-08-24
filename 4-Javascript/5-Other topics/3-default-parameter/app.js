function func(a, b = 2) {
  return a + b;
}
func(2); //4
func(3, 4); //7
function sum(a=2,b){
    return a+b;
}
sum(1); //a=1,b=undefined //NaN
