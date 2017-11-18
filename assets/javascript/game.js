$( document ).ready(function(){
	//computer random number
  var Random=Math.floor(Math.random()*101+19)
   $("#numbertoguess").text(Random);


//create variables for random number (jewels)
var blue = Math.floor(Math.random()*13+1);
var green = Math.floor(Math.random()*13+1);
var red = Math.floor(Math.random()*13+1);
var yellow = Math.floor(Math.random()*13+1);

var results = 0;
var wins = 0;
var losses = 0;

$("numWins").text(wins);
$("numLosses").text(losses);

//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#numbertoguess').text(Random);
      blue= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      red= Math.floor(Math.random()*11+1);
      yellow= Math.floor(Math.random()*11+1);
      results= 0;
      $("#finalResults").text(results);
      } 
//adds the wins
function youwon(){
  $('#numWins').append("You won!");
  wins++; 
  $('#numWins').text("Wins: " + wins);
  reset();
}
//adds losses
function loser(){
$('#numLosses').text("You loss!");
  losses++;
  $('#numLosses').text("Losses: " + losses);
  reset()
}
//sets up click for jewels
  $('#bluejewel').on ('click', function(){
    results = results + blue;
    console.log("New results= " + results);
    $('#finalResults').text(results); 

        if (results == Random){
          youwon();
        }
        else if ( results > Random){
          loser();
        }   
  })  
  $('#greenjewel').on ('click', function(){
    results = results + green;
    console.log("New results= " + results);
    $('#finalResults').text(results); 
        if (results == Random){
          youwon();
        }
        else if ( results > Random){
          loser();
        } 
  })  
  $('#redjewel').on ('click', function(){
    results = results + red;
    console.log("New results= " + results);
    $('#finalResults').text(results);
//sets win/lose conditions
          if (results == Random){
          youwon();
        }
        else if ( results > Random){
          loser();
        } 
  })  
  $('#yellowjewel').on ('click', function(){
    results = results + yellow;
    console.log("New results= " + results);
    $('#finalResults').text(results); 
      
          if (results == Random){
          youwon();
        }
        else if ( results > Random){
          loser();
        }
  });




});



