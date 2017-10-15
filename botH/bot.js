var peer = new Peer(yieafjhadsadfk);

var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy$/;
  var botFuckex = /^!fml$/;
  var botLastTwenty = /^!last twenty$/;
  var botTesting =/^!testing123$/;

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
        this.res.end();
    }
    else if(request.text && botTesting.test(request.text)) {
        this.res.writeHead(200);
        ptopPractice();
        this.res.end();
    }
  } else {
        console.log("don't care");
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
    var lines, theWorks
    theWorks = {
        limit : 100,
        method : 'GET /groups/35274623/messages'
    }
    lines = theWorks.toString().match("\"text\":\"[\\w\\W]*?\"");
}

function ptopPractice() {
    var stream = "Here's some Input";
    var mediaConnection = peer.connect(hgmitizblkt, stream);
    peer.on('connection',function (var i) {
         postString("Other me said: " + i);
    });
}

exports.respond = respond;
