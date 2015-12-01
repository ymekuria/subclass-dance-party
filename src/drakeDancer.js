var MakeLineDancer = function(top,left,time) {
  MakeLineDancer.call(this,top,left,timeBetweemSteps)

};  

MakeLineDancer.prototype = Object.create(MakeDancer.prototype);

MakeLineDancer.prototype.constructor = MakeLineDancer;
MakeLineDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
 
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};