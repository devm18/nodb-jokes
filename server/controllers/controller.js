const axios = require('axios'); 

let jokes = [];  
// I add an author to each object 
// jokes.joke = [ { id, type, setup, punchline, author } ]
// API jokes = [ { id, type, setup, punchline }, ... ]

/////////////////////////////////////////////////////////////////////////////
// API retrievals
// API sources: https://github.com/15Dkatz/official_joke_api

// Single Object = { id, type, setup, punchline }
// function getOneRandomJoke(req, res){
//   axios.get("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
//   .then(response => {
//     console.log('getOneRandomJoke:', response.data);
//     jokes.push(response.data);
//     res.status(200).json(jokes)
//   })
//   .catch(err => console.log(err));
// } 

// // Array of objects = [ { id, type, setup, punchline }, ... ]
// function getTenRandomJokes(req, res){
//   axios.get("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten")
//   .then(response => {
//     // console.log("getTenJokes:", response.data);
//     let newJokes = response.data.map(elem => Object.assign({}, elem, { "author": "David Katz etal." }) );
//     newJokes.forEach(elem => { jokes.push(elem); });
//     console.log("Initial getAPI does not use req,res:", req, res)
//     res.status(200).json(jokes);
//   })
//   .catch(err => console.log(err));
// }
// // must call to get initial starting point / data  
// getTenRandomJokes(); // req, res are undefined 

// function getAllSixtyJokes(req, res){
//   axios.get("https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json")
//   .then(response => {
//     // console.log(response.data);
//     let newJokes = response.data.map(elem => {
//       return Object.assign({}, elem, { "author": "David Katz etal." })
//     });
//     newJokes.forEach(elem => {
//       jokes.push(elem)
//     });
//     res.status(200).json(jokes)
//   })
//   .catch(err => console.log(err));
// } 

axios.get("https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json")
.then(response => {
  // console.log("response.data:", response.data); // dont need in server, shows in client
  let newJokes = response.data.map(elem => {
    return Object.assign({}, elem, { "author": "David Katz etal." })
  });
  newJokes.forEach(elem => {
    jokes.push(elem)
  });
})
.catch(err => console.log(err));

/////////////////////////////////////////////////////////////////////////////
//// Auxilliary functions 
//// find max Id number within jokes for creating/incrementing new unused id
function findMaxIdNum(arr) {
  let max = 0; 
  for(let i=0; i < arr.length; i++) {
    if(arr[i].id > max) {
      max = arr[i].id;
    }
  }
  return max; 
}


///////////////////////////////////////////////////////////
///// CRUD 
function read(req, res) {
  res.status(200).json(jokes)
}

function create(req, res) {
  // console.log("req.body:", req.body)
  let id = findMaxIdNum(jokes) + 1; 
  let { type, setup, punchline, author } = req.body;
  jokes.unshift({ id, type, setup, punchline, author: author || "unknown" }); 
  res.status(200).json(jokes)
}
// {
//   "type": "marriage",
//   "setup": "How many wives does it take to change a light bulb?",
//   "punchline": "None, they make their husbands do it.",
//   "author": "Jane Austen"
// }

function update(req, res) {
  console.log('edit id: ', req.params.id);
  console.log('req.body:', req.body);  
  let { type, setup, punchline, author } = req.body; 
  let updateID = Number(req.params.id);
  // console.log('jokes:', jokes, 'req.params', req.params, 'req.body', req.body);

  let jokeIndex = jokes.findIndex(joke => {
    // console.log('joke.id:', joke.id, 'updateID:', updateID)
    return joke.id == updateID 

  });
  if(jokeIndex === -1) { 
    res.status(400).json(jokes);
    // console.log("index not found");
    console.log("index not found");
  } else {
    jokes[jokeIndex] = {
      id: updateID,
      type: type,
      setup: setup,
      punchline: punchline,
      // author: author || "Unknown"
    };
  }
  res.status(200).json(jokes);
  console.log('update:', jokes)
}

function remove(req, res) {
  // console.log('remove id: ', req.params.id); 
  let removeID = Number(req.params.id); //alt: +req.params.id;
  let jokeIndex = jokes.findIndex(joke => joke.id === removeID); 
  if(jokeIndex !== -1) {
    jokes.splice(jokeIndex,1);
  }
  res.status(200).json(jokes)
}  

// CRUD 
// function filterByType() {} 
// function filterByWords() {} ie function queryyWord() {} 
// see https://github.com/SheaClose/eighteen-store/blob/master/server/index.js - line 14


// function createFavoritesList() {} // or 
// function createFavoritesProperty() {} 

// function createNewJokeType() {} 


module.exports = {
  // getOneRandomJoke,
  // getTenRandomJokes,
  // getAllSixtyJokes,
  read,
  create,
  update,
  remove
}



///////////////////////////////////////
//// alt way
// module.exports = {
//   read(req, res) {
//     res.status(200).json(jokes);
//   }
// };
///////////////////////////////////////
