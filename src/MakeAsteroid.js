var MakeAsteroid = function(){
  this.$node = $('<span class="asteroid"></span>');
};

MakeAsteroid.prototype.lineUp = function() {


  var myStyle = {
   left: 50
  };
  this.$node.css(myStyle);


};