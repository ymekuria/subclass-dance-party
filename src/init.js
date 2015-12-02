$(document).ready(function() {
  window.dancers = [];



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

  //LineUp clickhandler
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
//add asteroid
$(".addAsteroidButton").on("click", function(event) {
  console.log("event variable,", event);
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
    );
  
    $('body').append(dancer.$node);
  });
});

