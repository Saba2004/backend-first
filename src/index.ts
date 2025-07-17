import express from "express";
const app = express()
const port = 3000

const db = {
    courses: [
        {id: 1, name: "Frontend"},
        {id: 2, name: "Backend"},
        {id: 3, name: "Designer"}
    ]
}

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/courses', (req, res) => {
    res.json(db.courses)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
