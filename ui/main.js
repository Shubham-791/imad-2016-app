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
//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Should make a request to server and send a name
    
    // Make a request to counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the request object 
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){ // Request has been completed successfully
            //Take some action
            if(request.status === 200){
            var names = request.responseText;
            names= JSON.parse(names);
            var list = '';
            for(var i=0;i<names.length;i++){
            list += '<li>'+names[i]+'</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list; 
            
            }
                
        }
        //Not done yet
    };
    
    // Make the Request 
    var nameInput = document.getElementById('name');
    var temp = nameInput.value;
    request.open('GET','http://shubham-791.imad.hasura-app.io/submit-name?name='+temp,true);
    request.send(null);
    
    
    //Capture a list of names and render it as list
};

