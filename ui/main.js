//Counter code 
var button=document.getElementById('counter');
var counter = 0 ;
button.onclick = function(){

    // Make a request to counter endpoint
    
    
    //Capture the response and save it in the var 
    
    //Render the var in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); 
};







/*console.log('Loaded!');
//Change the value of the element to a new value
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

// Move the image 

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';  
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);  //Every 100ms applty move right function
}*/