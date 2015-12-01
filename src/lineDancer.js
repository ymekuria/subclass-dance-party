var MakeLineDancer = function(top, left, timeBetweenSteps) {
   MakeDancer.call(this,top, left, timeBetweenSteps);
   this.$node.removeClass().addClass("lineDancer");
   console.log('Top', top, 'left', left, 'timeBetweenSteps', timeBetweenSteps);
}
MakeLineDancer.prototype = Object.create(MakeDancer.prototype);

MakeLineDancer.prototype.constructor = MakeLineDancer;
MakeLineDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);
  var myTop = this.$node[0]['offsetTop'];
  //console.log(myTop);
console.log($("body").height())
  if(myTop > 0) {
  var newTop = myTop - 40;
} else { 
  newTop = $("body").height();

} 
  var myStyle = {
   top:newTop
  };
  this.$node.css(myStyle);
};


