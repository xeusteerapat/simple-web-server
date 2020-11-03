const app = require('express')();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello Linode</h1>
  `);
});

app.listen(5000);
