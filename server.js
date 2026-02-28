const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Send OTP Endpoint
app.post('/send-otp', async (req, res) => {
    const { mobile, otp, message } = req.body;
    
    try {
        // Option 1: SSL Wireless (Bangladesh)
        await axios.post('https://api.sslwireless.com/smsapi', {
            api_key: 'YOUR_SSL_API_KEY',
            type: 'text',
            contacts: mobile,
            senderid: 'LiponShop',
            msg: message
        });
        
        // Option 2: Twilio (International)
        // await axios.post('https://api.twilio.com/2010-04-01/Accounts/YOUR_SID/Messages.json', {
        //     From: '+1234567890',
        //     To: `+88${mobile}`,
        //     Body: message
        // }, {
        //     auth: {
        //         username: 'YOUR_TWILIO_SID',
        //         password: 'YOUR_TWILIO_TOKEN'
        //     }
        // });
        
        // Option 3: Msg91
        // await axios.post('https://api.msg91.com/api/sendotp.php', {
        //     authkey: 'YOUR_MSG91_KEY',
        //     mobile: mobile,
        //     message: message,
        //     sender: 'LiponShop'
        // });
        
        res.json({ success: true, message: 'OTP sent successfully' });
        
    } catch (error) {
        console.error('SMS Error:', error);
        res.status(500).json({ success: false, message: 'Failed to send SMS' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});