//Counter code 
var button=document.getElementById('counter');
button.onclick = function(){

    // Make a request to counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the request object 
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){ // Request has been completed successfully
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;  
                var span = document.getElementById('count');
                span.innerHTML = counter.toString(); 
            }
                
        }
        //Not done yet
    };
    
    // Make the Request
    request.open('GET','http://shubham-791.imad.hasura-app.io/counter',true);
    request.send(null);
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