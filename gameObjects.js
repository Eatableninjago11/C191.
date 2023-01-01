AFRAME.registerComponent("asteroids", {
    init: function() {
        posX: -20;
        posZ:85;
    
    
    for (var i = 0; i < 10; i++) {
        //create asteroid entity
        var asteroid1 = document.createElement("a-entity");
        var asteroid2 = document.createElement("a-entity");
        var asteroid3 = document.createElement("a-entity");
        var asteroid4 = document.createElement("a-entity");
        var asteroid5 = document.createElement("a-entity");
        var asteroid6 = document.createElement("a-entity");


        //Set X, Y , Z positions

        posX = posX + 5;
        posY = 10;
        posZ = posZ - 10;

        // Scale
        var scale = {x: 50, y: 50, z: 50};

        //set the id
      asteroid1.setAttribute("id", "asteroid1" + i);
      asteroid2.setAttribute("id", "asteroid2" + i);
      asteroid3.setAttribute("id", "asteroid3" + i);
      asteroid4.setAttribute("id", "asteroid4" + i);
      asteroid5.setAttribute("id", "asteroid5" + i);
      asteroid6.setAttribute("id", "asteroid6" + i);


      //set the position
      asteroid1.setAttribute("position", { x: posX, y: 5, z: -35 });
      asteroid2.setAttribute("position", { x: posX, y: 5, z: 85 });
      asteroid3.setAttribute("position", { x: -30, y: 5, z: posZ });
      asteroid4.setAttribute("position", { x: 50, y: 5, z: posZ });
      asteroid5.setAttribute("position", { x: 60, y: 5, z: posZ });
      asteroid6.setAttribute("position", { x: 70, y: 5, z: posZ });


      //set the scale
      asteroid1.setAttribute("scale", scale);
      asteroid2.setAttribute("scale", scale);
      asteroid3.setAttribute("scale", scale);
      asteroid4.setAttribute("scale", scale);
      asteroid5.setAttribute("scale", scale);
      asteroid6.setAttribute("scale", scale);

      //Set Model
      asteroid1.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );

      asteroid2.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid3.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid4.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid5.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid6.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );

       //set the physics body
       asteroid1.setAttribute("static-body", {});
       asteroid2.setAttribute("static-body", {});
       asteroid3.setAttribute("static-body", {});
       asteroid4.setAttribute("static-body", {});
       asteroid5.setAttribute("static-body", {});
       asteroid6.setAttribute("static-body", {});

       var sceneEl = document.querySelector("#scene");
       //attach the entity to the scene
       sceneEl.appendChild(asteroid1);
       sceneEl.appendChild(asteroid2);
       sceneEl.appendChild(asteroid3);
       sceneEl.appendChild(asteroid4);
       sceneEl.appendChild(asteroid5);
       sceneEl.appendChild(asteroid6);
 
    }
  },
});