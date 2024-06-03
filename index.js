const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('mainPage');
});
