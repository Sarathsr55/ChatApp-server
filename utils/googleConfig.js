const {google} = require('googleapis')

const GOOGLE_CLIENT_ID = PROCESS.ENV.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = PROCESS.ENV.GOOGLE_CLIENT_SECRET

exports.oauth2client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'postmessage'
)
