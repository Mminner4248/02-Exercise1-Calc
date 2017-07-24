let firstNum = document.getElementById("fNum");
let secNum = document.getElementById("sNum");
let sumPost = document.getElementById("final");
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function toAdd(fNum, sNum){
let sum = Number(firstNum.value) + Number(secNum.value);
sumPost.innerHTML = sum;

}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function toSub (fNum, sNum){
console.log(firstNum);
 let sum = Number(firstNum.value) - Number(secNum.value);
 sumPost.innerHTML = sum;

}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function toMult (fNum, sNum){
 let sum = Number(firstNum.value) * Number(secNum.value);
 sumPost.innerHTML = sum;

}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function toDiv (fNum, sNum){
 let sum = Number(firstNum.value) / Number(secNum.value);
 sumPost.innerHTML = sum;

}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function Initiate (fNum, sNum, func){
    return func(fNum,sNum);
}



add.addEventListener("click", function(){
    Initiate (firstNum.value, secNum.value, toAdd)
});

sub.addEventListener("click", function(){
    Initiate (firstNum.value, secNum.value, toSub)
});
mult.addEventListener("click", function(){
    Initiate (firstNum.value, secNum.value, toMult)  
});

div.addEventListener("click", function(){
    Initiate (firstNum.value, secNum.value, toDiv)
}); 