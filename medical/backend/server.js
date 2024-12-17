const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/endpoint', (req, res) => {
    res.json({
        labels: ['2020', '2021', '2022'],
        values: [120, 130, 140],
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});