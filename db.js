
const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";


mongoose.connect(mongoURI)

const connectToMongo = async () =>{
    try {
        await mongoose.connect(mongoURI);
        console.log("connected successfully");
      } catch (error) {
        handleError(error);
      }
}

module.exports = connectToMongo;
