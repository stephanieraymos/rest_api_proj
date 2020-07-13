const express = require('express');
const app = express();

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello from node');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));