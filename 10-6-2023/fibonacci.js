var num = 0
var num1 = 1;

while(num <= 100){
    console.log(num);
    var temp = num;
    num = num1;
    num1 = temp + num1;
}