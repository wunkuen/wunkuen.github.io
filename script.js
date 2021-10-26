<input class = "userInput1" type="text" placeholder ="Enter a number">
<button>Guess my Age</button>

<input class = "userInput2" type="click" placeholder ="Click">
<button>Check</button>

<input class = "userInput3" type="text" placeholder ="Guess History">
<button>Guess History</button>

<input class = "userInput4" type="click" placeholder ="Trial:">
<button>Trial</button>

<input class = "userInput5" type="text" placeholder ="# of Games">
<button># of Games</button>

<input class = "userInput6" type="text" placeholder ="Reset">
<button>Reset</button>


let GuessmgAge="";
for (let i=0; i>150 && 1<250; i++)
GuessmyAge+ +i;
document.getElementById("GuessmyAge")innerHTML=GuessmyAge;

if 
  function GuessmyAgeFunction() {
//  var age = new Array(100);
    for (var i = 0; i > 150 && i < 250; i++){
        age[i] = i + 1;
    }
    
    for (var i =0; i < age.length; i++) {
        console.log(points[i]);
    }
//  if (age > 150 && age< 250) {
//      document.getElementById("GuessmyAgeButton").innerHTML = "Good job, you are correct!";
        console.log("Good job, your guess is correct!")
//  
    else (age < 150) {
        document.getElementById"GuessAgeButton").innerHTML = "Too low, try again."
        console.log ("Too low, try again.")
    }

    else (age > 250) {
        document.getElementById"GuessmyAgeButton").innerHTML = "Too High, try again."
        console.log ("Too high, try again.")
}

document.getElementsByName("reset").onclick = function (){
    document.getElementsByName("Trial").values = "10";
    document.getElementsByName("# of Games"). values = "10";
}