const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <div style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        ">
        <h1>Welcome to the version 1 of this app!</h1>
        <p>Here is a nice image to get you started!</p>
            <img src="https://source.unsplash.com/featured/300x201" alt="random image" />
        </div>
    `)
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}...`)
})