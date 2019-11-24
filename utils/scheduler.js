var scheduler={};
var totaltime;
const sendemail=require('../SendMessage/email');
scheduler.schedule=(data)=>{
	
var checkintime=data.Visitorcheckintime.split(":");
var checkouttime=data.Visitorcheckouttime.split(":");
var checkinhr=parseInt(checkintime[0]);
var checkinmin=parseInt(checkintime[1]);
var checkouthr=parseInt(checkouttime[0]);
var checkoutmin=parseInt(checkouttime[1]);
	
if(checkinmin>checkoutmin){
		checkoutmin+=60;
		checkouthr-=1;
	}
	totaltime=(((checkoutmin-checkinmin)+(checkouthr-checkinhr)*60)*60)*1000;
	setTimeout(()=>{
		sendemail.sendtovisitor(data);
	},totaltime)
	 
};
module.exports=scheduler;