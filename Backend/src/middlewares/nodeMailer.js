const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "ccrewdb@gmail.com",
    pass: "cxhjzthsferhkgtx"
  }
})

// async..await is not allowed in global scope, must use a wrapper
const main = async (
  patientEmail,password
) => {
  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"Therapyst United 👨‍💻 " <ccrewdb@gmail.com>',
      to: `${patientEmail}`,
      subject: `The Biggest center Of Therapys`,
      text: `Hi User`,
      html: `
    <html>
      <body>
        <p>Hi,</p>
        <p>Please save you Password</p>
        <p>PASSWORD:${password}</p>
      </body>
    </html>
    `
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = main;