'use strict';

/*console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "good guessing!nice one"

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").innerHTML = 13;
document.querySelector(".score").innerHTML=10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNum = Math.trunc(Math.random()*20)+1 ;
let score = 20;
let highScore = 0;

//function
const displayMessage = message => document.querySelector(".message").textContent = message;
const displayScore = score => document.querySelector(".score").textContent = score;
const displayNum = number => document.querySelector(".number").textContent = number;




document.querySelector(".check").addEventListener("click", function()
{
    const guess = Number(document.querySelector(".guess").value);
    //console.log(guess, typeof guess);

    if (!guess)
    {
        //1.)start with zero input first
        //for empty input, empty return zero and it's false. to make if execute must be true. so add ! to make it true
       //document.querySelector(".message").textContent = " No number";
       displayMessage(" No number");

    }else if (guess === secretNum){

        // win -logic part
        //document.querySelector(".message").textContent = "congratulation! You got it!";
        displayMessage("congratulation! You got it!");
        //document.querySelector(".number").innerHTML= secretNum;
        displayNum(secretNum);
        //css styling
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        /*logic of highscore
        1.) 1st round won , then  score = highscore
        2.) 2nd round onward, if  new score > highscore then highscore = new score else keep the highscore = score */

        if(score > highScore)
        {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        };


    // }else if (guess > secretNum){
    // //score refer to no of click
    //     if (score > 1){
    //     document.querySelector(".message").textContent = "The number is too high!";
    //     // score--;
    //     // document.querySelector(".score").textContent = score;
    //     document.querySelector(".score").textContent =  --score;
    //     }else{
        
    //     document.querySelector(".message").textContent = "You lost the game";
    //     document.querySelector(".score").textContent = 0;
    //     };
    
    
    // }else if (guess < secretNum){   
    //     if (score >1){
    //     document.querySelector(".message").textContent = "The number is too low!";
    //     // score--;
    //     // document.querySelector(".score").textContent = score;
    //     document.querySelector(".score").textContent =  --score;
    //     }else{
    //     document.querySelector(".message").textContent = "You lost the game"; 
    //     document.querySelector(".score").textContent = 0;
    //     };
    
    }else if(guess !== secretNum)
    {
        if (guess > secretNum && score > 1)
        {
            //document.querySelector(".message").textContent = "The number is too high!";
            displayMessage("The number is too high!");
            //document.querySelector(".score").textContent =  --score;
            displayScore(--score);
        }else if(guess < secretNum && score > 1)
        {
            //document.querySelector(".message").textContent = "The number is too low!";
            displayMessage("The number is too low!");
            //document.querySelector(".score").textContent =  --score;
            displayScore(--score);
        }else
        {   
            //document.querySelector(".message").textContent = "You lost the game"; 
            displayMessage("You lost the game");
            //document.querySelector(".score").textContent = 0;
            displayScore(0);
        }
    }; // end of if else condition
});// end of event of click on check

//again button

document.querySelector(".again").addEventListener("click",function()
{
    //restore score
    score=20;
    //document.querySelector(".score").textContent = score;
    displayScore(score);
    
    //restore secretNum
    //document.querySelector(".number").innerHTML= "?";
    displayNum("?");
    secretNum = Math.trunc(Math.random()*20)+1 ;

    //restore message
    //document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    //restore guessvalue - always in string
    document.querySelector(".guess").value="";
    //restore css styling
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    


}); //end of event - click on again button

 