const express = require('express');
const _ = require('lodash');
const app = express();
const port = 3000;

// Example of hardcoded secret (secret scanning demo)
const API_KEY = "12345-SECRET-KEY";

// Example of insecure code (Prototype Pollution demo)
const unsafeMerge = (obj1, obj2) => {
    return _.merge(obj1, obj2);
    // return obj1;
};

app.get('/', (req, res) => {
    res.send('Hello, GitHub Advanced Security!');
});

app.get('/merge', (req, res) => {
    const obj1 = { key: "value" };
    const obj2 = JSON.parse(req.query.obj || "{}");

    const mergedObject = unsafeMerge(obj1, obj2);
    res.json(mergedObject);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});