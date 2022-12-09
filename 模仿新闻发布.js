var http = require('http');
var querystring = require('querystring');
var postHTML =
  '<html><head><meta charset="utf-8"><title>文章修改页面</title></head>' +
'<h1 style="color:red">通过nodeJS模仿新闻发布-作者killer</h1>'+
  '<body>' +
  '<form method="post">' +
  '标题： <input name="name"style="width:800px"><br>' +
  '新闻： <input name="url" style="width:800px;height:400px"><br>' +
  '<input type="submit" style="color:red;size:88px">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
var body = ""
  req.on('data', function(chunk) {
  body += chunk;
  });
req.on('end',function (){
 body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
 if(body.name && body.url) {
    res.write("" + body.name);
res.write("<h1>");
res.write("" + body.url);
} else {
res.write(postHTML);
}
res.end();
});
}).listen(80);
console.log("注入，启动》〉》〉》〉》ps：通过node模仿新闻发布-作者killer如果要写数据库，加qq2899356288这个项目来自本地,端口来自：80")