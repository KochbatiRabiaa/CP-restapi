const mongoose=require('mongoose')
const {model , Schema}= mongoose


const userSchema=new Schema (
{ 
    userId: {type:String , require:true} ,
    jobTitle: String,
    firstName:{type:String , require:true} ,
    lastName:{type:String , require:true} ,
    phoneNumber: {type:Number , require:true} ,
    emailAddress: String
}
)

const users=model('users', userSchema )


module.exports=users