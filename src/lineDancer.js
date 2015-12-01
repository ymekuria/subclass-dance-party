var MakeLineDancer = function(top, left, timeBetweenSteps) {
   MakeDancer.call(this,top, left, timeBetweenSteps);
   this.$node.removeClass().addClass("lineDancer");
   dancers.push(this);
   
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
  var myStyle = {
      top:newTop
    };
    this.$node.css(myStyle);
} else { 
  this.$node.removeClass().addClass("explode");
 
  var that = this;
  setTimeout(function(){
    
    that.$node.removeClass().addClass("lineDancer");
    newTop = $("body").height();
    var myStyle = {
      top:newTop
    };
    that.$node.css(myStyle);
  },800)
  


} 


}


