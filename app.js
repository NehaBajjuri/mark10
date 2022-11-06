var bill = document.querySelector("#bill-amount");
var billLabel = document.querySelector(".input-label");
var cashPaid = document.querySelector("#cash-given");
var cashLabel = document.querySelector(".input-label2");
var checkButton = document.querySelector("#check-button");
var errorMsg = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var next = document.querySelector("#next-button");
var returnTable = document.querySelector("#return");
var table = document.querySelector(".change-table");
var back = document.querySelector("#back-button");

hideall()
function hideall(){
    cashPaid.style.display = "none";
    checkButton.style.display = "none";
    cashLabel.style.display = "none";
    returnTable.style.display = "none";
    table.style.display = "none";
    back.style.display = "none";
}

function nextt(){
    if(bill.value === "")
{
    showMsg("Enter the amount");
}
else if(bill.value <= 0){
    showMsg("Enter a Valid amount");
}else{
    next.style.display="none";
    errorMsg.style.display = "none";
    cashLabel.style.display = "block";
    cashPaid.style.display = "block";
    checkButton.style.display = "block";
}
}

var availableNotes = [2000,500,100,20,10,5,1];
function validateBillAndCashPaid(){
  var bv = bill.value;
    var cv = cashPaid.value;
   console.log(cv);
   console.log(bv);
    if(cv > 0  || cv === "")
    {
       
        if(bv > cv)
        {
        console.log("fcgvhj");
         showMsg("The amount should be atleast equal to the bill amount");
         table.style.display = "none";
        }
        else if(cv === bv)
        {
            showMsg("No change is to be given");
            table.style.display = "none";
        }
        else if(cv > bv)
        {
            errorMsg.style.display = "none";
            returnTable.style.display = "block";
            table.style.display = "block";
            var amountToBeReturned = cv - bv;
            calculateChange(amountToBeReturned);
            console.log("dssd");

        }
    }  
    else{
        showMsg("You need to pay the bill!!");
    }
};
function showMsg(message){
    
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}

 function calculateChange(amountToBeReturned)
 {
    for(let i = 0; i < availableNotes.length; i++)
    {
        var numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned=amountToBeReturned % availableNotes[i];
      
        noOfNotes[i].innerText = numberOfNotes;

    }
 }
 checkButton.addEventListener("click",validateBillAndCashPaid);
 next.addEventListener("click",nextt);

 