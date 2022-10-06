function fnc1() {

 var form = document.getElementById("form1"), inputs = form.getElementsByTagName("input"), input = null, flag  = true;


 for(var i=0, len= inputs.length;i<len;i++){
  input = inputs[i];
  if(!input.value){
    flag = false;
    input.focus();
    alert("Please Fill All Input Fields");
    return(flag);
  }
 }

  var redirect = confirm("DO YOU WISH TO CONTINUE? ");

  if(redirect){
    window.location.href = "thankyo.html";
  }

}

// document.getElementById("submitbtn").addEventListener("click", fnc1());




document.getElementById("submitbtn").onclick = function(){
    fnc1();
};
