import mongoose from "mongoose";

//substituir pass mongodb.net/livraria?

async function connectDAO() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
    
};

export default connectDAO;
