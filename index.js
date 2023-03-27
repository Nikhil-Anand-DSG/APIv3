const express = require('express');
const app = express();
const fs = require("fs");
const fetch = require("node-fetch");
const {response} = require("express");

app.get('/listPlayers', function (req, res) {
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.get('/playerData/:name', function (req, res) {
    // get player info based on name
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        const players = JSON.parse(data);
        const player = players[req.params.name];
        console.log( player );
        res.end( JSON.stringify(player));
    });
});

// app.get('/:name/position', async function (req, res) {
//     const requestOptions = {
//         method: 'GET',
//     };
//     const url = "https://balldontlie.io/api/v1/players?search="+req.params.name
//     const positionResponse = await JSON.fetch(url, requestOptions);
//     res.end(JSON.stringify(positionResponse));
// });

app.get("/position", async (req, res) => {
    const requestOptions = {
        method: 'GET',
    };
    console.log('Sending Ball dontLie Req');
    let stat = await fetch("https://balldontlie.io/api/v1/players?search=lebron", requestOptions);
    const finalStat = await stat.json();
    console.log(finalStat);
    //res.end(await stat.json());
    res.end('test');
});

const server = app.listen(8081, function () {
    console.log("Example app listening at http://127.0.0.1:8081");
});
