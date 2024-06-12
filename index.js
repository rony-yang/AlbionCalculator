const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/albion', (req, res) => {
  res.render('mainPage');
});

app.get('/chickenOmelette', (req, res) => {
  res.render('chickenOmelette');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('오류');
});
