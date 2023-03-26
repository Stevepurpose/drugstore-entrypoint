const express=require('express')
const dotenv=require('dotenv')
const cors=require ('cors')

dotenv.config({path:'../config.env'})
const routeDrugs=require('./drugRouter')
const connectDatabase=require('./drugDB.js')
const userRouter=require('./useRouter')
const app=express()


connectDatabase()
app.use(express.json())
app.use('/api/drugs',routeDrugs)
app.use('/api/user',userRouter)
app.use(cors({origin:"https://drugstore-inventory.onrender.com",
methods:"*",
allowedHeaders:['Content-Type','Authorization']

}))


 const PORT=process.env.PORT||4000
app.listen(PORT)