import express from "express"
import publicsRoutes from "./routes/public.js"


const app = express()
app.use(express.json())

app.use("/", publicsRoutes)

app.listen(3000, () => {console.log("server on!!")})