class Shape {
  super() {
    console.log("Shape setted up");
  }

  draw() {
    console.log("Draw shape");
    let canvas = document.getElementById("game");
    if (!canvas.getContext) {
      return;
    }

    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  }
}

export default Shape;
