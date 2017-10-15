var HTTPS = require('https');
var HTTP = require('http');
var stream = require('stream');
var fileSys = require('fs');
var util = require('util');
var cool = require('cool-ascii-faces');
var botID = process.env.BOT_ID;
var io = require('socket.io')(server);
var p2p = require('socket.io-p2p-server').Server;
var peer = new Peer(yieafjhadsadfk);
io.use(p2p);


function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy$/;
  var botFuckex = /^!fml$/;
  var botLastTwenty = /^!gen$/;
  var botTesting =/^!test$/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else if (request.text && botFuckex.test(request.text)) {
    this.res.writeHead(200);
    postFuck();
    this.res.end();
  } else if (request.text && botLastTwenty.test(request.text)) {
    this.res.writeHead(200);
    doTwenty();
    this.res.end()
  } else if(request.text && botTesting.test(request.text)) {
      this.res.writeHead(200);
      ptopPractice();
      this.res.end();
  } else {
    console.log("message: "  + request.text);
    this.res.writeHead(200);
    this.res.end();
  }
}



function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = cool();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postFuck() {
  var botResponse, options, body, botReq;

  botResponse = "fuck";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


function postString(String s) {
  var botResponse, options, body, botReq;

  botResponse = s;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function doTwenty() {

  var botResponse, botRequest, options;
  options = {
    path : 'https://api.groupme.com/v3/groups/18268055/messages?limit=20&token=007780d0809a0135a92c73fc1c1777f9',
    method : 'GET',
    type : "JSON"
  };

  botRequest = HTTPS.request(options, function(res) {
    res.on("readable", function handleReadableEvent() {
      var chunk = null;

      while ((chunk = response.read()) != null) {
        console.log("Chunk received: " + chunk.length + " bytes.");
      }
    })
  });
  botRequest.on("error", function handleError(error) {
    console.log("Request error: " + error);
  });

/*  botRequest = HTTPS.request(options, function(res) {
    if (res.statusCode == 200) {
      console.log("SHIT");
      botResponse = JSON.stringify(res.read());
      botResponse = botResponse.match("\"text\":\"[\\w\\W]*?\"");

    } else {
      console.log("shit went wrong: " + res.statusCode);
    }
  }) */
}

function ptopPractice() {
    var stream = "Here's some Input";
    var mediaConnection = peer.connect(hgmitizblkt, stream);
    peer.on('connection',function (var i) {
         postString("Other me said: " + i);
    });
}
exports.respond = respond;
