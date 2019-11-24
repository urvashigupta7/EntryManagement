const express=require('express');
const app=express();
const config=require('dotenv').config({path:'./config/.env'});
const mongoose=require('mongoose');
const sendemail=require('./utils/sendmessage/email');
const sendsms=require('./utils/sendmessage/sms');
const scheduler=require('./utils/scheduler');
var bodyparser=require('body-parser');
mongoose.connect('mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0-lhmgd.mongodb.net/test?retryWrites=true&w=majority',{ 
	useNewUrlParser: true,
     useCreateIndex: true,
    useFindAndModify: false,
	useUnifiedTopology: true
});
const form=require('./models/details');
// app.use(express.json());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
	res.render('main.ejs');
})
app.post('/',(req,res)=>{
	
	sendemail.sendtohost(req.body);
	// sendsms.sendtohost(req.body);
	form.create(req.body);
	res.render('success.ejs');
	scheduler.schedule(req.body);
	
})
const port=process.env.PORT||3000;
app.listen(port,process.env.IP,()=>{
	console.log(`Server running at port ${port}`);
})