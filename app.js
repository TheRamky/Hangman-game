
const express = require('express');

let curr_streak = 0, high_streak = 0;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.post('/game', (req, res) => {
  if (req.body.win) {
    curr_streak++;
    if (high_streak < curr_streak)  high_streak = curr_streak;
  } else {
    curr_streak = 0;
  }
  res.send('ok');
});

app.get('/', (req, res) => {
  res.render('game', { data: {curr: curr_streak, high: high_streak }});
});

app.listen(3000, () => {
  console.log('Server is fired up and running on port 3000');
});
