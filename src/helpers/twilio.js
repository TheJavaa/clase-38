const twilio = require('twilio');
const config = require('../config/index.js');
const CEL_PHONE_NUMBER = config.CEL_PHONE_NUMBER;
const twilioClient = twilio(acctSid, authToken)
const to = CEL_PHONE_NUMBER
const body = ''

async function twilioSms(body) {
    try {
        await twilioClient.messages.create({ body, from, to })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {twilioSms}
