console.log('Loaded!');
//Change the value of the element to a new value
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

// Move the image 

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px'; 
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);  //Every 100ms applty move right function
}