var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined')); 


var articleOne={
    title: 'Article One | Shubham Verma',
    heading: 'Article One',
    date: 'Oct 13 2016',
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


app.get("/article-one",function (req,res){
   res.send(createTemplate(articleOne));  
});

app.get("/article-two",function (req,res){
   res.sendFile(path.join(__dirname,"ui","article-two.html"));
});

app.get("/article-three",function (req,res){
   res.sendFile(path.join(__dirname,"ui","article-three.html"));
});

app.get('/ui/style.css', function (req, res) {  //when a get request is made to '/ui/style.css' this function is executed  
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {    //"        "       "        " '/ui/madi.png'       "           "
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
