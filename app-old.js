const http = require('http');


http.createServer( (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  res.writeHead(200, { 'Content-Type': 'application/csv' });

  res.write('id, nombre\n');
  res.write('1, Lou\n');
  res.write('2, Salem\n');
  res.write('3, Duquesa\n');
  res.write('4, Nina\n');
  res.end();
}).listen( 8080 );