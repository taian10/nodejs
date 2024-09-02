const mongoose = require('mongoose');

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.lnjzlva.mongodb.net/?retryWrites=true&w=majority`).then(console.log('Conectado ao banco de dados')).catch(error => {
        console.log(error)
    })
}

module.exports = connectToDataBase