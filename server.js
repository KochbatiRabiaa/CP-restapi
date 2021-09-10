const { ObjectId } = require('bson')
const express=require('express')
const app=express()
const connect=require('./connectDB/connect')
const users=require('./models/User')
const port=process.env.PORT||4000



app.use(express.json())






connect()


app.post('/api/users', (req,res)=>{

   users.create(  {
    "userId": "krish",
    "jobTitle": "Developer",
    "firstName": "Krish",
    "lastName": "Lee",
    "employeeCode": "E1",
    "emailAddress": "krish.lee@learningcontainer.com"
  },
 {
        "userId": "devid",
        "jobTitle": "Developer",
        "firstName": "Devid",
        "lastName": "Rome",
        "phoneNumber": "1111111",
        "emailAddress": "devid.rome@learningcontainer.com"
      },(err)=>{
        err? res.status(406).send('oops,try again',err): res.status(202).send('its done')
})})





app.get('/api/users', async(req,res)=>{
try {
    const usersData= await users.find({}).exec()
    res.json({Employees:usersData})
} catch (error) {
    res.json({error})
    
}

})


app.put('/api/users/:id',async(req,res)=>{
    try {
        const singleData= await users.findByIdAndUpdate("613b251152e9dc3744421f25",{
            "userId": "David",
            "jobTitle": "Assistante",
            "firstName": "David",
            "lastName": "Monro",
            "phoneNumber": "1115214",
            "emailAddress": "David.Monro@learningcontainer.com"})
        res.json({singleData})
    } catch (error) {
        res.json({error})
        
    }  
})


app.delete('/api/users/:id', (req,res)=>{
users.findByIdAndRemove(req.params.id, (err)=>
err? res.status(401).send('failed',err): res.status(202).send('you did it'))
})

app.listen(4000, (err)=>{
    err? console.log('error',err):console.log(`Server is running on port ${port} `)
})