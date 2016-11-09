
var pointsArray = document.getElementsByClassName('point');
 
 var animatePoints = function(points) {
     
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

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener('scroll', function(event) {
       if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
}