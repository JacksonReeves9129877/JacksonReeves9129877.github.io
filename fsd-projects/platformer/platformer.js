$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

console.log(createPlatform(350,700, 100, 8))
console.log(createPlatform(600,600, 120, 8))
console.log(createPlatform(1300,650, 1, 1))
console.log(createPlatform(1100,550, 1, 1))
console.log(createPlatform(1100,425, 1, 1))
console.log(createPlatform(1100,300, 1, 1))
console.log(createPlatform(400,500, 120, 8))
console.log(createPlatform(400,400, 140, 8))
console.log(createPlatform(400,423, 1, 1))
console.log(createPlatform(600,300, 120, 8))
console.log(createPlatform(900,200, 120, 8))
console.log(createPlatform(1125,200, 120, 8))




    // TODO 3 - Create Collectables

createCollectable("max",525, 700);
createCollectable("grace",600, 200);
createCollectable("diamond",500, 400);
createCollectable("steve",1100, 700);



    
    // TODO 4 - Create Cannons
createCannon("left",400,4000)
createCannon("left",300,4000)
createCannon("top",700,2000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
