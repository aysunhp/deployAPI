const User = require("./../models/userModel")

const getAllUsers = async (req, res) => {
    const allUsers = await User.find({})
    res.send(allUsers)
}

const postUser = async (req, res) => {
    let found = await User.findOne({ id: req.body.id })
    if (found) {
        console.log("This id exist")
    } else {
        const newUser = new User(req.body)
        newUser.save()
    }
}


const getUserById = async (req, res) => {
    let found = await User.findOne({ id: req.params.id })
    res.send(found)
}

const deleteUser = async (req, res) => {
    let found = await User.findOne({ id: req.params.id })
    let _id = found._id
    const deletedUser = await User.findByIdAndDelete(_id)
}

const updateUser = async (req, res) => {
    let updatedUser = await User.findOneAndUpdate({ id: req.params.id }, req.body)
}

const putUser = async (req, res) => {
    let updatedUser = await User.replaceOne({ id: req.params.id }, req.body)
}

module.exports = { getAllUsers, getUserById, postUser, deleteUser, updateUser, putUser }
