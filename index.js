const express = require('express');
const app = express();
const fs = require("fs");
const fetch = require("node-fetch");

app.get('/listPlayers', function (req, res) {
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.get('/player/:name', function (req, res) {
    // get player info based on name
    fs.readFile( __dirname + "/" + "players.json", 'utf8', function (err, data) {
        const players = JSON.parse(data);
        const player = players[req.params.name];
        console.log( player );
        res.end( JSON.stringify(player));
    });
});

app.get("/player/:name/seasonStats", async (req, res) => {
        const requestOptions = {
            method: 'GET',
        };
        let playerInfo = await fetch("https://balldontlie.io/api/v1/players?search="+req.params.name, requestOptions);
        let playerInfoJson = await playerInfo.json();
        let playerID = playerInfoJson.data[0].id;

        const playerSeasonStatsReq = await fetch("https://balldontlie.io/api/v1/season_averages?player_ids[]="+playerID, requestOptions);
        const playerSeasonStats = await playerSeasonStatsReq.json();


        res.write("{\""+req.params.name+"\": ["+JSON.stringify(playerInfoJson.data[0]).substring(0,JSON.stringify(playerInfoJson.data[0]).length-1)+", "+JSON.stringify(playerSeasonStats.data[0]).substring(1)+"]}");
        res.end();
});

app.get("/player/:name/position", async (req, res) => {
    const requestOptions = {
        method: 'GET',
    };
    let stat = await fetch("https://balldontlie.io/api/v1/players?search="+req.params.name, requestOptions);

    let finalStat = await stat.json();
    finalStat = finalStat.data[0].position;

    res.write(JSON.stringify(finalStat));
    res.end();
});
app.listen(8081, function () {
    console.log("Example app listening at http://127.0.0.1:8081");
});
