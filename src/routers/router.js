const router = require("express").Router()
const userController = require("./../controllers/userControllers")

router.get("/users", userController.getAllUsers)
router.post("/users", userController.postUser)
router.get("/users/:id", userController.getUserById)
router.delete("/users/:id", userController.deleteUser)
router.put("/users/:id", userController.putUser)
router.patch("/users/:id", userController.updateUser)


module.exports = router