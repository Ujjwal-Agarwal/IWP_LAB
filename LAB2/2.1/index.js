var num1 = prompt("Enter num1");
var num2 = prompt("Enter num2");
var op = prompt("Enter operation");

switch(op){
    case "+":
        alert(parseInt(num1)+parseInt(num2));
        break;
    case "-":
    alert(parseInt(num1)-parseInt(num2));
    break;
    case "*":
        alert(parseInt(num1)*parseInt(num2));
        break;
    case "/":
        alert(parseInt(num1)/parseInt(num2));
        break;
    default:
        alert("Wrong operation");
}