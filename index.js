const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // You can pick any available port

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
