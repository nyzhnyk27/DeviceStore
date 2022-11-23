const Router = require("express")
const router = new Router()
const brandController = require("../controllers/brandController")
const checkRole = require("../middleware/checkRoleMiddleware")

// метод post для створення брендів, get для отримання
router.post("/", checkRole("ADMIN"), brandController.create)
router.get("/", brandController.getAll)


module.exports = router