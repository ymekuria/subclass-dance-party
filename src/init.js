$(document).ready(function() {
  window.dancers = [];

  //Adds a rocket when the rocket button is clicked.
  $(".addDancerButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
  });

//Adds a star when the star button is clicked.
$(".addLineDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      60
    );
  
    $('body').append(dancer.$node);
  });

  //Lines up all the objects on the screen when the lineup button is clicked.
  $(".lineUpDancerButton").on("click", function(event) {

    console.log('click');

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

      for (var i = 0; i < dancers.length; i++){
        console.log(dancers[i])
        dancers[i][dancerMakerFunctionName]();
      }
      

  });

//Mouseover
 $('body').on("mouseover", '.lineDancer', function(event) {
  $( this ).animate({ "top": "-=1150px" }, "fast" );
  
      

  });

//Adds an asteroid when the asteroid button on the top left is clicked
$(".addAsteroidButton").on("click", function(event) {
  console.log("event variable,", event);
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
    );
  
    $('body').append(dancer.$node);
  });

//Moves the Asteroid with the arrow keys
$(document).keydown(function(e){

    switch (e.which){
    case 65:    //left arrow key
        $(".asteroid").finish().animate({
            left: "-=40"
        });
        break;
    case 87:    //up arrow key
        $(".asteroid").finish().animate({
            top: "-=40"
        });
        break;
    case 68:    //right arrow key
        $(".asteroid").finish().animate({
            left: "+=40"
        });
        break;
    case 83:    //bottom arrow key
        $(".asteroid").finish().animate({
            top: "+=40"
        });
        break;
    }

    var asteroidHeight = $('.asteroid').css('top');
    var asteroidLeft = $('.asteroid').css('left');

    console.log('height:',asteroidHeight, 'left', asteroidLeft);
  
  for( var i = 0; i < dancers.length; i++ ) {
    console.log('dancers[i].$node[0]',dancers[i].$node[0]);
    console.log('asteroidHeight', asteroidHeight, 'asteroidLeft',asteroidLeft)
    var rocketLeft = JSON.stringify(dancers[i].$node[0].offsetLeft) + 'px';
    var rocketTop = JSON.stringify(dancers[i].$node[0].offsetTop) + 'px';

    var rockLeft = dancers[i].$node[0].offsetLeft ;
    var rockTop = dancers[i].$node[0].offsetTop
    if ( Math.abs(rocketLeft - asteroidLeft) < 50 && Math.abs(rocketTop - asteroidHeight) <50) {
      console.log('HIT')
    }
  }
    // var rocketLeft = dancers[0].$node[0].offsetLeft;
    // var rocketTop = dancers[0].$node[0].offsetTop;

    //console.log('rocketLeft', rocketLeft, 'rocketRight', rocketTop)
// console.log('e', e, 'dancer[0].$node[0],',dancers[0].$node[0].offsetTop, "left",dancers[0].$node[0].offsetLeft)
    //loop through all the rockets
      //If astroied position === rockets positon
        //create explosion




});
});

