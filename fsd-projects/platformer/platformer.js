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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(250, 350, 100, 20,"black");
    createPlatform(600, 300, 150, 20,"black");
    createPlatform(0, 400, 150, 500, "black");
    createPlatform(600, 500, 150, 20,"black");
    createPlatform(900, 400, 150, 20,"black");



    // TODO 3 - Create Collectables
  createCollectable("steve", 1000, 150);
  createCollectable("diamond", 675, 400, 0.5, 0.7);
  createCollectable("steve", 500, 50);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 775, 0);
    createCannon("bottom", 800, 800)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
