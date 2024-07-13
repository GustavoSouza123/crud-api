const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mycluster.eicxgej.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=MyCluster`;
    
    await mongoose.connect(uri)
        .then(() => {
            console.log('Connected to database');
        })
        .catch(() => {
            console.log('Connection to database failed');
        });
}

module.exports = connectToDatabase;