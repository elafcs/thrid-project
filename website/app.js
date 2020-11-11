/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const urlBase = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
// the zip code will be enterd later on. 

const key = '&appid=88dcd292232a3ee0d58367aad3726dc2' 
// api credentials and the base url.
// api key 88dcd292232a3ee0d58367aad3726dc2



document.getElementById('generate').addEventListener('click', Submit);
// add an event listner for the event click to excute the the function "submit".

function Submit(e){
const feel = document.getElementById('content').value;
const zipCode = document.getElementById('zip').value;

// submit function was called by the event listenr, and it will take the zip and feeling values, both enterd by the user.

getInfo(urlBase, zipCode, key)
// getInfo function is the function that will be excuted from calling the submit from the event listener.

   .then(function(data){

    console.log(data);
    post('/ADD', {newDate: d, temperature:data.tempt, content: data.feel} );

  })
// here using promiese (then) to call anthore async function 
  .then(
    updateUI()
  )
// 
}

const getInfo = async (urlBase, zipCode, key)=>{
// will get the data from the api. 
// we inculeded the zipcode to specfiy the weather. 
    const r = await fetch (urlBase + zipCode + key)
    // bulding the URL using fetch and it will wait until it recvice the data. 
try {
    const t = await r.json();
    console.log(t);
    return t;
//geeting the data in json format 
} catch (error) {
    console.log("error has been made, please enter again", error);
    //error handler in case the user enters an error.
    
}
}
// this function will get the weather's data

const post = async ( url = '', data = {})=>{

// url here is the post route thst was spcified in the server.
// the data object will contain the date, temprature and the feeling.

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),        
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error has been made, please enter again", error);
    }
}

const updateUI = async ()=> {
    const request = await fetch('/ALL');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('content').innerHTML = allData[0].feeling;
    document.getElementById('temp').innerHTML = allData[0].temperature;

  }catch(error){
    console.log("error", error);
  }
}

// the function will show the data dynmcially 

