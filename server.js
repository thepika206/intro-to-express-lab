// import modules

import express from 'express'

// Create Express app

const app = express()

// Configure the app (app.set)



// Mount Middleware (app.use)



// Mount routes

app.get('/', function (req,res) {
  res.send('<h1>hello, friends!</h1>')
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('listening on port 3000')
})