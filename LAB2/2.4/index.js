function countV(str){
    var i = str.match(/[aeiou]/gi).length;
    return i;

}

const str = prompt("Enter string");
 result = countV(str);

alert(result);