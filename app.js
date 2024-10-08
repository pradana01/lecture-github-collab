const express = require('express');
const router = require('./routers');
const app = express();
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});