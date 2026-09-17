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

    // BONUS 1 - BAD PLATFORMS 
    createBadPlatform(0, 700, 10000, 200, "red")

    // BONUS 3 - MOVING PLATFORMS 
   createPlatform(100, 900, 50, 100, "black", 500, 500, 1, 100, 600, 1)
    // TODO 3 - Create Collectables
  createCollectable("diamond", 500, 550);
  createCollectable("diamond", 675, 400, 0.5, 0.7);
  createCollectable("steve", 500, 50);

    // BONUS 2 - MOVING COLLECTIBLES 
 createCollectable("steve", 1000, 150, 0, 1, 150, 300, 2);
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 450, 2000);
    createCannon("bottom", 800, 1500)

    // BONUS 4 - DIFFERENT-SIZED PROJECTILES
  createProjectile("right", 200, 1000, 10, 5)
    
    // BONUS 5 - MOVING CANNONS 
    createCannon("right", 100, 2000, 20, 10, 100, 200, 2)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
