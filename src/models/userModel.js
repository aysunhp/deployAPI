const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    age: String,
    genre: String
}, {
    collection: "MyUsers", timestamp: true
})

const User = mongoose.model("MyUsers", userSchema)

module.exports = User