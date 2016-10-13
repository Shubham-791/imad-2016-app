console.log('Loaded!');
//Change the value of the element to a new value
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

// Move the image 

var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
}