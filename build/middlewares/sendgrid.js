"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

_mail["default"].setApiKey(process.env.SENDGRID_API_KEY); // const msg = {
//     to: 'test@example.com',
//     from: 'test@example.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// };
// sgMail.send(msg);
// (async() => {
//     try {
//         await sgMail.send(msg);
//         console.log('sent')
//     } catch (error) {
//         console.error(error);
//         if (error.response) {
//             console.error(error.response.body);
//         }
//     }
// })();