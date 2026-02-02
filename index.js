/*
 console.log(username); 
username = prompt("what is your username:");
username = Elert("what is your username:");
document.getElementById("mySubmit").onclick = function(){ }
document.getElementById("myH1").textContent = `Welcome ${username}`;
let price = document.getElementById("price").value;

subResult.textContent = `You are Subcribed`;
mySubmit.onclick = function(){
price = Number(price);

if (condition) {
    // This code runs if the condition is TRUE
} else {
    // This code runs if the condition is FALSE
}
*/
const myChoise =  document.getElementById("myChoise");
const myBtn = document.getElementById("myBtn");
const myResult = document.getElementById("myResult");
let balance = 10000;
let new_balance;



myBtn.onclick = function(){
    let choise = Number(myChoise.value);
switch (choise){
    case 1:
      myResult.textContent = `Your balance is ${balance}`;
    break;
    case 2:
        let deposit = window.prompt("how much you want to deposit: ");
        let depositAmount = Number(deposit);
        balance += depositAmount;
        myResult.textContent = `Deposit Successful! New balance is: ${balance}`;
    break;
    case 3:
        let withdraw = window.prompt("Enter your withdraw amount: ");
        let withdrawAamount = Number(withdraw);

        if (withdrawAamount > balance){
            myResult.textContent = `Withdraw Failed! you cannot withdraw this ${withdrawAamount}. 
                you only have ${balance} in your acount`;
        }
        else {
        balance -= withdrawAamount;
        myResult.textContent = `withdraw Successfull! Your balance is: ${balance}`;
        console.log(balance)
        }
    break;
    default:
        myResult.textContent = "Invalid choice. Please select 1, 2, or 3";

            }
}
