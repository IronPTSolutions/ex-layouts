const express = require('express');

const app = express();

/** Configure view engine */
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
  const name = 'Carlos';
  res.render('home', {
    name: name
  });
})

app.get('/about', (req, res, next) => {
  const name = 'Carlos';
  res.render('about', {
    name: name
  });
})

const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));
