document.getElementById('btn-submitDeposite').addEventListener('click',function(){
    const DepositFile = document.getElementById('DepositFeildm');
    const DepositFileString = DepositFile.value;
    const  DepositAmount = parseInt(DepositFileString);



    const TatalDeposit = document.getElementById('Total-Deposit');
    const TotalFileString = TatalDeposit.innerText;
    const  TotalAmount = parseFloat(TotalFileString);

const currentTotal = TotalAmount + DepositAmount;
TatalDeposit.innerText= currentTotal;
console.log(currentTotal)

 const TotalBalance = document.getElementById('BalanceC')
  const TotalBalanceString =  TotalBalance.innerText;
  const TotalValueAmount = parseFloat(TotalBalanceString);
  console.log(TotalValueAmount)

  const BankTotal = TotalValueAmount + DepositAmount;
  console.log(BankTotal)
  TotalBalance.innerText = BankTotal;

DepositFile.value = '';

})

document.getElementById('btn-submitwithdrow').addEventListener('click',function(){
    const withdrowFile = document.getElementById('withdrawF');
    const withdrowstring = withdrowFile.value;
    const withdrowAmount = parseFloat(withdrowstring);

    const TotalWithdrow = document.getElementById('witdrow-Total');
    const TotalWithdrowSrting = TotalWithdrow.innerText;
    const TotalAmount = parseFloat(TotalWithdrowSrting);
 
const crruning = TotalAmount + withdrowAmount;
  
TotalWithdrow.innerText = crruning;


const TotalBalance = document.getElementById('BalanceC');
const TotalBalanceSrting = TotalBalance.innerText;
const TotalBalanceAmount = parseFloat(TotalBalanceSrting);
       
const man = TotalBalanceAmount - withdrowAmount;
TotalBalance.innerText = man;


withdrowFile.value = '';


})