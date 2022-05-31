const expres=require("express")
const app=expres()
const mongoose=require("mongoose")
const dotenv=require("dotenv")


const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const cartRoute=require("./models/Cart")
const orderRoute=require("./models/Order")



dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBconnection Successful"))
.catch((err)=>{
    console.log(err)
})

app.use(expres.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);




app.listen(process.env.PORT || 5000,()=>{
    console.log("server is running!!!")
})