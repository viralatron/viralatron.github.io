var p5_0 = new p5(function(sketch) {

  var x = 100, y = 100;

  sketch.setup = function() {
    var cnv = sketch.createCanvas(600, 400);
    sketch.stroke(0, 102);
    cnv.class('home');
  };

  sketch.draw = function() {
    sketch.background(255, 0, 0);
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
  };
});
