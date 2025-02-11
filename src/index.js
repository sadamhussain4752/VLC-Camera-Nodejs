const rtspStream = require('node-rtsp-stream');

//@desc     Camera Authentication
var ip_address = "36.255.85.5" //NOTE: replace it with your camera IP address

//@desc     Camera username and password
var username = "admin";
var password="Florenza2026";

//@desc     A channel of camera stream
stream = new rtspStream({
    streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address +':554/Streaming/Channels/101',
    wsPort: 9999    
});