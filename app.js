var bill = document.querySelector("#bill-amount");
var cashPaid = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var errorMsg = document.querySelector("#error-message");
var noOfNotes = document.querySelector(".no-of-notes");
var availableNotes = [2000,500,100,20,10,5,1];
checkButton.addEventListener("click",function validateBillAndCashPaid(){
    errorMsg.style.display = "none";
    if(bill.value > 0)
    {
        if(cashPaid.value >= bill.value)
        {
        var amountToBeReturned = cashPaid.value-bill.value;
        calculateChange(amountToBeReturned);
        }
        else{
         showMsg("The cash provided should atleast be equal to the bill amount");
        }
    }  
    else{
        showMsg("Invalid Bill Amount");
    }
});
function showMsg(message){
    
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}
 function calculateChange(amountToBeReturned)
 {
    for(let i=0;i < availableNotes.length; i++)
    {
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }
 }