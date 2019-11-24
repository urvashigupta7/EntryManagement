const sgmail=require('@sendgrid/mail');
sgmail.setApiKey(process.env.sgapikey);
const sendmail={};
sendmail.sendtohost=(data)=>
{sgmail.send({
	to:data.Hostemail,
	from:'urvashi072000@gmail.com',
	subject:'New Visitor',
	text:`Hi ${data.Hostname},\n${data.Visitorname} will be visiting at ${data.Visitorcheckintime} \nDuration: ${data.Visitorcheckintime} - ${data.Visitorcheckouttime} \nemail- ${data.Visitoremail} \nMobile No- ${data.Visitormobile} `
})}

sendmail.sendtovisitor=(data)=>{
	sgmail.send({
		to:data.Visitoremail,
		from:'urvashi072000@gmail.com',
		subject:'Thanks for Visting',
		text: `Hi ${data.Visitorname},\n\nYou visited ${data.Hostname} between ${data.Visitorcheckintime}-${data.Visitorcheckouttime}\nThank You`
	})
}
module.exports=sendmail;