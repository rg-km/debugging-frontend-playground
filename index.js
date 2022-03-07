function draw() {
  let snakeCanvas = document.getelementbyid('snakeBoard');
  let ctx = snakeCanvas.getcontext('2d');

  //play with this
  context.fillStyle = 'purple';
  context.fillRect(60, 100, 20, 20);

  context.fillStyle = 'red';
  context.fillRect(20, 40, 20, 20);

  context.fillStyle = 'green';
  context.fillRect(0, 0, 20, 20);
}
