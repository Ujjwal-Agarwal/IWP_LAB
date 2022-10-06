function fnc1() {
  console.log("Clicked");
  var name = document.getElementById("nametext").value;
  var email = document.getElementById("Email").value;
  var gender;
  if (
    document.getElementById("male").checked == true &&
    document.getElementById("female").checked == true
  ) {
    alert("Can not check both");
  }

  if ( document.getElementById("male").checked == true) {
    gender =  document.getElementById("male").value;
  } else {
    gender =  document.getElementById("female").value;
  }

  var dropbox = document.getElementById("dropbox").value;
  console.log(dropbox);

  var redirect = confirm("DO YOU WISH TO CONTINUE? ");

  if(redirect){
    window.location.href = "thankyo.html";
  }

}

// document.getElementById("submitbtn").addEventListener("click", fnc1());


document.getElementById("submitbtn").onclick = function(){
    fnc1();
};
