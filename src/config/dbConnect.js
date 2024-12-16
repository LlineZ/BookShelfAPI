import mongoose from "mongoose";
const uri = "mongodb+srv://cluster-IO:@Root1234567890@cluster0.9e997.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"
//substituir pass mongodb.net/livraria?

async function connectDAO() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
    
};

export default connectDAO;
// const uri = "mongodb+srv://cluster-IO:%40Root1234567890@cluster0.9e997.mongodb.net/livraria?retryWrites=true&w=majority";