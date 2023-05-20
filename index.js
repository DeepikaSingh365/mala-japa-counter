let malaCount = document.getElementById("mala-count");
let numberOfMala = document.getElementById("number-of-mala")
let count =0;
let countNumber = 0
function handleIncrement(){
    count +=1;
    if(count===109){
        countNumber +=1;
        numberOfMala.innerHTML=countNumber;
        count=0;

    }
    malaCount.innerHTML=count;

}
function handleDecrement(){
    count -=1;
    malaCount.innerHTML=count;
}
function handleReset(){
    count=0;
    malaCount.innerHTML=count;

}
function handleResetAll(){
    count=0;
    countNumber =0
    malaCount.innerHTML=count;
    numberOfMala.innerHTML=countNumber;

}
