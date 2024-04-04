// emailService.js

const { createTransport } = require('nodemailer');
const sendMailUsingSMTP = async (email, OTP) => {
    const transporter = createTransport({
        service: 'gmail',   
        auth: {
          user: "sohaibsipra869@gmail.com",
          pass: 'xeri feke fkog scdn'
        }
      });

    const mailOptions = {
        from: "sohaibsipra869@gmail.com",
        to: email,
        subject: 'OTP for email verification',
        text: `Your OTP is ${OTP}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            console.log('Email sent: ' + info.accepted);
        }
    });
}

module.exports = sendMailUsingSMTP;