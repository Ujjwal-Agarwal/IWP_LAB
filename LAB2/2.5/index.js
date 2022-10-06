function testStr(str){

    switch(true){
        case /^3[47][0-9]{13}$/.test(str):
            alert("American Express");
            break;
        case /^4[0-9]{12}(?:[0-9]{3})?$/.test(str):
            alert("VISA");
            break;
        case /^5[15][0-9]{14}$/.test(str):
            alert("MasterCard");
            break;
        case /^(?:5[0-9]{2}|6011)[0-9]{12}$/.test(str):
            alert("Discover");
            break;
        case /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(str):
            alert("Diners Club");
            break;
        case /^(?:35[0-9]{3}|2131|1800)[0-9]{11}$/.test(str):
            alert("JCB");
            break;
    }
}

let str = prompt("Enter Credit Card Number");

testStr(str);