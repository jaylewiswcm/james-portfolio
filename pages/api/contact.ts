const nodemailer = require('nodemailer');

const handler = (req: any, res: any) => {
  res.status(200).json({ user: 'Ada Lovelace' })
  // Send email 
  console.log(req.body);

  const { email, name, message  } = req.body

  const reciever = 'jr_lewis@outlook.com'
  // const reciever = 'jamesthomson.gorwill@live.co.uk'

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:  process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  var mailOptions = {
    from: email,
    to: reciever,
    subject: 'Sending Email using Node.js',
    html: `<p>From : ${name}</p><br><p>Message : ${message}</p>`
  };

  transporter.sendMail(mailOptions, function(error:any, info:any){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default handler;