const projectData = {};
//API end point 

const express = require('express');
const app = express();
app.use(express.static('website'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors());

const port = 2000;
const server = app.listen(port, listening);
 function listening(){
  console.log("hi server");
  console.log('running on localhost:' , port);
  };
// local server


app.get('/ALL', data);

function data (req, res) {
  res.send('recived', projectData);
  };
  //call back function 
  //get route

app.post('/ADD', funcData);

function funcData (req,res){
    projectData.date=req.body.date;
    projectData.temp=req.body.temp;
    projectData.feeling=req.body.feeling;
    res.send(projectData);
    console.log("this is the object data", projectData)
};
    //post route
    
  

