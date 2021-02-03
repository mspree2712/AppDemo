/*
Test jquery script
 */

let paragraphs = $("p");

console.log("There are " + paragraphs.length + " paragraphs");

for(let i = 0; i < paragraphs.length; i++){
    let paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}

function myUpdateFunction(event) {
    console.log("add row")
    let fieldValue = $("#myTextField").val();
    $("#tableName tbody").append("<tr><td>" + fieldValue + "</td></tr>");
    console.log("added field value")
}

let formButton1 = $("#button1");
formButton1.on("click", myUpdateFunction)

function hideFunction(event){
    $("#hideme").hide(500);
}

let formButton2 = $("#button2");
formButton2.on("click", hideFunction);

function validateFunction(event){
    let formField = $("#validateMe").val();
    let regularExpression = /^[A-Za-z]{1,10}$/;

    if(regularExpression.test(formField)){
        console.log("Good");
    } else{
        console.log("Bad");
    }
}

let formButton3 = $("#button3");
formButton3.on("click", validateFunction);

function jsonFunction(event){
    let formJsonObject = {};
    let formVal = $("#myName").val();
    formJsonObject.myName = formVal;
    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
    $("#jsonResult").text(jsonString)
}

let formButton4 = $("#button4");
formButton4.on("click", jsonFunction);

