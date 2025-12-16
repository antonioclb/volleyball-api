const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let matchState = {
    team1: { name: 'Team 1', points: 0, sets: 0, timeouts: 0, history: [] },
    team2: { name: 'Team 2', points: 0, sets: 0, timeouts: 0, history: [] },
    currentSet: 1,
    servingTeam: 1,
    maxSets: 5,
    ptWin: 25,
    ptTie: 15
};

app.post('/match', (req, res) => {
    matchState = req.body;
    res.json({ success: true });
});

app.get('/match', (req, res) => {
    res.json(matchState);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port ' + (process.env.PORT || 3000));
});
