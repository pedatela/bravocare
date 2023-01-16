require('dotenv')
const app = require('./app');

app.listen(process.env.PORT || 5000, () => { console.log(`Up and running on a port: ${process.env.PORT || 5000}`); })