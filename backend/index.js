const express = require('express')
const data =  require('./data/data')
const dotenv = require("dotenv")
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const {notFound , errorHandler} = require('./middleware/errorMiddleware')
const chatRoutes = require("./routes/chatRoutes")



dotenv.config();
const app = express()


connectDB();
app.use(express.json());

app.get("/" , (req , res) =>{
    res.send("yes this is a home page")
})

app.use('/api/user',userRoutes)
app.use('/api/chat' , chatRoutes)

app.use(notFound);
app.use(errorHandler)
 const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`Server started on PORT ${PORT}`)
})