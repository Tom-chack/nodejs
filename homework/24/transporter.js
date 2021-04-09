const {createTransport} = require('nodemailer');

module.exports.transporter = createTransport({
    host: "mail.profprojects.org",
    port: 465,
    secure: true,
    auth: {
        user: 'node@profprojects.org',
        pass: 'EBHpKw~Tgh4~',
    }
});