var MakeAsteroid = function(){
  this.$node = $('<span class="asteroid"></span>');
  dancers.push(this);
  this.setPosition();
};

MakeAsteroid.prototype.lineUp = function() {


  var myStyle = {
   left: 50
  };
  this.$node.css(myStyle);


};

MakeAsteroid.prototype.setPosition = function() {
    var styleSettings = {
      top: 200,
      left: 200
      // top: $("body").height()/2,
      // left: $("body").width()/2

    };
    this.$node.css(styleSettings);
};