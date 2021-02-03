function logHello(event) {
    console.log("Hello")
}

let formButton1 = $('#button1');
formButton1.on("click", logHello);

function addFields(event){
    let fieldOne = $('#field1').val();
    let fieldTwo = $('#field2').val();
    let fieldThree = parseInt(fieldOne) + parseInt(fieldTwo);
    $('#field3').val(fieldThree);
}

let formButton2 = $('#button2');
formButton2.on("click", addFields);

let formButton3 = $("#button3");
formButton3.click(function (){
    $('#paragraphToHide').toggle(500);
});

function validatePhoneNumber(event){
    let phoneField = $('#phoneField').val();
    let regularExpression = /^[1-9]\d{2}-\d{3}-\d{4}$/;

    if(regularExpression.test(phoneField)){
        console.log('OK');
    } else{
        console.log('Bad');
    }
}

let formButton4 = $('#button4');
formButton4.on("click", validatePhoneNumber);

function jsonRequest(event){
    let formJsonObject = {};
    formJsonObject.firstName = $('#firstName').val();
    formJsonObject.lastName = $('#lastName').val();
    formJsonObject.email = $('#email').val();
    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
}

let formButton5 = $('#button5');
formButton5.on("click", jsonRequest);

