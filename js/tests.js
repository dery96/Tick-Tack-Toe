// Check if any chracter wins the game.
export default function win(list, character) {
  var winAcrossTest = function(list, character) {
    var sumChar
    for (var i = 0; i < list.length; i++) {
      sumChar = 0;
      for (var j = 0; j < list[0].length; j++) {
        if (list[i][j] === character) {
          sumChar++;
        }
      }
      if (sumChar === 3) {
        console.log("In across test won character: " + character);
        return true;
      } else {
        sumChar = 0;
      }
    }
  };

  var winDownTest = function(list, character) {
    for (var j = 0; j < list[0].length; j++) {
      var sumChar = 0;
      for (var i = 0; i < list.length; i++) {
        if (list[i][j] === character) {
          sumChar++;
        }
      }
      if (sumChar === 3) {
        console.log("In down test won character: " + character);
        return true;
      } else {
        sumChar = 0;
      }
    }
  };

  var winDiagonalTest = function(list, character) {
    if (list[0][0] === character && list[1][1] === character && list[2][2] === character) {
      console.log("In diagonal test won character: " + character);
      return true;
    } else if (list[0][2] === character && list[1][1] === character && list[2][0] === character) {
      console.log("In diagonal test won character: " + character);
      return true;
    };
  };

  if (winAcrossTest(list, character) || winDownTest(list, character) || winDiagonalTest(list, character)) {
    return true
  } else {
    return false
  }
};
