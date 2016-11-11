function forEach(pointsArray, anyNameCallback) {
    for (var x = 0; x < pointsArray.length; x++) {
        anyNameCallback(pointsArray[x]);
    }
};


var revealPoint = function(item) {
     item.style.opacity = 1;
     item.style.transform = "scaleX(1) translateY(0)";
     item.style.msTransform = "scaleX(1) translateY(0)";
     item.style.WebkitTransform = "scaleX(1) translateY(0)";
  };