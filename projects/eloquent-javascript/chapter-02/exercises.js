
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(i) {
  
  for (var tri = "#"; tri.length <= i; tri += "#") {
    console.log(tri);
  }
   
  
  
  

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i <= 15; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    }else if (i % 3 === 0) {
      console.log('fizz');
    }else if (i % 5 === 0) {
      console.log('buzz');
    }else{
      console.log(i);
    }

  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var board = "";
  for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        board += " ";
      }else {
        board += "#";
      }
    }
        board += "\n";
  }
  console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
