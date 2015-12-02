var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  this.setPosition(top, left);

};

  
  MakeDancer.prototype.step = function() {
    var that = this;
    setTimeout(function(){that.step();}, this.timeBetweenSteps);
  };

  MakeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left

    };
    this.$node.css(styleSettings);
  };
  MakeDancer.prototype.lineUp = function() {


  var myStyle = {
   left: 50
  };
  this.$node.css(myStyle);


};
