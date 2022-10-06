var range = prompt("Enter range");

var r1;
if(range[1]=="-"){
    r1 = range[0];
    range = range.slice(2);
}else{
    r1 = range[0]+range[1];
    range = range.slice(3);    
}
var r2 = range;

if(parseInt(r1)>parseInt(r2)){
    alert("Invalid Input");
}


let inHTML = "<table><tr><td>Number</td><td>Square</td><td>Cube</td></tr>";

for(var i=r1;i<=parseInt(r2);i++){
    inHTML += "<tr><td>"+ i +"</td><td>"+ i*i +"</td><td>"+ i*i*i +"</td></tr>";
}

inHTML += "</table";



document.getElementById("bodydiv").innerHTML = inHTML;