var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
   MakeDancer.call(this,top, left, timeBetweenSteps);
   console.log(this.$node);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};

