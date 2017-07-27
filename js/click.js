export default function click(list, character) {
  var x
  var y
  var canv = document.getElementById('clickCanvas')
  var ctx = canv.getContext('2d');
  canv.width = 300
  canv.height = 300

  canv.onmousemove = function(e) {
    x = Math.floor(e.offsetY / 100);
    y = Math.floor(e.offsetX / 100);

    if (x >= 0 && x <= 300) {
      if (y >= 0 && y <= 300) {
        document.getElementById('info').innerHTML = '<strong>' + x + '</strong>, <strong>' + y + '</strong>';


        // var tmp_x = Math.floor(e.offsetY / mapConfig.tileHeight())
        // var tmp_y = Math.floor(e.offsetX / mapConfig.tileWidth())

        // ctx.fillRect(Math.ceil(tmp_y * mapConfig.tileWidth()), Math.ceil(tmp_x * mapConfig.tileHeight()) , mapConfig.tileWidth(), mapConfig.tileHeight());
      }
    }
  }
}

  // element.onclick = function (element) {
  //   // whenever you click on Tile it show active tile on map
  //   var e = document.getElementById('clickTile')
  //   clickTile['x'] = x
  //   clickTile['y'] = y
  //   e.innerHTML = '<strong>[' + x + '</strong>, <strong>' + y + ']</strong>'
  //
  //   var canvas = document.getElementById('canvasClick')
  //   if (canvas.getContext){
  //     canvas.width = mapConfig.mapWidth()
  //     canvas.height = mapConfig.mapHeight()
  //
  //     var ctx = canvas.getContext('2d');
  //     ctx.fillStyle = "#ffcc00";
  //
  //     var tmp_x = JSON.parse(localStorage.getItem('tmp_x'))
  //     var tmp_y = JSON.parse(localStorage.getItem('tmp_y'))
  //
  //     ctx.fillRect(Math.ceil(tmp_y * mapConfig.tileWidth()), Math.ceil(tmp_x * mapConfig.tileHeight()) , mapConfig.tileWidth(), mapConfig.tileHeight());
  //   };
  //
  //   localStorage.setItem('clickTile', JSON.stringify(clickTile));
  // };
