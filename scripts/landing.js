
var animatePoints = function() {

 var points = document.getElementsByClassName('point');

 var revealPoint = function(itemNo) {
     points[itemNo].style.opacity = 1;
     points[itemNo].style.transform = "scaleX(1) translateY(0)";
     points[itemNo].style.msTransform = "scaleX(1) translateY(0)";
     points[itemNo].style.WebkitTransform = "scaleX(1) translateY(0)";
 };

for (var itemNo = 0; itemNo < points.length; itemNo++) {
    revealPoint(itemNo);
}

     
};