const nodemailer=require("nodeMailer");
const sendEmail=async(subject,message,send_to,send_from,reply_to)=>{
    const transpoter=nodemailer.createTransport({
        host : process.env.EMAIL_HOST,
        port:587,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
            
        },
        tls:{
            rejectUnauthorized:false
        }
    })
    //options for sending mail
    const options={
        from: sent_from,
        to:send_to,
        replyTo:reply_to,
        subject:subject,
        html:message,
    }

    //send email
    transpoter.sendMail(options,function(err,info){
        if(err){
            console.lof(err);
        }
        console.log(info);
    });
};

module.exports=sendEmail