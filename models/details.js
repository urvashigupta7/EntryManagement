const mongoose=require('mongoose');
const validator=require('validator');
const formSchema=new mongoose.Schema({
	Visitorname:{
		type:String,
		required:true,
	},
	Visitoremail:{
		type:String,
		required:true,
		lowercase:true,
		validate(value){
			if(!validator.isEmail(value)){
			   throw new Error('email id is invalid');
		   }
		}
	},
	Visitormobile:{
		type:Number,
		required:true,
		minlength:10
		
	},
	Visitorcheckintime:{
		type:String,
		required:true
	},
	Visitorcheckouttime:{
		type:String,
		required:true
	},
	Hostname:{
		type:String,
		required:true
	},
	Hostemail:{
		type:String,
		required:true,
		lowercase:true,
		validate(value){
			if(!validator.isEmail(value)){
			   throw new Error('email id is invalid');
			   }
		}
	},
	Hostmobile:{
		type:Number,
		required:true
	}
	    
},{
	timestamps:true
})
const form=mongoose.model('form',formSchema)
module.exports=form;
