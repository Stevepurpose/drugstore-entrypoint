const express=require('express')
const dotenv=require('dotenv')
const cors=require ('cors')

dotenv.config({path:'../config.env'})
const routeDrugs=require('./drugRouter')
const corsOptions = require('./config/corsOptions')
const connectDatabase=require('./drugDB.js')
const userRouter=require('./useRouter')
const app=express()


connectDatabase()

app.use(cors(corsOptions))
app.use(express.static('build'))
  app.use(express.json())
  app.use('/api/drugs',routeDrugs)
app.use('/api/user',userRouter)

 const PORT=process.env.PORT||4000
app.listen(PORT)