require("dotenv").config()
const express = require("express")
const sequelize = require("./db")

const PORT = process.env.PORT  || 5000

const app = express()

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