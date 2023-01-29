'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3800;
const mongoDb = process.env.MONGODB_URL || 'mongodb+srv://osh:osh99322@cluster.hhxazru.mongodb.net/socialdb?retryWrites=true&w=majority';

mongoose.connect(mongoDb, { useNewUrlParser: true })
.then(() => {
    console.log('DB: Connect OK!');
    app.listen(port, () => {
        console.log('Server running on => http://localhost:' + port);
    });
})
.catch(err => console.log(err));

console.log('Starting...');

