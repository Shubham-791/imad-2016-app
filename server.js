var express = require('express');
var morgan = require('morgan');
var path = require('path');
var comm_data = "" ;
var app = express();
app.use(morgan('combined')); 


var articles={
    'article-one':{
        title: 'Article One | Shubham Verma',
        heading: 'Article One',
        date: 'Oct 13, 2016',
        content: `
             <h3>Autonomous Learning for Control and Robotics</h3>
             <p>
Autonomous learning has been a promising direction in control and robotics for more than a decade since data-driven learning allows to reduce the amount of engineering knowledge, which is otherwise required. How long does it take for an autonomous robot to learn a task from scratch if no informative prior knowledge is available? Typically, very long: Autonomous reinforcement learning (RL) approaches typically require many interactions with the system to learn controllers, which is a practical limitation in real systems, such as robots, where many interactions can be impractical and time consuming. To address this problem, current learning approaches typically require task-specific knowledge in form of expert demonstrations, realistic simulators, pre-shaped policies, or specific knowledge about the underlying dynamics. 
             </p>`
},
    'article-two':{
        title: 'Article Two | Shubham Verma',
        heading: 'Article Two',
        date: 'Oct 19 2016',
        content: `
             <p>
             This is the content for my Second Article.
             </p> `
},
    'article-three':{
        title: 'Article Three | Shubham Verma',
        heading: 'Article Three',
        date: 'Oct 21 2016',
        content: `
             <p>
             This is the content for my Third Article.
             </p> `
        
    }
};

function createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmltemplate = `
<html>
<head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class ="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
         <h3>
             ${heading} 
         </h3>
         <div>
             ${date}    
         </div>
         <div>
         ${content} 
         </div>
         <hr/>
         <form action = "http://shubham-791.imad.hasura-app.io/comm_submit" method = "GET">
         <br>
         <h3>Comments:</h3>
         <textarea rows = "3" cols = "60" name = "comment" id = "com" placeholder = "Enter your commments regarding this article">
         </textarea>
         <br>
         <input type = "submit" value = "Post Comment">
         <hr/>
         <h5>Comments By other Users:</h5>
         ${comm_data}
         </form>
     </div>
</body>
</html>

`;
return htmltemplate;
}

app.get('/', function (req, res) {  //Whenever a get is made to '/' thsi function is executed
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function (req,res){          // URL : submit-name?name=XXXXXX
   //Get the name from the request object
   var name = req.query.name;      // JASON java script object notation
   names.push(name);
   res.send(JSON.stringify(names));  
}); 

app.get('/comm_submit',function (req,res){
  comm_data = comm_data + "<br>" +req.query.comment;
  app.get("/article-one");
});

app.get('/ui/style.css', function (req, res) {  //when a get request is made to '/ui/style.css' this function is executed  
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {  //when a get request is made to '/ui/style.css' this function is executed  
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {    //"        "       "        " '/ui/madi.png'       "           "
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get("/:articleName",function (req,res){         //Expressway framework will convert :articleName into variable name 
    
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));  
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
    