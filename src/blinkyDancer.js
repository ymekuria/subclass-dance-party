var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
   MakeDancer.call(this,top, left, timeBetweenSteps);
  dancers.push(this);

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);
   
  this.$node.toggle();
};

