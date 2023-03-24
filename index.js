const express = require('express');
const app = express();
const PORT = 9090;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.status(200).send(

        {
            'kobe': {
                'id': 1,
                'name': 'Kobe Bryant',
                'points': '33,643',
                'rings': '5'
            },
            'lebron': {
                'id': 2,
                'name': 'LeBron James',
                'points': '38,450',
                'rings': '4'
            },
            'mike': {
                'id': 3,
                'name': 'Michael Jordan',
                'points': '32,292',
                'rings': '6'
            },
            'kd': {
                'id': 4,
                'name': 'Kevin Durant',
                'points': '26,764',
                'rings': '2'
            },
            'harden': {
                'id': 4,
                'name': 'James Harden',
                'points': '24,594',
                'rings': '0'
            },
            'paulpierce': {
                'id': 4,
                'name': 'Paul Pierce',
                'points': '26,397',
                'rings': '1'
            },
            'shaq': {
                'id': 4,
                'name': 'Shaquille O\'Neal',
                'points': '28,596',
                'rings': '4'
            },
            'russ': {
                'id': 4,
                'name': 'Russel Westbrook',
                'points': '24,246',
                'rings': '0'
            }
        }
    )
})

//
// app.post('/player/:id', (req,res) => {
//     const { id } = req.params;
//     const { picture } = req.body;
//
//     if (!picture) {
//         res.status(418).send({message: 'We need a picture!'})
//     }
//
//     res.send({
//         player: `player with your ${picture} and ID of ${id}`,
//     })
// });
