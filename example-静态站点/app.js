const http = require('http');

const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Nodejs 静态站点部署</h1>
  <nav>
    <ul>
    <li><a target="_blank" href="/a">Nodejs 电影网站</a></li>
    <li><a target="_blank" href="/a">Nodejs 电影网站</a></li>
    <li><a target="_blank" href="/a">Nodejs 电影网站</a></li>
    <li><a target="_blank" href="/a">Nodejs 电影网站</a></li>
    </ul>
  </nav>
</body>
</html>
`;

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(homePage);
  })
  .listen(3000, () => {
    console.log('Server Running At 3000');
  });
