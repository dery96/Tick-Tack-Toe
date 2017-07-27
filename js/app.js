// Write Test for it

import win from './tests';
import click from './click'

class tickTackToe {
  constructor() {
    // this.list = [[0,0,0], [0,0,0], [0,0,0]];
    this.list = [[0, 2, 1], [0, 1, 2], [0, 1, 1]];
    this.canv = document.getElementById('TickTackToeCanvas');
    this.ctx = this.canv.getContext('2d');
  };

  drawX(i, j) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'red';

      this.ctx.moveTo(i - 40, j - 40);
      this.ctx.lineTo(i + 40, j + 40);
      this.ctx.lineWidth = 10;

      this.ctx.moveTo(i + 40, j - 40);
      this.ctx.lineTo(i - 40, j + 40);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
  };

  drawCircle(i, j) {
    this.ctx.beginPath();
    this.ctx.arc(i, j, 40, 0, 2 * Math.PI, false)
    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
  };

  drawMap() {
    var bcgColor = 'white';
    this.canv.width = 300;
    this.canv.height = 300;
    for (var i = 0; i < this.list.length; i++) {
      for (var j = 0; j < this.list[0].length; j++) {
        if (this.list[i][j] === 1) {
            this.ctx.fillStyle = bcgColor;
            this.ctx.fillRect(j * 100, i*100 , 98, 98);
            this.drawCircle(j* 100 + 50, i* 100 + 50)
        } else if (this.list[i][j] === 2) {
          document.getElementById('text').innerHTML = this.list[i][j]
          this.ctx.fillStyle = bcgColor;
          this.ctx.fillRect(j * 100, i*100 , 98, 98);
          this.drawX(j * 100 + 50, i * 100 + 50);
        }
      }
    }
  };

  newGame() {
    this.list = [[0,0,0], [0,0,0], [0,0,0]];
    // this.drawMap()
  }
  gameState() {
    if (win(this.list, 1)) {
      document.getElementById('text').innerHTML = "End Game: Circle wins.";
      this.newGame()
    }
    if (win(this.list, 2)) {
      document.getElementById('text').innerHTML = "End Game: Cross wins.";
      this.newGame()
    }
  }

};

var game = new tickTackToe()

click()

game.drawMap()
game.gameState()
