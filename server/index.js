require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const models = require("./models/models")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require("path")

const PORT = process.env.PORT  || 5000

// налаштуємо cors , щоб ми могли відправляти запити з браузера
//створюємо об"єкт викликавши функцію express
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router)

// Обробка помилок, останній Middleware
app.use(errorHandler)


// функція для підключення БД
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync() // за допомогою цієї функції буде звірятись стан БД зі схемою даних 

        //прослуховування порта сервером
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

// виклик функції
start()
