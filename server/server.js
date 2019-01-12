const app = require('./app');

app.get('/', (req, res) => res.send('Hello World!'));
const server = app.listen(4000, 
    () => console.log(`Ditto server running on port 4000`)
);