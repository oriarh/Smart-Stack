const express = require('express');
const db = require('./config/connection');
const router = require('./routes');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//     res.sendFile(Path.join(__dirname, '../client/build/index.html'));
// })

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on http://localhost:${PORT}`);
        //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});