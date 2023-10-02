const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017';
mongoose.connect(dbURI, {useNewUrlParser: true});


mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
    });

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
    });

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
    });


    const readLine = require ('readline');
    if (process.platform === 'win32'){
    const rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
    });
    rl.on ('SIGINT', () => {
    process.emit ("SIGINT");
    });
    }
    require('./locations');