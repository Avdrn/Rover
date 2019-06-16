// Rover Object Goes Here

var rover = {
 "direction" : "N",
 "x" : 0,
 "y" : 0,
 "travelLog" : [],
}



// TURN //

function turnLeft(rover){
  
  console.log("turnLeft was called!");

  var newDirection = "";

  switch(rover.direction) {
    case N : 
      var newDirection = "W";
      break;
    case E : 
      var newDirection = "N";
      break; 
    case S : 
      var newDirection = "E";
      break;  
    case W : 
      var newDirection = "S";
      break;    
  }

  rover.direction = NewDirection
}

function turnRight(rover){

  switch(rover.direction) {
    case N : 
      var newDirection = "E";
      break;
    case E : 
      var newDirection = "S";
      break; 
    case S : 
      var newDirection = "W";
      break;  
    case W : 
      var newDirection = "N";
      break;    
  }
  
  rover.direction = NewDirection

}

 // MOVE //

function moveForward(rover){

var newPositionX = ""
var newPositionY = ""

switch(rover.direction) {
  case N : 
    var newPositionY = rover.y -1 ;
    break;
  case E : 
    var newPositionX = rover.x +1 ;
    break; 
  case S : 
    var newPositionY = rover.y +1 ;
    break;  
  case W : 
    var newPositionX = rover.x -1 ;
    break;    
}  

rover.x = newPositionX;
rover.y = newPositionY;

travelLog.push([newPositionX,newPositionY]);


}

// COMMAND

var listOfCommand = "rffffllfff";

function command (listOfCommand) {

  for (var i = 0 ; i < listOfCommand.lenght ; i++){
    switch (listOfCommand[i]) {
      case r : turnRight(rover);
       break;
      case l : turnLeft(rover);
       break;
      case f : moveForward(rover);
        break;
    }
  }

}



