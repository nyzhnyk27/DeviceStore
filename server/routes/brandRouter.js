const Router = require("express")
const router = new Router()
const brandController = require("../controllers/brandController")

// метод post для створення брендів, get для отримання
router.post("/", brandController.create)
router.get("/", brandController.getAll)


module.exports = router