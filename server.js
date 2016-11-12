var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined')); 


var articles={
    'article-one':{
        title: 'Article One | Shubham Verma',
        heading: 'Article One',
        date: 'Oct 13, 2016',
        content: `
             <p>
             This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             </p>
             <p>
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.
             </p>
             <p>
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.
             </p>
             <p>
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.This is the content for my Fist Article.
             This is the content for my Fist Article.This is the content for my Fist Article.
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
    //articleName == article-One
    // articles == {} content object for article one
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));  
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
