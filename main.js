var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
      </head>
      <body>
          <ul>
              <li><a href="/?id=html">html</a></li>
          </ul>
          <h1>no.1</h1>
          <h2>${title}</h2>
      </body>
      </html>
    `;
    console.log(queryData.id);
    // response.end(fs.readFileSync(__dirname + _url));
    // response.end(queryData.id);
    response.end(template);
 
});
app.listen(80);