// The addres of this server connected to network is: 
// URl -> http://localhost:2425
// IP -> 127.0.0.1:2425
const express = require('express')
const app = express()
const PORT = 2425

let data = ['Sofi <3']

// Middleware
app.use(express.json())

// ENDPOINT: HTTP VERBS (or method) && Routes (or paths).
// The method informs the nature of the request and the route is a further subdirectory 
// (basically we direct the request to the body of code to respond appropiately, and these locatios are called endpoints)

// Type 1 - Website endpoints (For sending back html and typically used when a user enters an url in browser)

app.get('/', (req, res) => {
    // this is endpoint number 1: /
    res.send(`
        <body style="background:black; color:orange;">
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">Home</a>
        </body>`)
})

// Type - 2 API endpoints (non visual)

// CRUD=method - create=post read=get update=put and delete=delete

app.get('/api/data', (req, res) => {
    console.log('This one is for data')
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    // Someone wants to create a user (click on sign up button)
    // User click on sign up button after entering their credentials,
    // and the browser is wired up to send a network request to the server to handle the action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    res.send(203)
})

// This line of code ALWAYS at the bottom
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))